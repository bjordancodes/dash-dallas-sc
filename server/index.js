const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();
const {get_players, new_player, get_2ndteam, get_3rdteam, modify_player} = require('./Controllers/player_controller');
const {get_schedule, new_schedule, modify_schedule} = require('./Controllers/schedule_controller');
// const {get_standings} = require('./Controllers/standings_controller');
const {get_teams, new_team, modify_teams} = require('./Controllers/teams_controller');
const cors = require('cors');


const app = express();
app.use(json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(cors());

massive(process.env.CONNECTION_STRING).then(db => app.set('db', db)).catch(err => console.log(err));


app.get('/api/players', get_players);
app.get('/api/team2', get_2ndteam);
app.get('/api/team3', get_3rdteam);
app.get('/api/schedule', get_schedule);
// app.get('/api/standings', get_standings);
app.get('/api/teams', get_teams);
app.post('/api/players', new_player);
app.post('/api/schedule', new_schedule);
app.post('/api/teams', new_team);
app.put('/api/teams', modify_teams);
app.put('/api/players', modify_player);
app.put('/api/schedule', modify_schedule);


const port = 3001;
app.listen( port, () => {console.log(`Server listening on port ${port}!`)});