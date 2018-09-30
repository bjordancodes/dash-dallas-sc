import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_teams} from '../../../Dux/teamReducer'
import {get_players, get_team2, get_team3} from '../../../Dux/playerReducer';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import axios from 'axios';

class ManageTeam extends Component {
    constructor(){
        super();
        this.state={
            data: {},
            teamdata: {},
            keepOpen: [],
            teamid: 0
        }
    }
    
    componentDidMount(){
        this.props.get_teams();
        // axios.post('/api/get_players_for_teams', {teamid: 1})
        // .then(res => this.setState({teamdata: res}))
    }
    renderEditable = (cellInfo) => {
        return(
            <div
                contentEditable
                suppressContentEditableWarning
                onBlur={e=> {
                    
                    const data = [...this.props.teams.teams];
                    data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
                    this.setState({data})
                    // console.log(this.state.data);
                }
            }
            
                dangerouslySetInnerHTML={{
                    __html: this.props.teams.teams[cellInfo.index][cellInfo.column.id]
                }}
            />
        )
    }

    handleSave = (info) => {
        console.log([info.teamname, info.teamcaptain, info.league, info.teamid])
        axios.put('/api/teams', {teamname: info.teamname, teamcaptain: info.teamcaptain, league: info.league, teamid: info.teamid})
        .then(response=> alert("Team Updated!"))
        .catch(err=> alert("err"));
    }
    handleDelete = (info) => {
        console.log({teamid: info.teamid});
        axios.delete(`/api/teams/${info.teamid}`)
        .then(response=> alert("Team Deleted!"))
        .catch(err=> alert(err));
    }


    getPlayers = (info) => {
        console.log(info.teamid)
        if (!this.state.teamdata.data){
            console.log("I am number 1 ")
        return axios.post('/api/get_players_for_teams', {teamid: info.teamid})
        .then(res => this.setState({teamdata: res, teamid: info.teamid}))
    }
        else if (this.state.teamdata.data){
        if (info.teamid === this.state.teamid)
        {
            return console.log('I\'m done rendering now')
        }
        if (info.teamid != this.state.teamid)
        {
            console.log("I am number 2 "+ this.state.teamid)
            return axios.post('/api/get_players_for_teams', {teamid: info.teamid})
        .then(res => this.setState({teamdata: res, teamid: info.teamid}))
        }
    }
}

    keepOnState = (info) => {
        console.log("this is my" + info);
        this.setState({keepOpen: [...this.state.keepOpen, info]})
        console.log(this.state.keepOpen)
    }


    render(){
        if (this.state.teamdata.data){
        // console.log(this.state.teamdata.data[0].teamname)}
        }
        if (this.props.teams)
        var data = this.props.teams.teams;
        // console.log(this.state.data);
        return(
            <div>
                <h1>Manage Team</h1>
                <ReactTable
                data= {data}
                columns={[
                    {
                        Header: "Team Name",
                        accessor: "teamname",
                        Cell: this.renderEditable
                    },
                    {
                        Header: "Team Captain",
                        accessor: "teamcaptain",
                        Cell: this.renderEditable
                    },
                    {
                        Header: "League",
                        accessor: "league",
                        Cell: this.renderEditable
                    },
                    {
                        Header: '',
                        Cell: row => (
                            <div>
                                <button onClick={()=> this.handleSave(row.original)}>Save</button>
                                <button onClick={()=> this.handleDelete(row.original)}>Delete</button>
                            </div>
                        
                        ),
                        Pivot: (row=> console.log("hey it me, your pivot"))
                    }
                ]}
                defaultPageSize={20}
                className="-striped -highlight"
                collapseOnDataChange={false}
                // freezeWhenExpanded={true}
                
                

                SubComponent={row => {
                    // // this.keepOnState(row.index);
                    // console.log(row.original.teamid)
                    // // console.log(this.state.teamdata.data[0].teamname)
                    // if (row.original.teamid != this.state.teamdata.data[0].teamname){
                    //     console.log('me again')
                    this.getPlayers(row.original);
                    // else if (row.original.teamid === this.state.teamdata.data[0].teamname){
                    //     console.log('this is broken tho')
                    // }
                    return (
                        <div style={{padding: "20px"}}>
                        <ReactTable
                        data={this.state.teamdata.data}
                        columns={[
                            {Header: "Player Name",
                            accessor: "playername",
                            }
                                   
                       ]
                        }
                        defaultPageSize={10}
                        showPagination={false}
                        freezeWhenExpanded={true}
                        /></div>
                    )
                }}/>
            </div>
        )

    }
    
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps, {get_teams, get_players, get_team2, get_team3})(ManageTeam);