const userRoutes = require('./userRoutes')

module.exports = app => {
    app.get('/', (req, res) => {
        res.send('Hello')
    })

    app.use(userRoutes)
}