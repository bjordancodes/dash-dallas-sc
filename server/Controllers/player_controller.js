module.exports = {
    get_players: (req, res, next)=>{
        const db = req.app.get('db');
        db.get_players().then(response => res.status(200).send(response))
        .catch(err=> res.status(500).send(err));
    }
}