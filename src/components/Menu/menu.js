import React, {Component} from 'react';
import './menu.css';
import {Link} from 'react-router-dom';
import AdminMenu from '../managerPortal/adminMenu/adminMenu';

export default class Menu extends Component {
    render(){
        var visibility = "hide";
        if (this.props.menuVisibility){
            visibility = "show";
        }
        return(
            <div>
            <div id="flyoutMenu" className={visibility} onClick={this.props.handleClickHere}>
            <Link to="/">Home</Link><br/>
            <Link to="/MyAccount">My Account</Link><br/>
            <Link to="/mySchedule">My Schedule</Link><br/>
            <Link to="/myTeams">My Teams</Link><br/>
            <Link to="/teamChat">Team Chat</Link><br/>
            <Link to="/contactUS">Contact Us</Link><br/>
            <Link to="/adminMenu">Admin Menu</Link><br/>
            <Link to="/managerPortal">Manager Portal</Link><br/>
            <Link to="/managePlayers">Manage Players</Link><br/>
            <Link to="/addNewPlayer">Add New Player</Link><br/>
            <Link to="/manageTeam">Manage Teams</Link><br/>
            <Link to="/addNewTeam">Add New Team</Link><br/>
            <Link to="/masterSchedule">Master Schedule</Link><br/>
            <Link to="/addNewSchedule">Add New Schedule</Link><br/>
            <Link to="/adminMessages">Admin Messages</Link><br/>
            
            </div>
            </div>
        )
    }
}
