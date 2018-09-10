const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();
const {get_players} = require('./Controllers/player_controller');
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

app.get('/test', (req, res, next)=> {
    res.sendStatus(200);
})
app.get('/api/players', get_players);

const port = 3001;
app.listen( port, () => {console.log(`Server listening on port ${port}!`)});