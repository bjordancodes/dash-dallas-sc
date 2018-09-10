import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_players} from '../../../Dux/playerReducer';

class ManagePlayers extends Component {

    componentDidMount(){
        this.props.get_players();
    }
    render(){
        console.log(this.props.player)
        return(
            <h1>Manage Players
                {this.props.player.data}
            </h1>
        )
    }
}

const mapStateToProps = (state) => {
return {
    ...state.player}
};

export default connect(mapStateToProps, {get_players})(ManagePlayers);