import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {get_players} from '../../../Dux/playerReducer';

class AddNewPlayer extends Component {

    componentDidMount(){
        this.props.get_players();
    }

    constructor(){
        super();
        this.state = {
            playername: '',
            email: '',
            address: '',
            phonenumber: 0,
            teamname: 0,
            altteam1: 0,
            altteam2: 0
}
    }

    update_playerName = (playername) => {
        return this.setState({playername})
    
    }
    
    update_email = (email) => {
        return this.setState({email})
    
    }
    
    update_phone = (phonenumber) => {
        return this.setState({phonenumber})
    
    }
    
    update_address = (address) =>{
        return this.setState({address})
    }
    
     update_teamname = (teamname) =>{
        return this.setState({teamname})
    }
    
   update_alt1 = (altteam1) =>{
        return this.setState({altteam1
        })
    }
    
    update_alt2 = (altteam2) =>{
        return this.setState({altteam2
        })
    }

    cancelForm = () => {
        document.getElementById("playerForm").reset();
    }

    submitForm = () => {
        var {playername, email, address, phonenumber, teamname, altteam1, altteam2} = this.state;
        axios
        .post(`/api/players`, {playername, email, address, phonenumber, teamname, altteam1, altteam2})
        .then(res=> alert('New Player Created!'))
        .catch(err=> alert('internal error'))
    }

    render(){

        {if (this.props.player.player)
            var playerMap = this.props.player.player.map((e, i)=> <p>{e.playername}</p>)}

        const {update_playerName, update_email, update_phone, update_address, update_teamname, update_alt1, update_alt2} = this;
    
        return(
            <div>
            <h1>Add New Player</h1>
            <form id="playerForm">
            <input type="text" placeholder="Name" onChange={(e)=> update_playerName(e.target.value)} /><br/>
            <input type="text" placeholder="myemail@website.org" onChange={(e)=> update_email(e.target.value)} /><br/>
            <input type="text" placeholder="Phone Number" onChange={(e)=> update_phone(e.target.value)} /><br/>
            <input type="text" placeholder="Full Billing Address" onChange={(e)=> update_address(e.target.value)} /><br/>
            <input type="text" placeholder="Team Number" onChange={(e)=> update_teamname(e.target.value)} /><br/>
            <input type="text" placeholder="2nd Team Number (Optional)" onChange={(e)=> update_alt1(e.target.value)} /><br/>
            <input type="text" placeholder="3rd Team Number (Optional)" onChange={(e)=> update_alt2(e.target.value)} /><p/>
            <button onClick={this.submitForm}>Submit</button>
            <p/>
            <button onClick={this.resetForm}>Cancel</button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state}
    };

export default connect(mapStateToProps, {get_players})(AddNewPlayer);