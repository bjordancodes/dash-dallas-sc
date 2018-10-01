import React, {Component} from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';


export default class SideBarContainer extends Component{
    constructor(props, content){
        super(props, content);

        this.state = {
            visible: false
        };

    }

 handleClickHere = (e) =>{
    this.toggleMenu();
    
    console.log("clicked");
    e.stopPropagation();
}

toggleMenu = () => {
    this.setState(
        {
            visible: !this.state.visible
        }
    );
}

sideMenu = () =>{
    if (localStorage.getItem('isAdmin')){
return <div>
<Link className="navLink" to="/MyAccount">My Account</Link><br/>
<Link className="navLink" to="/mySchedule">My Schedule</Link><br/>
<Link className="navLink" to="/myTeams">My Teams</Link><br/>
<Link to="/managePlayers" className="navLink">Manage Players</Link><br/>
<Link to="/addNewPlayer" className="navLink">Add New Player</Link><br/>
<Link to="/manageTeam" className="navLink">Manage Teams</Link><br/>
<Link to="/addNewTeam" className="navLink">Add New Team</Link><br/>
<Link to="/masterSchedule" className="navLink">Manage Schedule</Link><br/>
<Link to="/scheduler" className="navLink">Auto Scheduler</Link><br/>
<Link to="/addNewSchedule" className="navLink">Add New Schedule</Link><br/>
</div>
    }
else {
    return <div>
        <Link className="navLink" to="/MyAccount">My Account</Link><br/>
<Link className="navLink" to="/mySchedule">My Schedule</Link><br/>
<Link className="navLink" to="/myTeams">My Teams</Link><br/>
<a href="http://localhost:3001/login" className="navLink" onClick={()=> {localStorage.setItem('isAdmin', 'true'); localStorage.setItem('token', 'token')}}>Manager Login</a><br/>
    </div>
}
}


render(){
    var visibility = "hide";
        if (this.state.visible){
            visibility = "show";
        }
    return(
        <div>
        <div onClick={this.handleClickHere} className="navLink" style={{color: "white"}}>Menu</div>
        <div id="flyoutMenu" className={visibility} onClick={this.handleClickHere}>
        <hideMe>
        <this.sideMenu/>
        </hideMe>
            </div>
        </div>
    )
   }   
}