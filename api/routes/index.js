const userRoutes = require('./userRoutes')
const classRoutes = require('./classRoutes')
const levelRoutes = require('./levelRoutes')
const express = require('express');
const path = require('path');

const publicDirectory = path.join(__dirname, '../public/');

const app = express();

app.use(express.static(publicDirectory))

module.exports = app => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(publicDirectory, 'index.html'));
    })

    app.use(userRoutes)
    app.use(classRoutes)
    app.use(levelRoutes)
}