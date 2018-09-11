import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_players, get_team2, get_team3} from '../../../Dux/playerReducer';
import './managePlayers.css'


class ManagePlayers extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.get_players();
        this.props.get_team2();
        this.props.get_team3();
    }
    render(){
        console.log(this.props.player.player)
        if(this.props.player){
        var playerMap = this.props.player.player.map((e, i)=><div className="container">

                        <span className="class1">{e.playername}</span>
                        <span className="class2">{e.email}</span>
                        <span className="class2">{e.address}</span>
                        <span className="class1">{e.phonenumber}</span>
                        <span className="class2">{e.teamname}</span>
                    </div>
                        )}
        if(this.props.player.team2)
        var team2Map = this.props.player.team2.map((e,i)=> <div className="container">
                    <span className="class1">{e.playername}</span>
                        <span className="class2">{e.teamname}</span>
                        </div>)
        if(this.props.player.team3)
        var team3Map = this.props.player.team3.map((e,i)=> <div className="container">
                        <span className="class1">{e.playername}</span>
                        <span className="class2">{e.teamname}</span>
                        </div>)

        return(
            <div><h1>Manage Players</h1>
                <div className="container">
                {playerMap}
            <h1>Secondary Teams</h1>
                {team2Map}
                {team3Map}
                </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
return {
    ...state}
};

export default connect(mapStateToProps, {get_players, get_team2, get_team3})(ManagePlayers);