import React, {Component} from 'react';
import {connect} from 'react-redux';

class Menu extends Component {
    render(){
        return(
            <h1>Menu</h1>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(mapStateToProps)(Menu);