module.exports = {
    get_schedule: (req, res, next) => {
    const db = req.app.get('db');
    db.get_schedule().then(response => res.status(200).send(response))
    .catch (err => res.status(500).send(err));
},
    new_schedule: (req, res, next) => {
        const db = req.app.get('db');
        console.log(req.body)
        db.new_schedule([req.body.leaguename, req.body.team1, req.body.team2, req.body.matchdate, req.body.matchtime])
        .then(response=> res.status(200).send(response))
        .catch(err=> res.status(500).send(err));
    },
    modify_schedule: (req, res, next) => {
        const db = req.app.get('db');
        console.log(req.body)
        db.modify_schedule([req.body.leaguename, 
            req.body.team1, 
            req.body.wdl1, 
            req.body.team2, 
            req.body.wdl2, 
            req.body.matchdate, 
            req.body.matchtime, 
            req.body.scheduleid])
        .then(response=> res.status(200).send(response))
        .catch(err=> res.status(500).send(err));
    }
    
}