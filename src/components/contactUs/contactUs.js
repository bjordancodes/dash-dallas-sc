import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class ContactUs extends Component {
    constructor(props){
        super(props)
        this.state = {
                from: '',
                to: 'dashsoccersc@gmail.com',
                subject: '',
                text: '',
              }
        
    }


updateEmail = (cell, message) => {
    this.setState({[cell]: message})
}

sendEmail = () => {
    axios.post('/sendMail', {email: this.state})
}

    render(){
        console.log(this.state)
        return(
            <div>
            <h1>Contact Us</h1>
            <input placeholder="Your email" type="text" onChange={(e)=> this.updateEmail('from', e.target.value)}/><br/>
            <input placeholder="Subject" type="text" onChange={(e)=> this.updateEmail('subject', e.target.value)}/><br/>
            <input placeholder="Your Message" type="text" onChange={(e)=> {
                // this.updateEmail('text', e.target.value); 
            this.updateEmail('text', `Dear Jordan, ${e.target.value}reply to: ${this.state.from}`)}}/><br/>
            <button onClick={this.sendEmail}>Send!</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(ContactUs);