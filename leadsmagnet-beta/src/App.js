import React from 'react';
import axios from 'axios';

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
        _this.handleChange = _this.handleChange.bind(_this);
        _this.state = {
            email: '',
            response: '',
            error: ''
        };
        return _this;
    }

    _createClass(LeadsMagnet, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ email: event.target.value });
        }
    }, {
        key: 'handleCheckMail',
        value: function handleCheckMail(e) {
            var _this2 = this;

            e.preventDefault();
            var key = process.env.REACT_APP_API;
            axios.get('https://intern-send-mail-api.herokuapp.com/user_2?Emailaddress=' + this.state.email + '&key=' + key).then(function (val) {
                console.log(val.data);
                _this2.setState({ response: val.data });
                if (val.data.answer) {
                    var modal = document.getElementById("myModal");
                    var span = document.getElementsByClassName("close")[0];
                    modal.style.display = "block";
            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            };

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            };
                    console.log("Mail sent");
                } else if (val.data.error) {
                    console.log("Invalid mail");
                    var modal2 = document.getElementById("myModal2");
                    var span2 = document.getElementsByClassName("close")[1];
                    modal2.style.display = "block";
            // When the user clicks on <span> (x), close the modal
            span2.onclick = function () {
                modal2.style.display = "none";
            };

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
                if (event.target === modal2) {
                    modal2.style.display = "none";
                }
            };
                }
            }).catch(function (e) {
                console.log(e);
                _this2.setState({ error: e });
                console.log(e);
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
                    React.createElement('img', { src: 'images/favicon.ico' }),
                    'Leads Magnet ',
                    React.createElement(
                        'span',
                        null,
                        'beta'
                    )
                ),
                React.createElement('br', null),
                React.createElement(
                    'form',
                    { onSubmit: this.handleCheckMail },
                    React.createElement(
                        'div',
                        { className: 'row align-items-center' },
                        React.createElement(
                            'div',
                            { className: 'col' },
                            React.createElement(
                                'div',
                                { className: 'input-group' },
                                React.createElement('input', { type: 'email', className: 'form-control', name: 'usr_mail', onChange: this.handleChange, placeholder: 'Enter your email and learn when we launch' }),
                                React.createElement(
                                    'span',
                                    { className: 'input-group-btn' },
                                    React.createElement(
                                        'button',
                                        { className: 'btn btn-secondary', type: 'submit' },
                                        'Submit'
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement('br', null),
                React.createElement(
                    'h3',
                    null,
                    'SAVE A TON OF TIME IN SAVING YOUR PROSPECT\'S CREDENTIALS!'
                ),
                 React.createElement(
                    'div',
                    { id: 'myModal', 'class': 'modal' },
                    React.createElement(
                        'div',
                        { 'class': 'modal-content' },
                        React.createElement(
                            'span',
                            { 'class': 'close' },
                            '\xD7'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Thanks for signing up with us..'
                        )
                    )
                ),
                 React.createElement(
                    'div',
                    { id: 'myModal2', 'class': 'modal' },
                    React.createElement(
                        'div',
                        { 'class': 'modal-content' },
                        React.createElement(
                            'span',
                            { 'class': 'close' },
                            '\xD7'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Please enter valid email to continue..'
                        )
                    )
                )
            );
        }
    }]);

    return LeadsMagnet;
}(React.Component);

export default LeadsMagnet;
