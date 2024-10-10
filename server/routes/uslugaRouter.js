const Router = require('express')
const router = new Router()
const userControllers=require('../controllers/uslugaControllers')
const uslugaControllers = require('../controllers/uslugaControllers')

router.post('/',uslugaControllers.create)
router.get('/',uslugaControllers.getAll)
router.get('/:id',uslugaControllers.getOne)

module.exports= router
