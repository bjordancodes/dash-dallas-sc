import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddNewTeam extends Component {


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