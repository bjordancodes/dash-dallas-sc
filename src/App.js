import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import router from './router';
import store from './store';
import MenuContainer from './components/Menu/menuContainer';
import Navbar from './components/AResponsiveLayout/navbar'

class App extends Component {
  render() {
    return (
      <Provider store={store}> 
      <HashRouter>
      <div className="App">
        <div className="hideme">
        <Navbar/>
        </div>
        <header className="App-header">
          <div className="App-logo" alt="logo" />
          <h1 className="App-title" style={{color: "white"}}>Dash Dallas SC</h1>
        </header>
        <div className="hideMenuButton">
        <MenuContainer/>
        </div>
        <div>{router}</div>
      </div>
      </HashRouter>
      </Provider>
    );
  }
}

export default App;
