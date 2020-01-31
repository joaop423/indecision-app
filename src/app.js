const app = {
    title:'Indecision App',
    subtitle:'put your life in the hands of a computer'
}
const getSubtitle = (subtitle)=>{
    if (subtitle) {
        return <h2>{subtitle}</h2>
    }
}
var template = (
    <div>
    <h1>{app.title}</h1>
    {getSubtitle(app.subtitle)}
    </div>
); 
var path = document.querySelector('body')

ReactDOM.render(template, path)