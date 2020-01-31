const name = 'Vitorrio'
const funcao = (nome) => nome + '%'
var template2 = (
    <div>
    <h1>{funcao(name)}</h1>
    <p>Age: 18</p>
    <p>Location: Porto Alegre</p>
    </div>
); 
var path = document.querySelector('body')

ReactDOM.render(template2, path)