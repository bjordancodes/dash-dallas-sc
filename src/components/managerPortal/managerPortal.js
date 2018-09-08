import React, {Component} from 'react';
import {connect} from 'react-redux';

class ManagerPortal extends Component {
    render(){
        return(
            <h1>Manager Portal</h1>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(ManagerPortal);