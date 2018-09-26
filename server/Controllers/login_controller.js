
module.exports = {
    login: (req, res, next) => {
        const {session} = req;
        const {users, username, password} = req.body;

        const user = users.find( user => user.username === username && user.password === password);

        if (user){
            username = users.username;
            res.status(200).send();
        }
        else {
            res.status(500).send('Unauthorized');
        }
    },

    signout: (req, res, next) => {
        const {session} = req;
        session.destroy();
        res.status(200).send(req.session);
    },

    getUser: (req, res, next) => {
        res.status(200).send(req.session.user);
    }
}