import React from 'react';
import axios from 'axios';

class LeadsMagnet extends React.Component {
    constructor(props) {
        super(props);
        this.handleCheckMail = this.handleCheckMail.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            response: '',
            error: ''
        }
    }
    handleChange(event) {
        this.setState({ email: event.target.value });
    }
    handleCheckMail(e) {
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
    render() {
        return (
            <div>
                <h1><img src="images/favicon.ico" />Leads Magnet <span>beta</span></h1>
                <br />
                <form onSubmit={this.handleCheckMail}>
                    <div className="row align-items-center">
                        <div className="col">
                            <div className="input-group">
                                <input type="email" className="form-control" name="usr_mail"onChange={this.handleChange} placeholder='Enter your email and learn when we launch' />
                                <span className="input-group-btn">
                                    <button className="btn btn-secondary" type="submit">Submit</button>
                            </span>
                        </div>
                    </div>
                </div>
                </form>
                <br />
                <h1>SAVE A TON OF TIME IN SAVING YOUR PROSPECT'S CREDENTIALS!</h1>
                <div id="myModal" class="modal">
                <div class="modal-content">
                        <span class="close">&times;</span>
                        <p>Thanks for signing up with us..</p>
                    </div>
                </div>
                <div id="myModal2" class="modal">
                <div class="modal-content">
                        <span class="close">&times;</span>
                        <p>Please enter valid email to continue..</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default LeadsMagnet;