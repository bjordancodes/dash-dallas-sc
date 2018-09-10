import React, {Component} from 'react';
import '../../Menu/menu.css';
import {Link} from 'react-router-dom';
// this doesn't work


export default class AdminMenu extends Component {

    render(){
        var visibility = "hide";
        if (this.props.menuVisibility){
            visibility = "show";
        }
        return(
            <div id="flyoutMenu" className={visibility} onClick={this.props.handleClickHere}>
            <Link to="/">Admin Home</Link><br/>
            <Link to="/MyAccount">Admin Account</Link><br/>
            <Link to="/mySchedule">Admin Schedule</Link><br/>
            <Link to="/teamChat">Team Chat</Link><br/>
            <Link to="/contactUS">Contact Us</Link><br/>
            </div>
        )
    }
}
