import React, {Component} from 'react';
import {connect} from 'react-redux';
import {get_players, add_players} from '../../../Dux/playerReducer';

class AddNewTeam extends Component {

    var handleName = (e) => {

    }
    render(){
        return(
            <div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(AddNewTeam);