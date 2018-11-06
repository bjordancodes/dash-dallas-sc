import React, {Component} from 'react';
import './menu.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Menu extends Component {

    sideMenu = () =>{
        if (localStorage.getItem('isAdmin')){
    return <div>
    <Link to="/MyAccount"><h2>My Account</h2></Link><br/>
    <Link to="/mySchedule"><h2>My Schedule</h2></Link><br/>
    <Link to="/myTeams"><h2>My Teams</h2></Link><br/>
    <Link to="/managePlayers"><h2>Manage Players</h2></Link><br/>
    <Link to="/addNewPlayer"><h2>Add New Player</h2></Link><br/>
    <Link to="/manageTeam"><h2>Manage Teams</h2></Link><br/>
    <Link to="/addNewTeam"><h2>Add New Team</h2></Link><br/>
    <Link to="/masterSchedule"><h2>Manage Schedule</h2></Link><br/>
    {/* <Link to="/scheduler"><h2>Auto Scheduler</h2></Link><br/> */}
    <Link to="/addNewSchedule"><h2>Add New Schedule</h2></Link><br/>
    </div>
        }
    else {
        return <div>
            <Link to="/MyAccount"><h2>My Account</h2></Link><br/>
    <Link to="/mySchedule"><h2>My Schedule</h2></Link><br/>
    <Link to="/myTeams"><h2>My Teams</h2></Link><br/>
    <a href={process.env.REACT_APP_LOGIN} onClick={()=> {localStorage.setItem('isAdmin', 'true'); localStorage.setItem('token', 'token')}}><h2>
        Manager Login
        </h2>
        </a><br/>
        </div>
    }
    }

    loginOrOut = () => {
        if (localStorage.getItem('token') || localStorage.getItem('isAdmin')){
        return (<div>
            <Link to="/" onClick={()=> this.logout()}><h2>Logout</h2></Link><br/>
            </div>)
    }
        else {
            return (
            <div>
                <a href="http://localhost:3001/login" onClick={()=> localStorage.setItem("token", "token")}><h2>Login</h2></a><br/>
                </div>)
        }
    }

    logout = () => {
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('token');
        axios.get('/logout')
        .then(res=> res)
        .catch(err=> console.log(err));
    }

    render(){
        var visibility = "hide";
        if (this.props.menuVisibility){
            visibility = "show";
            console.log(localStorage)
        }
        return(
            <div>
            <div id="flyoutMenu2" className={visibility} onClick={this.props.handleClickHere}>
            <Link to="/"><h2>Home</h2></Link><br/>
            <this.loginOrOut/>
            <Link to="/contactUS"><h2>Contact Us</h2></Link><br/>
            <this.sideMenu/>







            {/* <Link to="/MyAccount"><h2>My Account</h2></Link><br/>
            <Link to="/mySchedule"><h2>My Schedule</h2></Link><br/>
            <Link to="/myTeams"><h2>My Teams</h2></Link><br/>
            {/* <Link to="/teamChat"><h2>Team Chat</h2></Link><br/> */}
            
        {/* <a href="http://localhost:3001/login" onClick={()=> {localStorage.setItem('isAdmin', 'true'); localStorage.setItem('token', 'token')}}><h2>Manager Login</h2></a><br/>
            <Link to="/managerPortal"><h2>Manager Portal</h2></Link><br/>
            <Link to="/managePlayers"><h2>Manage Players</h2></Link><br/>
            <Link to="/addNewPlayer"><h2>Add New Player</h2></Link><br/>
            <Link to="/manageTeam"><h2>Manage Teams</h2></Link><br/>
            <Link to="/addNewTeam"><h2>Add New Team</h2></Link><br/>
            <Link to="/masterSchedule"><h2>Manage Schedule</h2></Link><br/>
            <Link to="/scheduler"><h2>Auto Scheduler</h2></Link><br/>
            <Link to="/addNewSchedule"><h2>Add New Schedule</h2></Link><br/>
            <Link to="/adminMessages"><h2>Admin Messages</h2></Link><br/> */}
            
            </div>
            </div>
        )
    }
}
