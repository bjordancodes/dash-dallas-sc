const express = require('express');
const { json } = require('body-parser');
const session = require('express-session');
require('dotenv').config();

const app = express();
app.use(json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.get('/test', (req, res, next)=> {
    res.sendStatus(200);
})

const port = 3001;
app.listen( port, () => {console.log(`Server listening on port ${port}!`)});