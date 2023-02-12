const express = require('express')
const router = express.Router()

const playController = require('../controller/playController')
const playMiddleware = require('../middlewares/playMiddleware')

router.get('/plays', playController.getAll)
router.post('/plays', playMiddleware.validateBody, playController.createPlay)
router.delete('/plays/:id', playController.deletePlay)
router.put('/plays/:id', playMiddleware.validateBody, playController.editPlay)

module.exports = router