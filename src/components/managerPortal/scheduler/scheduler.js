import React, {Component} from 'react';
import {connect} from 'react-redux';

class scheduler extends Component {
    render(){
        return(
            <h1>Scheduler</h1>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(scheduler);