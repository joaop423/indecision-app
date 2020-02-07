'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagina = function (_React$Component) {
    _inherits(Pagina, _React$Component);

    function Pagina() {
        _classCallCheck(this, Pagina);

        return _possibleConstructorReturn(this, (Pagina.__proto__ || Object.getPrototypeOf(Pagina)).apply(this, arguments));
    }

    _createClass(Pagina, [{
        key: 'log',
        value: function log() {
            console.log('rex');
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('componentDidMount');
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Titulo'
                ),
                React.createElement(Options, { options: ['salgado', 'refri'], log: this.log })
            );
        }
    }]);

    return Pagina;
}(React.Component);

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        props.options.map(function (option) {
            return React.createElement(Option, {
                option: option,
                log: props.log });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'span',
            null,
            props.option
        ),
        React.createElement(
            'button',
            { onClick: props.log },
            'Remove'
        )
    );
};
ReactDOM.render(React.createElement(Pagina, null), document.querySelector('div#teste'));
