import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_teams} from '../../../Dux/teamReducer'

class ManageTeam extends Component {
    componentDidMount(){
        this.props.get_teams();
    }
    render(){
        if (this.props.teams)
        var teamsMap = this.props.teams.map((e,i)=> <p>{e.teamname}</p>);
        return(
            <div>
                <h1>Manage Team</h1>
                {teamsMap}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.teams
});

export default connect(mapStateToProps, {get_teams})(ManageTeam);