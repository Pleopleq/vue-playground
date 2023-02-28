const express = require("express");
var cors = require("cors");
require("dotenv").config();
const fetch = (...args) =>
    import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();

app.use(cors());

app.get("/brawlers", (req, res) => {
    fetch("https://api.brawlstars.com/v1/brawlers", {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: "Bearer " + process.env.API_KEY,
        },
    })
        .then((response) => response.json())
        .then((data) => res.send(data));
});

app.get("/brawler/:id", (req, res) => {
    const brawlerId = req.params.id;

    fetch(`https://api.brawlstars.com/v1/brawlers/${brawlerId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: "Bearer " + process.env.API_KEY,
        },
    })
        .then((response) => response.json())
        .then((data) => res.send(data));
});

app.listen(4000, () => {
    console.log("Server up and running");
});
