const express = require('express')
const app = express()
const port = 5372
const axios = require('axios');

app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'pong',

    })
    setTimeout(function(){
        axios.get('http://localhost:4567/')
        .then(response => {
            console.log(response.data)
        })
        .catch(error =>{
            console.log(error);
        });},1500);

    })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})