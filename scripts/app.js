'use strict';

var Person = {
    name: 'João Pedro',
    age: '18',
    location: 'Esteio'
};
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        Person.name
    ),
    React.createElement(
        'p',
        null,
        Person.age
    ),
    React.createElement(
        'p',
        null,
        Person.location
    )
);
var path = document.querySelector('body');

ReactDOM.render(template2, path);
