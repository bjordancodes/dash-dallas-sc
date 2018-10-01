import React, {Component} from 'react';
import '../managerPortal/managePlayers/managePlayers.css'
import axios from 'axios';
import ReactTable from 'react-table';
import {Link} from 'react-router-dom';
import {check} from 'react-icons-kit/fa/check';
import {close} from 'react-icons-kit/fa/close';
import { Icon } from 'react-icons-kit'



export default class TeamInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            teaminfo:[],
            from: 'dashsoccersc@gmail.com',
            to: '',
            subject: '',
            text: '',
          }
        }
    
    
    sendEmail = (e) => {
        console.log(e)
        axios.post('/sendMail', {email: {
            from: 'Dash Dallas Soccer, <dashsoccersc@gmail.com>',
            to: e.email,
            subject: "RSVP to Your Next Game!",
            text: `Hi ${e.playername}! One of your teammates is wondering if you're going to make the game this week.
            Why don't you RSVP here? localhost:3001/login`}})
    }

    componentWillMount(){
        axios.post('/api/get_players_for_teams', {teamid: this.props.props.match.params.id})
        .then(res=> this.setState({teaminfo: res.data}))
        .catch(err=> console.log(err));
        
    }

    rsvpUpdate = (e) => {
        console.log(e.target.value)
        axios.post('/api/rsvp', {rsvp: e.target.value})
        .then(alert('RSVP updated!'))
        .catch(err => console.log(err))
    }
    render(){
        console.log(this.state)
        return(
            <div>
            <Link to="/myTeams" style={{color: "black"}}>
            <p>{`<< back` }</p>
            </Link>
            <h1> My Teams </h1>
            {/* <div style={{ color: "green" }}>
            <Icon icon={check} size={32}/>
            </div> */}
            <p> Can you make it to the next game?</p><br/>
            <button value={"Yes"
            //     `<div style={{ color: "green" }}>
            // <Icon icon={check} size={32}/>
            // </div>`
            } onClick={(e) => this.rsvpUpdate(e)}>RSVP Yes!</button>
            <button value={
                "No"
            //     "<div style={{ color: \"red\" }}>" + 
            // "<Icon icon={close} size={32}/>" + 
            // "</div>"
            } onClick={(e)=>this.rsvpUpdate(e)}>RSVP No :(</button>
                <button value="?" onClick={(e)=>this.rsvpUpdate(e)}>RSVP Unsure</button>
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
                    },
                    {
                        Header: '',
                        Cell: row => (
                            <div>
                                <button onClick={()=> this.sendEmail(row.original)}>E-Mail RSVP Reminder</button>
                            </div>)
                    }
                
                ]}/>
            </div>
        )
    }
}