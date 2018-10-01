import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import SideBarContainer from './sideBarContainer';

export default class Navbar extends Component {

    loginOrOut = () => {
        if (localStorage.getItem('token') || localStorage.getItem('isAdmin')){
        return (<div>
            <Link to="/" className="navLink" onClick={()=> this.logout()}>Logout</Link><br/>
            </div>)
    }
        else {
            return (
            <div>
                <a href="http://localhost:3001/login" className="navLink" onClick={()=> localStorage.setItem("token", "token")}>Login</a><br/>
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
return(
    <div className="navbar">
    <SideBarContainer/>
    <Link to="/" className="navLink">Home</Link>
    <Link className="navLink" to="/contactUS">Contact Us</Link>
    <div className="navLink">
    <this.loginOrOut/>
    </div>
    </div>
)
}
}