import React, {Component} from 'react';
import {connect} from 'react-redux';

class AdminMenu extends Component {
    render(){
        return(
            <h1>Admin Menu</h1>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(AdminMenu);