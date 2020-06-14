import React from 'react';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LeadsMagnet = function (_React$Component) {
    _inherits(LeadsMagnet, _React$Component);

    function LeadsMagnet(props) {
        _classCallCheck(this, LeadsMagnet);

        var _this = _possibleConstructorReturn(this, (LeadsMagnet.__proto__ || Object.getPrototypeOf(LeadsMagnet)).call(this, props));

        _this.handleCheckMail = _this.handleCheckMail.bind(_this);
        _this.state = {
            value: '',
            response: '',
            error: ''
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(LeadsMagnet, [{
        key: 'handleChange',
        value: function handleChange(e) {}
    }, {
        key: 'handleCheckMail',
        value: function handleCheckMail(e) {
            e.preventDefault();
            alert('Clicked');
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
                    React.createElement('img', { src: 'favicon.ico' }),
                    'Leads Magnet ',
                    React.createElement(
                        'span',
                        null,
                        'beta'
                    )
                ),
                React.createElement('br', null),
             React.createElement(
                    'div',
                    { 'class': 'row' },
                    React.createElement(
                        'div',
                        { 'class': 'col-lg-6' },
                        React.createElement(
                            'div',
                            { 'class': 'input-group' },
                            React.createElement('input', { type: 'email', 'class': 'form-control', placeholder: 'Enter your email and learn when we launch' }),
                            React.createElement(
                                'span',
                                { 'class': 'input-group-btn' },
                                React.createElement(
                                    'button',
                                    { 'class': 'btn btn-secondary', type: 'button', onClick: this.handleCheckMail },
                                    'Submit'
                                )
                            )
                        )
                    )
                ),
             React.createElement('br', null),
             React.createElement('br', null),
                React.createElement(
                    'h3',
                    null,
                    'SAVE A TON OF TIME IN SAVING YOUR PROSPECT\'S CREDENTIALS!'
                )
            );
        }
    }]);

    return LeadsMagnet;
}(React.Component);

export default LeadsMagnet;
