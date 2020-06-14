import React from 'react';

class LeadsMagnet extends React.Component {
    constructor(props) {
        super(props);
        this.handleCheckMail = this.handleCheckMail.bind(this);
        this.state = {
            value: '',
            response: '',
            error: ''
        }
    }
    handleCheckMail(e) {
        e.preventDefault();
        alert('Clicked');
    }
    render() {
        return (
            <div>
            <h1><img src="favicon.ico"/>Leads Magnet <span>beta</span></h1>
            <br/>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="input-group">
                            <input type="email" class="form-control" placeholder='Enter your email and learn when we launch'/>
                            <span class="input-group-btn">
                                <button class="btn btn-secondary" type="button" onClick={this.handleCheckMail}>Submit</button>
                            </span>
    </div>
</div>
</div>
<br/>
<br/>
                <h1>SAVE A TON OF TIME IN SAVING YOUR PROSPECT'S CREDENTIALS!</h1>
            </div>
        );
    }
} 
export default LeadsMagnet;