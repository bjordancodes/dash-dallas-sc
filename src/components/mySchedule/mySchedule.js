import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_schedule} from '../../Dux/scheduleReducer';
import axios from 'axios';
import ReactTable from 'react-table';

class MySchedule extends Component {
    constructor(props){
        super(props);
        this.state = {
            playerid: 0,
            team1info:[],
            team2info: [],
            team3info: []
        }
    }

    componentDidMount(){
            axios.get('/api/myacc')
            .then(res=> this.setState(
                {
                    playerid: res.data[0].playerid
                }
            ))
            axios.get('/api/myteam1')
            .then(res=> this.setState(
                {
                    team1info: res.data[0].teamname
                }
            ))
            axios.get('/api/myteam2')
            .then(res=> this.setState(
                {
                    team2info: res.data[0].altteam1
                }
            ))
            axios.get('/api/myteam3')
            .then(res=> this.setState(
                {
                    team3info: res.data[0].altteam2
                }
            ))

        this.props.get_schedule();
    }

    loopMe = (arr, teamname) => {
        let newArr = [];
        for (let i = 0; i < arr.length; i++){
            if (arr[i].team1 === teamname || arr[i].team2 === teamname){
                newArr.push(arr[i])
            }
        }
        return newArr;
    }

    render(){
        console.log(this.props.schedule, this.state.team1info)
        console.log(this.loopMe(this.props.schedule, this.state.team1info));
        const mySchedule1 = this.loopMe(this.props.schedule, this.state.team1info)
        const mySchedule2 = this.loopMe(this.props.schedule, this.state.team2info)
        const mySchedule3 = this.loopMe(this.props.schedule, this.state.team3info)



        if (this.props.schedule){
            var scheduleMap = this.props.schedule.map((e, i)=> <p>{e.leaguename}</p>)
        }
        return(
            <div>
            <h1>{this.state.team1info}</h1>
            <ReactTable
            data={mySchedule1}
            columns={[
                {
                    Header: "League Name",
                    accessor: "leaguename",
                    Cell: this.renderEditable
                },
                {
                    Header: "Home Team",
                    accessor: "team1",
                    Cell: this.renderEditable
                },
                {
                    Header: "Win/Loss/Draw",
                    accessor: "wdl1",
                    Cell: this.renderEditable
                },
                {
                    Header: "Visiting Team",
                    accessor: "team2",
                    Cell: this.renderEditable
                },
                {
                    Header: "Win/Loss/Draw",
                    accessor: "wdl2",
                    Cell: this.renderEditable
                },
                {
                    Header: "Date",
                    accessor: "matchdate",
                    Cell: this.renderEditable
                },
                {
                    Header: "Time",
                    accessor: "matchtime",
                    Cell: this.renderEditable
                },
            ]}
                defaultPageSize={10}
                className="-striped -highlight"
            />
            <br/>
            <h1>{this.state.team2info}</h1>
            <ReactTable
            data={mySchedule2}
            columns={[
                {
                    Header: "League Name",
                    accessor: "leaguename",
                    Cell: this.renderEditable
                },
                {
                    Header: "Home Team",
                    accessor: "team1",
                    Cell: this.renderEditable
                },
                {
                    Header: "Win/Loss/Draw",
                    accessor: "wdl1",
                    Cell: this.renderEditable
                },
                {
                    Header: "Visiting Team",
                    accessor: "team2",
                    Cell: this.renderEditable
                },
                {
                    Header: "Win/Loss/Draw",
                    accessor: "wdl2",
                    Cell: this.renderEditable
                },
                {
                    Header: "Date",
                    accessor: "matchdate",
                    Cell: this.renderEditable
                },
                {
                    Header: "Time",
                    accessor: "matchtime",
                    Cell: this.renderEditable
                },
            ]}
                defaultPageSize={10}
                className="-striped -highlight"
            />
            <br/>
            <h1>{this.state.team3info}</h1>
            <ReactTable
            data={mySchedule3}
            columns={[
                {
                    Header: "League Name",
                    accessor: "leaguename",
                    Cell: this.renderEditable
                },
                {
                    Header: "Home Team",
                    accessor: "team1",
                    Cell: this.renderEditable
                },
                {
                    Header: "Win/Loss/Draw",
                    accessor: "wdl1",
                    Cell: this.renderEditable
                },
                {
                    Header: "Visiting Team",
                    accessor: "team2",
                    Cell: this.renderEditable
                },
                {
                    Header: "Win/Loss/Draw",
                    accessor: "wdl2",
                    Cell: this.renderEditable
                },
                {
                    Header: "Date",
                    accessor: "matchdate",
                    Cell: this.renderEditable
                },
                {
                    Header: "Time",
                    accessor: "matchtime",
                    Cell: this.renderEditable
                },
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

export default connect(mapStateToProps, {get_schedule})(MySchedule);