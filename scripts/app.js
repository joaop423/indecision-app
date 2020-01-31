'use strict';

var app = {
    title: 'Indecision App',
    subtitle: 'put your life in the hands of a computer'
};
var getSubtitle = function getSubtitle(subtitle) {
    if (subtitle) {
        return React.createElement(
            'h2',
            null,
            subtitle
        );
    }
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    getSubtitle(app.subtitle)
);
var path = document.querySelector('body');

ReactDOM.render(template, path);
