
let visibility = false
const toggleVisibility = () => {
    visibility = !visibility;
    render()
}

const render = () => {
    const template = (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggleVisibility}>
        {visibility?'hide details':'show details'}
        </button>
        {visibility&&(
            <p>teste</p>
        )}
        </div>
    )
    ReactDOM.render(template, document.querySelector('div#app'))
}

render()