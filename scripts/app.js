'use strict';

var app = {
    title: 'Indecision App',
    subtitle: 'This is my subtitle',
    options: []
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    app.options.push(e.target.option.value);
    renderPage();
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderPage();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};

var path = document.querySelector('div#app');
var renderPage = function renderPage() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No Options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { name: 'option' }),
            React.createElement(
                'button',
                null,
                'add Option'
            )
        ),
        React.createElement(
            'button',
            { disabled: !app.options.length > 0, onClick: onMakeDecision },
            'Make Decision'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        )
    );
    ReactDOM.render(template, path);
};

renderPage();
