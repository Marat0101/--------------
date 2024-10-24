const Router = require('express')
const router = new Router()
const uslugaRouter = require('./uslugaRouter')
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const checkRole = require('../middleware/checkRoleMiddleware')

router.use('/user', userRouter)
router.use('/type',checkRole('ADMIN'),typeRouter)
router.use('/usluga',uslugaRouter)

module.exports = router



