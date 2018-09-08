import React, {Component} from 'react';
import {connect} from 'react-redux';

class TodaysSchedule extends Component {
    render(){
        return(
            <h1>Todays Schedule</h1>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(TodaysSchedule);