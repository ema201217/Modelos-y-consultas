
module.exports = (sequelize, dataTypes) => {
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull:false
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1),
            allowNull:false
        },
        awards: {
            type: dataTypes.INTEGER(10),
            allowNull:false
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull:false
        },
        length: {
            type: dataTypes.INTEGER(10)
        },
        /* genresId:{
            type:dataTypes.INTEGER(10).UNSIGNED
        } */
    }

    let config = {
        tableName: "movies",
        timestamps: false
    }
    let Movie = sequelize.define("Movie", cols, config)

    return Movie
}