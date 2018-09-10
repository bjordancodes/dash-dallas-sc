import React, {Component} from 'react';
import './menu.css'
import Menu from './menu';
import MenuButton from './menuButton';

export default class MenuContainer extends Component{
    constructor(props, content){
        super(props, content);

        this.state = {
            visible: false
        };

    }

 handleClickHere = (e) =>{
    this.toggleMenu();
    
    console.log("clicked");
    e.stopPropagation();
}

toggleMenu = () => {
    this.setState(
        {
            visible: !this.state.visible
        }
    );
}
render(){
    return(
        <div>
        <MenuButton handleClickHere={this.handleClickHere}/>
        <Menu handleClickHere={this.handleClickHere}
            menuVisibility={this.state.visible}/>
            </div>
    )
   }   
}