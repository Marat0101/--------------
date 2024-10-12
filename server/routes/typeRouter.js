const Router = require('express')
const router = new Router()
const typeControllers=require('../controllers/typeControllers')

router.post('/', typeControllers.create)
router.get('/', typeControllers.getAll)

module.exports= router