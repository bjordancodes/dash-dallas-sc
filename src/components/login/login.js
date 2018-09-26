import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_players} from '../../Dux/playerReducer';
import './login.css'
import axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: ''
        }
    }

    componentDidMount(){
        this.props.get_players();
    }

    handleUsername(e){
        return this.setState({username: e})   
    }

    handlePw(e){
        return this.setState({password: e})   
    }

    loginHandler(){
        console.log('login pressed')
        axios.post('/api/login', {users: this.props.player,
        username: this.state.username,
        password: this.state.password})
        .then(response => response)
        .catch(err=> alert('err'))
    }

    render(){
        console.log(this.props.player)
        console.log(this.state.username, this.state.password)
        return(
            <div><h1>Login</h1>
            <input type="text" placeholder="Username" onChange={(e)=>this.handleUsername(e.target.value)}/><br/>
            <input type="password" placeholder="Password" onChange={(e)=>this.handlePw(e.target.value)}/><br/>
            <button onChange={(e)=>this.loginHandler()}>Login</button>
            </div>
    //CREATE A BUTTON THAT CALLS '/api/login' THAT PUTS THE PLAYERID ONTO THE SESSION SO THAT THE SESSION CAN BE USED FOR ALL THE REST OF OUR DATA
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.player}
    };
    
    export default connect(mapStateToProps, {get_players})(Login);