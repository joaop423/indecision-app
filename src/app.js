class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.removeAll = this.removeAll.bind(this);
        this.whatShouldIDo = this.whatShouldIDo.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.removeOption = this.removeOption.bind(this);
        this.state = {
            options: props.options
        }
    }
    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem('options'))
            if (options) {
                this.setState(() => ({
                    options: options
                }))
            }
        } catch (error) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            localStorage.setItem('options', JSON.stringify(this.state.options))
        }
    }

    removeAll() {
        this.setState(() => ({
            options: []
        })
        )
    }

    removeOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option
            })
        })
        )
    }

    whatShouldIDo() {
        const optionSelected = this.state.options[Math.floor(Math.random() * this.state.options.length)];
        alert(optionSelected);
    }

    handleAddOption(option) {
        if (this.state.options.indexOf(option) !== -1) {
            return 'The Option Already Exists!!!'
        } else {
            this.setState((prevState) => ({
                options: prevState.options.concat(option)
            })
            )
        }
    }

    render() {
        const subTitle = 'Put your life in hands of a computer';
        return (
            <div>
                <Header subTitle={subTitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    whatShouldIDo={this.whatShouldIDo}
                />
                <Options
                    options={this.state.options}
                    removeAll={this.removeAll}
                    removeOption={this.removeOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            const error = this.props.handleAddOption(option);
            this.setState(() => ({
                error: error
            })
            )
            if (!error) {
                e.target.elements.option.value = "";
            }
        }

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input name="option" placeholder="Add your Option..." />
                    <button>Add Option</button>
                </form>
                {this.state.error && alert(this.state.error)}
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
}

const Action = (props) => {
    return (
        <div>
            <button
                disabled={!props.hasOptions}
                onClick={props.whatShouldIDo}
            >
                What Should i do?
                </button>
        </div>
    )
}


const Options = (props) => {
    return (
        <div>
            {props.options.map((option) => <Option
                key={option}
                optionText={option}
                removeOption={props.removeOption}
            />)}
            <button onClick={props.removeAll}>Remove All</button>
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => props.removeOption(props.optionText)}
            >Remove</button>
        </div>
    )
}

IndecisionApp.defaultProps = {
    options: []
}

Header.defaultProps = {
    title: 'Indecision App'
}

ReactDOM.render(<IndecisionApp />, document.querySelector('div#app'));
