import React, {Component} from 'react';
import {connect} from 'react-redux';

class masterSchedule extends Component {
    render(){
        return(
            <h1>Master Schedule</h1>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(masterSchedule);