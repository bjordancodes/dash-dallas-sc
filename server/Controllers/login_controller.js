
module.exports = {
    signout: (req, res, next) => {
        const {session} = req;
        session.destroy();
        res.status(200).send(req.session);
    },

    getUser: (req, res, next) => {
        
        const db = req.app.get('db');
        console.log(req.session.passport.user.email)
        db.get_me([req.session.passport.user.email])
            .then(response=> res.status(200).send(response))
            .catch(err=> res.status(500).send(err))
    },

    getTeam1: (req, res, next) => {

        const db = req.app.get('db');
        db.get_myteam1([req.session.passport.user.email])
            .then(response=> res.status(200).send(response))
            .catch(err=> res.status(500).send(err))
    },

    getTeam2: (req, res, next) => {

        const db = req.app.get('db');
        db.get_myteam2([req.session.passport.user.email])
            .then(response=> res.status(200).send(response))
            .catch(err=> res.status(500).send(err))
    },

    getTeam3: (req, res, next) => {

        const db = req.app.get('db');
        db.get_myteam3([req.session.passport.user.email])
            .then(response=> res.status(200).send(response))
            .catch(err=> res.status(500).send(err))
    },
}