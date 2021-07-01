const express = require('express')
const app = express()
const port = 5372
const axios = require('axios');
let port1;

app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'pong',
    })
    
    setTimeout(function(){
        axios.get(`http://localhost:${port1}`)
        .then(response => {
            console.log(response.data)
        })
        .catch(error =>{
            //console.log(error);
        });},1500);

    })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    axios.get("http://localhost:8080/s1")
    .then(response => {
        port1 = response.data.p1;
    })
})