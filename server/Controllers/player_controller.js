module.exports = {
    get_players: (req, res, next)=>{
        const db = req.app.get('db');
        db.get_players().then(response => res.status(200).send(response))
        .catch(err=> res.status(500).send(err));
    },
    add_players: (req, res, next)=>{
        const db=req.app.get('db');
        db.add_players([req.body.name, 
            req.body.email, 
            req.body.address, 
            req.body.phonenumber, 
            req.body.teamname, 
            req.body.altteam1, 
            req.body.altteam2])
        .then(response=> res.status(send(response)))
        .catch(err=> res.status(500).send(err));}
    }
