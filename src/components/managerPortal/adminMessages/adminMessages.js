import React, {Component} from 'react';
import {connect} from 'react-redux';

class AdminMessages extends Component {
    render(){
        return(
            <h1>Admin Messages</h1>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(AdminMessages);