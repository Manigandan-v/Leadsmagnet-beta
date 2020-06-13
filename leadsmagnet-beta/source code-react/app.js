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
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        
    }
    handleCheckMail(e) {
        e.preventDefault();
        alert('Clicked');
    }
    render() {
        return (
            <div>
                <h1><img src="favicon.ico" />LeadsMagnet</h1>
                <form onSubmit={this.handleCheckMail}>
                    <input type="email" placeholder="Enter your email and learn when we launch" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
                <h1>SAVE A TON OF TIME IN SAVING YOUR PROSPECT'S CREDENTIALS!</h1>
            </div>
        );
    }
} 
export default LeadsMagnet;