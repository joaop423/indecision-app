class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App'
        const subTitle = 'Put your life in hands of a computer';
        const options = ['thing one', 'thing two', 'thing four']

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}


class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What Should i do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }
    
    removeAll(){
        alert(this.props.options)
    }

    render() {
        return (
            <div>
                {this.props.options.map((option) => <Option key={option} optionText={option} />)}
                <button name="removeAll" onClick={this.removeAll}>Remove All</button>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        option&&alert(option);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input name="option" placeholder="Add your Option..." />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.querySelector('div#app'));
