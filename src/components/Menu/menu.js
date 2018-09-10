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
            <div id="flyoutMenu" className={visibility} onClick={this.props.handleClickHere}>
            <Link to="/">Home</Link><br/>
            <Link to="/MyAccount">My Account</Link><br/>
            <Link to="/mySchedule">My Schedule</Link><br/>
            <Link to="/teamChat">Team Chat</Link><br/>
            <Link to="/contactUS">Contact Us</Link><br/>
            {/* this doesn't work */}
            <AdminMenu handleClickHere={this.props.handleClickHere}
            menuVisibility={this.visibility}><h1>Admin Menu</h1></AdminMenu>
            </div>
        )
    }
}
