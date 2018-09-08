import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddNewTeam extends Component {
    render(){
        return(
            <h1>Add New Team</h1>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(AddNewTeam);