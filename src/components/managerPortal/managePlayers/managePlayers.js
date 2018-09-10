import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_players} from '../../../Dux/playerReducer';

class ManagePlayers extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.get_players();
    }
    render(){
        console.log(this.props.player)
        {if (this.props.player.player)
                    var playerMap = this.props.player.player.map((e, i)=> <p>{e.playername}</p>)}
        return(
            <div><h1>Manage Players</h1>
                {playerMap}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
return {
    ...state}
};

export default connect(mapStateToProps, {get_players})(ManagePlayers);