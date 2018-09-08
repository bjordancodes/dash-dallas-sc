import React, {Component} from 'react';
import {connect} from 'react-redux';

class ManagePlayers extends Component {
    render(){
        return(
            <h1>Manage Players</h1>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(ManagePlayers);