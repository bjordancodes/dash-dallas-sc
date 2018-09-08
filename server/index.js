const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config();


const app = express();
app.use(json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

massive(process.env.CONNECTION_STRING).then(db => app.set('db', db)).catch(err => console.log(err));

app.get('/test', (req, res, next)=> {
    res.sendStatus(200);
})

const port = 3001;
app.listen( port, () => {console.log(`Server listening on port ${port}!`)});