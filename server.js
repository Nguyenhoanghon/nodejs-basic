const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.send('hello sadsaddsa world')
})
app.get('/about', (req, res) => {
    res.send('About we')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})