const express = require('express')
const app = express()
const port = 4567
const axios = require('axios');
let port2;


app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'ping',
    })

    setTimeout(function(){
        axios.get(`http://localhost:${port2}`)
        //axios.get("http://localhost:5372")
        .then(response => {
            console.log(response.data)
        })
        .catch(error =>{
            console.log(error);
        });},1500);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    //axios.get(`http://localhost:${port2}`)

    axios.get('http://localhost:8080/s2').then(res=>{
        port2 = res.data.p2;
        axios.get(`http://localhost:${port2}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log("erreur serveur 2");
        });
        }).catch(err=>{
            console.log("erreur dans le lancement du serveur 3")
  })



})