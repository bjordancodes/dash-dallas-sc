import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_schedule} from '../../Dux/scheduleReducer';

class MySchedule extends Component {

    componentDidMount(){
        this.props.get_schedule();
    }

    render(){
        console.log(this.props.schedule)
        if (this.props.schedule){
            var scheduleMap = this.props.schedule.map((e, i)=> <p>{e.leaguename}</p>)
        }
        return(
            <div>
            <h1>My Schedule</h1>
            {scheduleMap}
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    ...state.schedule
});

export default connect(mapStateToProps, {get_schedule})(MySchedule);