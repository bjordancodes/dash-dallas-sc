import React, {Component} from 'react';
import {connect} from 'react-redux';

class MyAccount extends Component {
    render(){
        return(
            <h1>My Account</h1>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(MyAccount);