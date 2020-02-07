class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: true
        }
    }
    toggleVisibility() {
        this.setState((prevState) => ({
            visibility: !prevState.visibility
        })
        )

    }
    render() {
        return (
            <div>
            {this.state.visibility&&<Counter/>}
                <Visibility 
                toggleVisibility={this.toggleVisibility}
                visibility={this.state.visibility}
                />
            </div>
        )
    }
}

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.plusOne = this.plusOne.bind(this)
        this.minusOne = this.minusOne.bind(this)
        this.reset = this.reset.bind(this)
        this.state = {
            count: props.count
        }
    }

    plusOne() {
        this.setState((prevState) => {
            return {
                count: ++prevState.count
            }
        })
    }

    minusOne() {
        this.setState((prevState) => {
            return {
                count: --prevState.count
            }
        })
    }

    reset() {
        this.setState((prevState) => {
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.plusOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

class Visibility extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.toggleVisibility}>{this.props.visibility ? 'Hide Detais' : 'Show details'}</button>
            </div>
        )
    }
}
Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<MainPage />, document.querySelector('div#app'))