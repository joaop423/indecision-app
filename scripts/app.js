'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.removeAll = _this.removeAll.bind(_this);
        _this.whatShouldIDo = _this.whatShouldIDo.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'removeAll',
        value: function removeAll() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'whatShouldIDo',
        value: function whatShouldIDo() {
            var optionSelected = this.state.options[Math.floor(Math.random() * this.state.options.length)];
            alert(optionSelected);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (this.state.options.indexOf(option) !== -1) {
                return 'The Option Already Exists!!!';
            } else {

                this.setState(function (prevState) {
                    return {
                        options: prevState.options.concat(option)
                    };
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var subTitle = 'Put your life in hands of a computer';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subTitle: subTitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    whatShouldIDo: this.whatShouldIDo
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    removeAll: this.removeAll
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            if (option) {
                var error = this.props.handleAddOption(option);
                this.setState(function () {
                    return {
                        error: error
                    };
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { name: 'option', placeholder: 'Add your Option...' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                ),
                this.state.error && alert(this.state.error)
            );
        }
    }]);

    return AddOption;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subTitle && React.createElement(
            'h2',
            null,
            props.subTitle
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                disabled: !props.hasOptions,
                onClick: props.whatShouldIDo
            },
            'What Should i do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, optionText: option });
        }),
        React.createElement(
            'button',
            { onClick: props.removeAll },
            'Remove All'
        )
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText
    );
};

IndecisionApp.defaultProps = {
    options: []
};

Header.defaultProps = {
    title: 'Indecision App'
};

ReactDOM.render(React.createElement(IndecisionApp, null), document.querySelector('div#app'));
