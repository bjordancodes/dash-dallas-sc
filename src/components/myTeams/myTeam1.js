import React, {Component} from 'react';
import '../managerPortal/managePlayers/managePlayers.css'
import axios from 'axios';
import ReactTable from 'react-table';
import {Link} from 'react-router-dom';


export default class TeamInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            teaminfo:[]
        }
    }
    
    componentWillMount(){
        axios.post('/api/get_players_for_teams', {teamid: this.props.props.match.params.id})
        .then(res=> this.setState({teaminfo: res.data}))
        .catch(err=> console.log(err));
        
    }

    playerName = (id) => {
        if(id===this.state.teaminfo.playerid){
            return this.state.teaminfo.playername
        }
        else {
            return null
        }
    }
    rsvpUpdate = () => {
            
    }
    render(){
        console.log(this.state)
        return(
            <div>
            <Link to="/myTeams" style={{color: "black"}}>
            <p>{`<< back` }</p>
            </Link>
            <h1> My Teams </h1>
                <ReactTable
                data= {this.state.teaminfo}
                columns={[
                    {
                        Header: 'Teammates',
                        id: 1,
                        accessor: 'playername'
                    },
                    {
                        Header: 'Game RSVP',
                        accessor: 'rsvp'
                    }
                
                ]}/>
            </div>
        )
    }
}