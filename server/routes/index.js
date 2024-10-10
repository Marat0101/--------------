const Router = require('express')
const router = new Router()
const uslugaRouter = require('./uslugaRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')


router.use('/user', userRouter)
router.use('/type',typeRouter)
router.use('/usluga',uslugaRouter)

module.exports = router



