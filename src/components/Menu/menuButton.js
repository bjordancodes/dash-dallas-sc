import React, {Component} from 'react';
import './menu.css';

export default class MenuButton extends Component {
    render(){
        return(
            <img 
            className="menuIcon" 
            onClick={this.props.handleClickHere}/>
        )
    }

}