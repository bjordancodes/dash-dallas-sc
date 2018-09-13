import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_teams} from '../../../Dux/teamReducer';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class AddNewSchedule extends Component {
    constructor(){
        super();
        this.state={
            leaguename: '',
            team1: '',
            wdl1: '',
            team2: '',
            wdl2: '',
            matchdate: '',
            matchtime: ''
        }
    }

    update_cell = (column, e) => {
        return this.setState({[column]: e});
    }

    submitForm = () => {
        var {leaguename, team1, team2, matchdate, matchtime} = this.state;
        console.log(this.state)
        axios
        .post(`/api/schedule`, {leaguename, team1, team2, matchdate, matchtime})
        .then(response=> alert('Schedule Added!'))
        .catch(err=> alert('Error'))
    }

    render(){
        return(
            <div>
              <Link to='/masterSchedule' style={{color: "black", textAlign: "right"}}>{`<<`}Back to Master Schedule</Link>  
                <h1> Add New Team</h1>
        
        <form>
        <input type="text" onChange={(e)=>this.update_cell("leaguename", e.target.value)} placeholder="League Name"/><br/>
        <input type="text" onChange={(e)=>this.update_cell("team1", e.target.value)} placeholder="Team 1"/><br/>
        <input type="text" onChange={(e)=>this.update_cell("team2", e.target.value)} placeholder="Team 2"/><br/>
        <input type="text" onChange={(e)=>this.update_cell("matchdate", e.target.value)} placeholder="Date"/><br/>
        <input type="text" onChange={(e)=>this.update_cell("matchtime", e.target.value)} placeholder="Military Time"/><br/>
        <button onClick={this.submitForm}>Submit</button>
            <p/>
        <button onClick={this.resetForm}>Cancel</button>
        </form>
            </div>
        )
    }
}