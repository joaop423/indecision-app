const app = {
    title: 'Indecision App',
    subtitle: 'This is my subtitle',
    options: ['one', 'two']
}

let count = 0

const incrase = () => {
    count++
    renderPage();
}

const deacrase = () => {
    count--
    renderPage();
}

const reset = () =>{
    count = 0
    renderPage()
}
const path = document.querySelector('body')
const renderPage = () =>{
    var template = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incrase}>+1</button>
            <button onClick={deacrase}>-1</button>
            <button onClick={reset}>reset</button>
    
        </div>
    );
    ReactDOM.render(template, path)
    }

    renderPage();
