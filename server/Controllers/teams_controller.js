module.exports = {
    get_teams: (req, res, next) => {
        const db = req.app.get('db');
        db.get_teams().then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err));
        }
}