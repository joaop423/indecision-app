'use strict';

var app = {
    title: 'Indecision App',
    subtitle: 'This is my subtitle',
    options: ['one', 'two']
};

var count = 0;

var incrase = function incrase() {
    count++;
    renderPage();
};

var deacrase = function deacrase() {
    count--;
    renderPage();
};

var reset = function reset() {
    count = 0;
    renderPage();
};
var path = document.querySelector('body');
var renderPage = function renderPage() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: incrase },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: deacrase },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );
    ReactDOM.render(template, path);
};

renderPage();
