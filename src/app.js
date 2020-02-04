const app = {
    title: 'Indecision App',
    subtitle: 'This is my subtitle',
    options: []
}
const onFormSubmit = (e) => {
    e.preventDefault();
    app.options.push(e.target.option.value);
    renderPage();
}

const onRemoveAll = () => {
    app.options = []
    renderPage()
}

const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNum]
    alert(option)
}

const path = document.querySelector('div#app')
const renderPage = () =>{
    var template = (
        <div>
            <h1>{app.title}</h1>
            
            {app.subtitle&&<p>{app.subtitle}</p>}
            
            <p>{app.options.length>0?'Here are your options':'No Options'}</p>
            <p>{app.options.length}</p>
            <ol>
                {app.options.map((option)=>{
                    return <li key={option}>{option}</li>
                })}
            </ol>
        

            <form onSubmit={onFormSubmit}>
            <input  name="option"/>
            <button>add Option</button>
            </form>
            <button disabled={!app.options.length>0} onClick={onMakeDecision} >Make Decision</button>
            <button onClick={onRemoveAll} >Remove All</button>
        </div>
    );
    ReactDOM.render(template, path);
    }

    renderPage();
