'use strict';

var name = 'Vitorrio';
var funcao = function funcao(nome) {
    return nome + '%';
};
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        funcao(name)
    ),
    React.createElement(
        'p',
        null,
        'Age: 18'
    ),
    React.createElement(
        'p',
        null,
        'Location: Porto Alegre'
    )
);
var path = document.querySelector('body');

ReactDOM.render(template2, path);
