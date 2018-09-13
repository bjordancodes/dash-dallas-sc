module.exports = {
    get_teams: (req, res, next) => {
        const db = req.app.get('db');
        db.get_teams().then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err));
        },
    new_team: (req, res, next) => {
        const db = req.app.get('db');
        db.new_team([req.body.teamname, req.body.teamcaptain, req.body.league])
        .then(response=> res.sendStatus(200))
        .catch(err=> res.status(500).send(err));
    },
    modify_teams: (req, res, next)=> {
        const db = req.app.get('db');
        console.log(req.body)
        db.modify_teams([req.body.teamname, req.body.teamcaptain, req.body.league, req.body.teamid])
        .then(response=> res.sendStatus(200))
        .catch(err=> res.status(500).send(err));
    }
}
    