'use strict';

var visibility = false;
var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'hide details' : 'show details'
        ),
        visibility && React.createElement(
            'p',
            null,
            'teste'
        )
    );
    ReactDOM.render(template, document.querySelector('div#app'));
};

render();
