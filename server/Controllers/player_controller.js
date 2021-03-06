module.exports = {
    get_players: (req, res, next)=>{
        const db = req.app.get('db');
        db.get_players().then(response => res.status(200).send(response))
        .catch(err=> res.status(500).send(err));
    },
    get_2ndteam: (req, res, next)=>{
        const db = req.app.get('db');
        db.get_2ndteam().then(response=> res.status(200).send(response))
        .catch(err=> res.send(500).send(err))
    },
    get_3rdteam: (req, res, next)=>{
        const db = req.app.get('db');
        db.get_3rdteam().then(response=> res.status(200).send(response))
        .catch(err=> res.status(500).send(err));
    },
    new_player: (req, res, next)=>{
        const db=req.app.get('db');
        console.log(req.body);
        db.new_player([req.body.playername, 
            req.body.email, 
            req.body.address, 
            req.body.phonenumber, 
            req.body.teamname, 
            req.body.altteam1, 
            req.body.altteam2,
            req.body.username,
            ])
        .then(response=> res.status(200).send(response))
        .catch(err=> res.status(500).send(err));
    },
    modify_player: (req, res, next)=>{
        const db=req.app.get('db');
        console.log(req.body);
        db.modify_player([req.body.playername, 
            req.body.email, 
            req.body.address, 
            req.body.phonenumber,
            req.body.username,
            req.body.playerid,
            req.body.rsvp])
        .then(response=> res.status(200).send(response))
        .catch(err=> res.status(500).send(err));
    },
    delete_player: (req, res, next) => {
        const db=req.app.get('db');
        db.delete_player(req.params.playerid)
        .then(response=> res.status(200).send(response))
        .catch(err=> res.status(500).send(err))
    },
    rsvp_update: (req, res, next) => {
        const db=req.app.get('db');
        console.log([
            req.session.passport.user.email,
            req.body.rsvp]);
        db.modify_rsvp([
            req.session.passport.user.email,
            req.body.rsvp])
        .then(response=> res.status(200).send(response))
        .catch(err=> res.status(500).send(err));
    }
    
    }
