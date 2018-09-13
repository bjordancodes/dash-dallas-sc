import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_teams} from '../../../Dux/teamReducer';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AddNewTeam extends Component {
    constructor(){
        super();
        this.state={
            teamname: '',
            teamcaptain: '',
            league: ''
        }
    }

    componentDidMount(){
        this.props.get_teams;
    }

    update_cell = (column, e) => {
        return this.setState({[column]: e});
    }

    submitForm = () => {
        var {teamname, teamcaptain, league} = this.state;
        axios
        .post(`/api/teams`, {teamname, teamcaptain, league})
        .then(response=> alert('Team Added!'))
        .catch(err=> alert('Error'))
    }

    render(){
        console.log(this.state);
        console.log(this.props.teams);
        return(
            <div>
              <Link to='/manageTeam' style={{color: "black", textAlign: "right"}}>{`<<`}Back to Team Manager</Link>  
                <h1> Add New Team</h1>
        
        <form>
        <input type="text" onChange={(e)=>this.update_cell("teamname", e.target.value)} placeholder="teamname"/><br/>
        <input type="text" onChange={(e)=>this.update_cell("teamcaptain", e.target.value)} placeholder="teamcaptain"/><br/>
        <input type="text" onChange={(e)=>this.update_cell("league", e.target.value)} placeholder="league"/><br/>
        <button onClick={this.submitForm}>Submit</button>
            <p/>
        <button onClick={this.resetForm}>Cancel</button>
        </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.teams
});

export default connect(mapStateToProps, {get_teams})(AddNewTeam);