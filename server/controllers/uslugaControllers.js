const uuid=require('uuid')
const path = require('path');
const {Usluga, UslugaInfo} = require('../models/models')
const ApiError=require('../error/ApiError');


class uslugaControllers {
    async create(req,res, next){
        try {
            let {name, price,typeId,info}= req.body
        const {img}=req.files
        let fileName = uuid.v4() +".jpg"
        img.mv(path.resolve(__dirname,'..', 'static',fileName))
        const device =await Usluga.create({name, price, typeId,img: fileName})

        if(info){
           info = JSON.parse(info)
           info.forEach(i => 
                UslugaInfo.create({
                    title: i.title,
                    description: i.description,
                    uslugaId: usluga.id
                })
            )
        }    

      
        return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        
    }

    async getAll(req,res){
        let {typeId, limit, page}=req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let usluga;
        if(!typeId) {
            usluga = await Usluga.findAndCountAll({limit ,offset })
        }
        if(typeId) {
            usluga = await Usluga.findAndCountAll({where: {typeId}, limit, offset})
        }
        return res.json(usluga)
    }
    async getOne(req,res){
        const {id} = req.params
        const usluga =await Usluga.findOne(
            {
                where: {id},
                include: [{model: UslugaInfo, as: 'info'}]
        },
        )
        return res.json(usluga)
    }
}
module.exports = new uslugaControllers()