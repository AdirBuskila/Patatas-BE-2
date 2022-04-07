const productService = require('./product.service.js');
const logger = require('../../services/logger.service')



// GET LIST
async function getProducts(req, res) {
    try {
        const Products = await productService.query()
        res.json(Products);
    } catch (err) {
        logger.error('Failed to get Board', err)
        res.status(500).send({ err: 'Failed to get Board' })
    }
}
// async function getWorkSpaceMembers(req, res) {
//     try {
//         const Board = await boardService.query('members')
//         res.json(Board);
//     } catch (err) {
//         logger.error('Failed to get Board', err)
//         res.status(500).send({ err: 'Failed to get Board' })
//     }
// }

// // GET BY ID 
// async function getBoardById(req, res) {
//     try {
//         const boardId = req.params.id;
//         const board = await boardService.getById(boardId)
//         res.json(board)
//     } catch (err) {
//         logger.error('Failed to get Board', err)
//         res.status(500).send({ err: 'Failed to get Board' })
//     }
// }

// // POST (add Board)
// async function addBoard(req, res) {
//     try {

//         const board = req.body;
//         const addedBoard = await boardService.add(board)
//         res.json(addedBoard)
//     } catch (err) {
//         logger.error('Failed to add Board', err)
//         res.status(500).send({ err: 'Failed to add Board' })
//     }
// }

// // PUT (Update Board)
// async function updateBoard(req, res) {
//     try {
//         const board = req.body;
//         const updatedBoard = await boardService.update(board)
//         res.json(updatedBoard)
//     } catch (err) {
//         logger.error('Failed to update Board', err)
//         res.status(500).send({ err: 'Failed to update Board' })

//     }
// }

// // DELETE (Remove Board)
// async function removeBoard(req, res) {
//     try {
//         const boardId = req.params.id;
//         const removedId = await boardService.remove(boardId)
//         res.send(removedId)
//     } catch (err) {
//         logger.error('Failed to remove Board', err)
//         res.status(500).send({ err: 'Failed to remove Board' })
//     }
// }
// async function getAllLabels(req, res) {
//     try {
//         const labels = await boardService.getLabels()
//         res.send(labels)
//     } catch (err) {
//         logger.error('Failed to get Labels', err)
//         res.status(500).send({ err: 'Failed to get Labels' })
//     }
// }


module.exports = {
    getProducts,
}