class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
            <Header/>
            <Action />
            <Options />
            <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision-app</h1>
                <h2>Put your life in hands of a computer</h2>
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
    render() {
        return (
            <div>
                Options Component here
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                AddOption component here
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>, document.querySelector('div#app'));
