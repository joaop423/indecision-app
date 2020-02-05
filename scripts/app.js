'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//REVISAR O TOGGLE VISIBILITY
var MainPage = function (_React$Component) {
    _inherits(MainPage, _React$Component);

    function MainPage() {
        _classCallCheck(this, MainPage);

        return _possibleConstructorReturn(this, (MainPage.__proto__ || Object.getPrototypeOf(MainPage)).apply(this, arguments));
    }

    _createClass(MainPage, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Counter, null),
                React.createElement(Visibility, null)
            );
        }
    }]);

    return MainPage;
}(React.Component);

var Counter = function (_React$Component2) {
    _inherits(Counter, _React$Component2);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this2 = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this2.plusOne = _this2.plusOne.bind(_this2);
        _this2.minusOne = _this2.minusOne.bind(_this2);
        _this2.reset = _this2.reset.bind(_this2);
        _this2.state = {
            count: 0
        };
        return _this2;
    }

    _createClass(Counter, [{
        key: 'plusOne',
        value: function plusOne() {
            this.setState(function (prevState) {
                return {
                    count: ++prevState.count
                };
            });
        }
    }, {
        key: 'minusOne',
        value: function minusOne() {
            this.setState(function (prevState) {
                return {
                    count: --prevState.count
                };
            });
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.setState(function (prevState) {
                return {
                    count: 0
                };
            });
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
                    'Counter: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.plusOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.minusOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.reset },
                    'reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

var Visibility = function (_React$Component3) {
    _inherits(Visibility, _React$Component3);

    function Visibility(props) {
        _classCallCheck(this, Visibility);

        var _this3 = _possibleConstructorReturn(this, (Visibility.__proto__ || Object.getPrototypeOf(Visibility)).call(this, props));

        _this3.toggleVisibility = _this3.toggleVisibility.bind(_this3);
        _this3.state = {
            visibility: true
        };
        return _this3;
    }

    _createClass(Visibility, [{
        key: 'toggleVisibility',
        value: function toggleVisibility() {
            this.setState(function (prevState) {
                return {
                    visibility: !prevState.visibility
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.toggleVisibility },
                    this.state.visibility ? 'Hide Detais' : 'Show details'
                )
            );
        }
    }]);

    return Visibility;
}(React.Component);

ReactDOM.render(React.createElement(MainPage, null), document.querySelector('div#app'));
