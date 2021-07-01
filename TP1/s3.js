const express = require('express')
const app = express()
const port = 8080
const axios = require('axios');

app.get('/s1', (req, res) => {
    res.status(200).json({
        p1: "4567"
    })
    })

app.get('/s2', (req, res) => {
    res.status(200).json({
        p2: "5372"
    })
    })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})