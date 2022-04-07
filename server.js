const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()


// session setup
app.use(express.json())
app.use(express.static('public'))

if (process.env.NODE_ENV === 'production') {
    // Express serve static files on production environment
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    // Configuring CORS
    const corsOptions = {
        // Make sure origin contains the url your frontend is running on
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://localhost:3000'],
        credentials: true
    }
    app.use(cors(corsOptions))
}

const productRoutes = require('./api/product/product.routes')


// routes
app.use('/api/product', productRoutes)


app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const logger = require('./services/logger.service')
const port = process.env.PORT || 3333
app.listen(port, () => {
    logger.info('Server is running on port: ' + port)
})