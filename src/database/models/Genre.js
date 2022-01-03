module.exports=(sequelize,dataTypes)=>{
    let cols={
        id:{
            type:dataTypes.INTEGER(10),
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:dataTypes.STRING(500)
        },
        ranking:{
            type:dataTypes.INTEGER(10)
        },
        active:{
            type:dataTypes.BOOLEAN
        }
    }

    let config = {
        tableName:"genres",
        timestamps: false
    }
    let Genre = sequelize.define("Genre",cols,config)
    
    return Genre
}