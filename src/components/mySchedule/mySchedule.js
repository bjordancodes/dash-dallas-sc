import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_schedule} from '../../Dux/scheduleReducer';
import {get_players_for_teams} from '../../Dux/teamReducer';

class MySchedule extends Component {

    componentDidMount(){
        this.props.get_schedule();
        this.props.get_players_for_teams();
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

export default connect(mapStateToProps, {get_schedule, get_players_for_teams})(MySchedule);