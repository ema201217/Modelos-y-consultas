let db = require('../database/models')
let { Op } = require('sequelize')
module.exports = {
    list: (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                res.render('moviesList', {
                    movies
                })
            })
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesDetail', {
                    movie
                })
            })
    },
    new: (req, res) => {
        db.Movie.findAll({
            order: [["release_date", "DESC"]]
        })
            .then(movies => {
                res.render('newestMovies', {
                    movies
                })
            })
    },
    recommended: (req, res) => {
        db.Movie.findAll({
            limit: 5,
            order: [["release_date", "DESC"]],
            where: {
                rating: {
                    [Op.gte]: 8
                }
            }
        })
            .then(movies => {
                res.render('recommendedMovies', {
                    movies
                })
            })
    }
}