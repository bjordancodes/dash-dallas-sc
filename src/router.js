import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import contactUs from './components/contactUs/contactUs';
import home from './components/Home/home';
import managerPortal from './components/managerPortal/managerPortal';
import AdminMenu from './components/managerPortal/adminMenu/adminMenu';
import adminMessages from './components/managerPortal/adminMessages/adminMessages';
import managePlayers from './components/managerPortal/managePlayers/managePlayers';
import addNewPlayer from './components/managerPortal/managePlayers/addNewPlayer';
import manageTeam from './components/managerPortal/manageTeams/manageTeam';
import addNewTeam from './components/managerPortal/manageTeams/addNewTeam';
import masterSchedule from './components/managerPortal/masterSchedule/masterSchedule';
import addNewSchedule from './components/managerPortal/masterSchedule/addNewSchedule';
import updateStats from './components/managerPortal/updateStats/updateStats';
// import menu from './components/Menu/menu';
import myAccount from './components/myAccount/myAccount';
import mySchedule from './components/mySchedule/mySchedule';
import MyTeams from './components/myTeams/myTeams';
import teamChat from './components/teamChat/teamChat';
import todaysSchedule from './components/todaysSchedule/todaysSchedule';
import TeamInfo from './components/myTeams/myTeam1';
import Scheduler from './components/managerPortal/scheduler/scheduler';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
    localStorage.getItem('token')
        ? <Component {...props} />
        : <Redirect {...alert('unAuthorized, please login')} to={{
            pathname: '/',
            state: { from: props.location }
          }} />
    )} />
  )

const AdminRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={(props) => (
        localStorage.getItem('isAdmin')
            ? <Component {...props} />
            :
            <Redirect {...alert('Unauthorized, please login with an Admin account')} to={{
                pathname: '/',
                state: { from: props.location }
              }} />
              
        )} />
      )

export default (
    <Switch>
        <Route exact path= '/' component={todaysSchedule}/>
        <Route path='/contactUs' component={contactUs}/>
        <AdminRoute path='/managerPortal' component={managerPortal}/>
        <AdminRoute path='/adminMessages' component={adminMessages}/>
        <AdminRoute path='/managePlayers' component={managePlayers}/>
        <AdminRoute path='/addNewPlayer' component={addNewPlayer}/>
        <AdminRoute path='/manageTeam' component={manageTeam}/>
        <AdminRoute path='/addNewTeam' component={addNewTeam}/>
        <AdminRoute path='/masterSchedule' component={masterSchedule}/>
        <AdminRoute path='/addNewSchedule' component={addNewSchedule}/>
        <AdminRoute path='/updateStats' component={updateStats}/>
        <PrivateRoute path='/myAccount' component={myAccount}/>
        <PrivateRoute path='/mySchedule' component={mySchedule}/>
        <PrivateRoute path='/myTeams' component={MyTeams}/>
        <PrivateRoute path='/teamChat' component={teamChat}/>
        <Route path='/myTeam1/:id' render={props =>
        <div><TeamInfo props={props}/></div>}/>
        <AdminRoute path='/scheduler' component={Scheduler}/>
        {/* <Route path='todaysSchedule' component={todaysSchedule}/> */}
        {/* <Route path='/adminMenu' component={AdminMenu}/> */}
    </Switch>
)