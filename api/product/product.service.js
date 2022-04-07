const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId



async function query() {
    try {
        const criteria = {}
        const collection = await dbService.getCollection('products')
        const products = await collection.find(criteria).toArray() || []
        return products
    } catch (err) {
        logger.error('cannot find products', err)
        throw err
    }
}

async function getById(boardId) {
    try {
        const collection = await dbService.getCollection('products')
        const board = collection.findOne({ '_id': ObjectId(boardId) })
        return board
    } catch (err) {
        logger.error(`while finding board ${boardId}`, err)
        throw err
    }
}

// async function remove(boardId) {
//     try {
//         const collection = await dbService.getCollection('boards')
//         await collection.deleteOne({ '_id': ObjectId(boardId) })
//         return boardId
//     } catch (err) {
//         logger.error(`cannot remove board ${boardId}`, err)
//         throw err
//     }
// }

// async function add(board) {
//     // console.log('Hey Adir rulzzzzzzzz', board);
//     newBoard = {
//         "_id": ObjectId(),
//         "title": board.title,
//         "createdAt": new Date().getTime(),
//         "createdBy": board.createdBy,
//         "style": board.style,
//         labels: [{
//                 "_id": ObjectId(),
//                 name: 'QA',
//                 bgc: '#F5DD29'
//             },
//             {
//                 "_id": ObjectId(),
//                 name: 'Done',
//                 bgc: '#ff9f1a'
//             },
//             {
//                 "_id": ObjectId(),
//                 name: 'Important',
//                 bgc: '#eb5a46'
//             },
//             {
//                 "_id": ObjectId(),
//                 name: 'Todo',
//                 bgc: '#c377e0'
//             },

//             {
//                 "_id": ObjectId(),
//                 name: 'Development',
//                 bgc: '#6EC2A9'
//             },
//             {
//                 "_id": ObjectId(),
//                 name: 'Critical',
//                 bgc: '#29CCE5'
//             }
//         ],
//         "members": [board.createdBy],
//         "groups": [],
//         "activities": []
//     }
//     try {
//         const collection = await dbService.getCollection('board')
//         collection.insertOne(newBoard)
//     } catch (err) {
//         logger.error('cannot insert board', err)
//         throw err
//     }
// }
// async function update(board) {
//     // console.log(board);
//     try {
//         var id = ObjectId(board._id)
//         delete board._id
//         const collection = await dbService.getCollection('board')
//         await collection.updateOne({ "_id": id }, { $set: {...board } })
//         return board
//     } catch (err) {
//         logger.error(`cannot update board ${board._id}`, err)
//         throw err
//     }
// }

module.exports = {
    query,
    getById,
}