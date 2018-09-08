import React, {Component} from 'react';
import {connect} from 'react-redux';

class MyTeams extends Component {
    render(){
        return(
            <h1>My Teams</h1>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(MyTeams);