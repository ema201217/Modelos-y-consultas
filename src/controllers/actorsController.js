
let db = require('../database/models')

module.exports={
    list:(req,res)=>{
        db.Actor.findAll()
       .then(actors =>{
        res.render('actorsList',{
            actors
        })
       })
    },
    detail:(req,res)=>{
        db.Actor.findByPk(req.params.id)
        .then(actor=>{
            res.render('actorsDetail',{
                actor
            })
        })
    }
}