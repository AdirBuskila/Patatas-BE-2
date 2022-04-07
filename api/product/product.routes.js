const express = require('express')
// const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
// const { log } = require('../../middlewares/logger.middleware')
const { getProducts } = require('./product.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getProducts)
// router.get('/members', log, getBoards)
// router.get('/labels', getAllLabels)
// router.get('/:id', getBoardById)
// router.post('/', addBoard)
// router.put('/:id', updateBoard)
// router.put('/:id', requireAuth, requireAdmin, updateBoard)
// router.delete('/:id', requireAuth, requireAdmin, removeBoard)

module.exports = router