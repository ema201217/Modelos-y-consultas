module.exports=(sequelize,dataTypes)=>{
    let cols={
        id:{
            type:dataTypes.INTEGER(10),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        first_name:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        last_name:{
            type:dataTypes.STRING(100),
        allowNull:false
    },
    rating:{
        type:dataTypes.DECIMAL(3,1),
        allowNull:false
        }
    }

    let config = {
        tableName:"actors",
        timestamps: false
    }
    let Actor = sequelize.define("Actor",cols,config)
    
    return Actor
}