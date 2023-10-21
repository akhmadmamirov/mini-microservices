const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.post("/events", async (req, res) => {
    const event = req.body;

    try {
        await axios.post('http://localhost:4000/events', event);
        console.log("Posted to 4000");
    } catch (err) {
        console.error("Error posting to 4000", err);
    }

    try {
        await axios.post('http://localhost:4001/events', event);
        console.log("Posted to 4001");
    } catch (err) {
        console.error("Error posting to 4001", err);
    }

    // try {
    //     await axios.post('http://localhost:4002/events', event);
    //     console.log("Posted to 4002");
    // } catch (err) {
    //     console.error("Error posting to 4002", err);
    // }

    res.status(201).json({"status": "OK"});
});

app.listen(4005, () => {
    console.log("Listening on Port 4005");
});
