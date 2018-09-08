import React, {Component} from 'react';
import {connect} from 'react-redux';

class MySchedule extends Component {
    render(){
        return(
            <h1>My Schedule</h1>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(MySchedule);