const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();
const {get_players, new_player, get_2ndteam, get_3rdteam, modify_player, delete_player} = require('./Controllers/player_controller');
const {get_schedule, new_schedule, modify_schedule, delete_schedule} = require('./Controllers/schedule_controller');
// const {get_standings} = require('./Controllers/standings_controller');
const {get_teams, new_team, modify_teams, get_players_for_teams, delete_team} = require('./Controllers/teams_controller');
const cors = require('cors');
const {logger, isAdmin, checkPlayerid} = require('./middlewares');


const app = express();
app.use(json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(cors());
app.use(checkPlayerid);
app.use(logger);

massive(process.env.CONNECTION_STRING).then(db => app.set('db', db)).catch(err => console.log(err));


app.get('/api/players', get_players);
app.get('/api/team2', get_2ndteam);
app.get('/api/team3', get_3rdteam);
app.post('/api/get_players_for_teams', get_players_for_teams)
app.get('/api/schedule', get_schedule);
// app.get('/api/standings', get_standings);
app.get('/api/teams', get_teams);
app.post('/api/players', new_player);
app.post('/api/schedule', new_schedule);
app.post('/api/teams', new_team);
app.put('/api/teams', modify_teams);
app.put('/api/players', modify_player);
app.put('/api/schedule', modify_schedule);
app.delete('/api/schedule/:scheduleid', delete_schedule);
app.delete('/api/teams/:teamid', delete_team);
app.delete('/api/players/:playerid', delete_player);


const port = 3001;
app.listen( port, () => {console.log(`Server listening on port ${port}!`)});