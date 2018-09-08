import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddNewPlayer extends Component {
    render(){
        return(
            <h1>Add New Player</h1>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(AddNewPlayer);