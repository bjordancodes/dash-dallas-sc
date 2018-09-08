import React, {Component} from 'react';
import {connect} from 'react-redux';

class UpdateStats extends Component {
    render(){
        return(
            <h1>Update Stats</h1>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(UpdateStats);