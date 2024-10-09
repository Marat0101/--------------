const sequelize= require('../dd')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    email:{type:DataTypes.STRING,unique: true,},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING,defaultValue:"USER"}
})

const Basket = sequelize.define('basket',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true}
})

const BasketUsluga = sequelize.define('basket_usluga',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true}
})

const Usluga = sequelize.define('usluga',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true, allowNull:false},
    price:{type:DataTypes.INTEGER, allowNull:false},
    img:{type:DataTypes.STRING, allowNull:false}
})

const Type = sequelize.define('type',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true, allowNull:false}
})

const UslugaInfo = sequelize.define('usluga_info',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    title:{type:DataTypes.STRING, allowNull:false},
    desscription:{type:DataTypes.STRING, allowNull:false}
})
   
const Rating = sequelize.define('rating',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    rate:{type:DataTypes.INTEGER, allowNull:false},
    
})
User.hasOne(Basket)
Basket.belongsTo(User)

Usluga.hasOne(UslugaInfo)
UslugaInfo.belongsTo(Usluga)

Basket.hasMany(BasketUsluga)
BasketUsluga.belongsTo(Basket)

Type.hasMany(Usluga)
Usluga.belongsTo(Type)

Usluga.hasMany(BasketUsluga)
BasketUsluga.belongsTo(Usluga)

User.hasMany(Rating)
Rating.belongsTo(User)

Usluga.hasMany(Rating)
Rating.belongsTo(Usluga)

module.exports = {
    User,
    Basket,
    BasketUsluga,
    Usluga,
    Type,
    Rating,
    UslugaInfo
}



























