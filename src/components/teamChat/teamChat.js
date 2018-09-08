import React, {Component} from 'react';
import {connect} from 'react-redux';

class TeamChat extends Component {
    render(){
        return(
            <h1>Team Chat</h1>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(TeamChat);