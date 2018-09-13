import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_schedule} from '../../Dux/scheduleReducer';

import ReactTable from 'react-table';
import "react-table/react-table.css";

class TodaysSchedule extends Component {

    componentDidMount(){
        this.props.get_schedule();
    }

    render(){
        if (this.props.schedule){
        console.log(this.props.schedule)}
        return(
            <div>
                <h1>Today's Schedule</h1>
            <ReactTable
            data={this.props.schedule}
            columns={[
                {
                    Header: "League Name",
                    accessor: "leaguename"
                },
                {
                    Header: "Home Team",
                    accessor: "team1"
                },
                {
                    Header: "Win/Loss/Draw",
                    accessor: "wdl1"
                },
                {
                    Header: "Visiting Team",
                    accessor: "team2"
                },
                {
                    Header: "Win/Loss/Draw",
                    accessor: "wdl2"
                },
                {
                    Header: "Date",
                    accessor: "matchdate"
                },
                {
                    Header: "Time",
                    accessor: "matchtime"
                }


            ]}
            defaultPageSize={10}
            className="-striped -highlight"
                    />

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.schedule
});

export default connect(mapStateToProps, {get_schedule})(TodaysSchedule);