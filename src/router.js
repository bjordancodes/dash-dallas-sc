import React from 'react';
import {Switch, Route} from 'react-router-dom';
import contactUs from './components/contactUs/contactUs';
import home from './components/Home/home';
import managerPortal from './components/managerPortal/managerPortal';
import adminMenu from './components/managerPortal/adminMenu/adminMenu';
import adminMessages from './components/managerPortal/adminMessages/adminMessages';
import managePlayers from './components/managerPortal/managePlayers/managePlayers';
import addNewPlayer from './components/managerPortal/managePlayers/addNewPlayer';
import manageTeam from './components/managerPortal/manageTeams/manageTeam';
import addNewTeam from './components/managerPortal/manageTeams/addNewTeam';
import masterSchedule from './components/managerPortal/masterSchedule/masterSchedule';
import scheduler from './components/managerPortal/scheduler/scheduler';
import updateStats from './components/managerPortal/updateStats/updateStats';
// import menu from './components/Menu/menu';
import myAccount from './components/myAccount/myAccount';
import mySchedule from './components/mySchedule/mySchedule';
import myTeams from './components/myTeams/myTeams';
import teamChat from './components/teamChat/teamChat';
import todaysSchedule from './components/todaysSchedule/todaysSchedule';

export default (
    <Switch>
        <Route exact path= '/' component={home}/>
        <Route path='/contactUs' component={contactUs}/>
        <Route path='/managerPortal' component={managerPortal}/>
        <Route path='/adminMessages' component={adminMessages}/>
        <Route path='/managePlayers' component={managePlayers}/>
        <Route path='/addNewPlayer' component={addNewPlayer}/>
        <Route path='/manageTeam' component={manageTeam}/>
        <Route path='/addNewTeam' component={addNewTeam}/>
        <Route path='/masterSchedule' component={masterSchedule}/>
        <Route path='/scheduler' component={scheduler}/>
        <Route path='/updateStats' component={updateStats}/>
        <Route path='/myAccount' component={myAccount}/>
        <Route path='/mySchedule' component={mySchedule}/>
        <Route path='/myTeams' components={myTeams}/>
        <Route path='/teamChat' component={teamChat}/>
        <Route path='todaysSchedule' component={todaysSchedule}/>
        <Route path='/adminMenu' component={adminMenu}/>
    </Switch>
)