import React, {Component} from 'react';
import '../managerPortal/managePlayers/managePlayers.css'
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class MyTeams extends Component {
    constructor(props){
        super(props);
        this.state = {
            playerid: 1,
            teamid1: 0,
            teamid2: 0,
            teamid3: 0,
            playerinfo: [],
            team1info:[],
            team2info: [],
            team3info: []
        }
    }
    
    componentWillMount(){
        axios.get('/api/players')
        .then(res=> this.setState(
            {playerinfo: res.data,
            teamid1: res.data[0].teamid,
            teamid2: res.data[0].altteam1,
            teamid3: res.data[0].altteam2,
            playerid: res.data[0].playerid
        }))
        .catch(err=> console.log(err));
        axios.post('/api/get_players_for_teams', {teamid: this.state.teamid2})
        .then(res=> this.setState({team2info: res.data}))
        .catch(err=> console.log(err));
        axios.post('/api/get_players_for_teams', {teamid: this.state.teamid3})
        .then(res=> this.setState({team2info: res.data}))
        .catch(err=> console.log(err))
    }
    componentDidMount(){
        
    }
    

    get_team1 = () => {
        axios.post('/api/get_players_for_teams', {teamid: this.state.teamid1})
        .then(res=> this.setState({team1info: res.data}))
        .catch(err=> console.log(err))
    }

    get_team2 = () => {
        axios.post('/api/get_players_for_teams', {teamid: this.state.teamid2})
        .then(res=> this.setState({team2info: res.data}))
        .catch(err=> console.log(err))
    }

    get_team3 = () => {
        axios.post('/api/get_players_for_teams', {teamid: this.state.teamid3})
        .then(res=> this.setState({team3info: res.data}))
        .catch(err=> console.log(err))
    }
    

    render(){
        // if (this.props.player[0] != this.state.playerinfo){
        // this.thisPlayer();}
        console.log(this.state)
        return(
            <div>
            <h1> My Teams </h1>
            My name: <h1>
            <Link to={`/myTeam1/${this.state.teamid1}`}>
            <button>
                Get Team 1
                </button>
                </Link><br/>
                <Link to={`/myTeam1/${this.state.teamid2}`}>
            <button>
                Get Team 2
                </button>
                </Link><br/>
                <Link to={`/myTeam1/${this.state.teamid3}`}>
            <button>
                Get Team 3
                </button>
                </Link><br/>
            </h1>
            </div>
        )
    }
}
