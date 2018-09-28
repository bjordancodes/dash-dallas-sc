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
const passport = require('passport');
const Auth0Strategy = require('passport-auth0')
const {getUser, getTeam1, getTeam2, getTeam3} = require('./Controllers/login_controller');


const app = express();
app.use(json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}))
app.use(cors());
app.use(checkPlayerid);

massive(process.env.CONNECTION_STRING).then(db => app.set('db', db)).catch(err => console.log(err));
app.use(logger);

// Auth

app.use(passport.initialize());
app.use(passport.session())
passport.use( new Auth0Strategy({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: '/login',
    scope: "openid email profile"
},
function(accessToken, refreshToken, exraParams, profile, done){
    return done(null, profile);
}));

passport.serializeUser((user, done)=> {
    done(null, {clientID: user.id, email: user._json.email, name: user._json.name})
});

passport.deserializeUser((user, done)=>{
    done(null, user);
});

app.get('/login', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/MyAccount',
    failureRedirect: '/login',
}));

const authenticated=(req, res, next) =>{
    if (req.user){
        next()
    }
    else {
        res.sendStatus(401);
    }
}



//player

app.get('/api/players', get_players);
app.post('/api/players', new_player);
app.put('/api/players', modify_player);
app.delete('/api/players/:playerid', delete_player);

//my acc info
app.get('/api/myacc', getUser);
app.get('/api/myteam1', getTeam1);
app.get('/api/myteam2', getTeam2);
app.get('/api/myteam3', getTeam3);

//teams info
app.get('/api/teams', get_teams);
app.get('/api/team2', get_2ndteam);
app.get('/api/team3', get_3rdteam);
app.post('/api/get_players_for_teams', get_players_for_teams)
app.post('/api/teams', new_team);
app.put('/api/teams', modify_teams);
app.delete('/api/teams/:teamid', delete_team);

//schedule info
app.get('/api/schedule', get_schedule);
app.post('/api/schedule', new_schedule);
app.put('/api/schedule', modify_schedule);
app.delete('/api/schedule/:scheduleid', delete_schedule);



// app.get('/api/standings', get_standings);


const port = 3001;
app.listen( port, () => {console.log(`Server listening on port ${port}!`)});