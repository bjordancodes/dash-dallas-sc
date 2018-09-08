import React, {Component} from 'react';
import {connect} from 'react-redux';

class ContactUs extends Component {
    render(){
        return(
            <h1>Contact Us</h1>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(ContactUs);