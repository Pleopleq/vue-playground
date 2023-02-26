const express = require("express")
require('dotenv').config()
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express()

app.get("/brawlers", (req, res) => {
    fetch('https://api.brawlstars.com/v1/brawlers', {
        method: "GET",
        headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + process.env.API_KEY,
        }
    })
        .then(response => response.json())
        .then(data => res.send(data));

})

app.listen(4000, () => {
    console.log("Server up and running")
})