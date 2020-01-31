const Person = {
    name:'João Pedro',
    age:'18',
    location:'Esteio'
}
var template2 = (
    <div>
    <h1>{Person.name}</h1>
    <p>{Person.age}</p>
    <p>{Person.location}</p>
    </div>
); 
var path = document.querySelector('body')

ReactDOM.render(template2, path)