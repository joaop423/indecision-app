class Pagina extends React.Component {
    log(){
        console.log('rex');
        
    }

    componentDidMount(){
        console.log('componentDidMount');
        
    }
    render() {
        return (
            <div>
            <h1>Titulo</h1>
            <Options options={['salgado', 'refri']} log={this.log} />
            </div>
        )
    }
}
    const Options = (props) => {
        return (
            <div>
                {props.options.map((option) => {
                    return (
                        <Option 
                        option={option}
                        log={props.log} />
                    )
                })}
            </div>
        )
    }

    const Option = (props) => {
        return (
            <div>
            <span>{props.option}</span>
            <button onClick={props.log
            }>Remove</button>
            </div>
        )
    }
    ReactDOM.render(<Pagina />, document.querySelector('div#teste'))