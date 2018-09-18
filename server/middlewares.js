module.exports={
    logger: (req, res, next)=>{
        console.log('SESSION: ', req.session);
        next();
    },
    isAdmin: (req, res, next)=>{
        if (req.body.admin){
            next();
        }
        else{
            res.status(401).send('Not today, pal!');
        }
    },
    checkPlayerid: (req, res, next)=>{
        if (!req.session.playerid){
            req.session.playerid = [];
        }
        next();
    }
}