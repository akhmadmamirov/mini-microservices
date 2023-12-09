const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors())

const events = []

app.post("/events", async (req, res) => {
    const event = req.body;

    events.push(event)

    //Sending to Posts service
    try {
        await axios.post('http://posts-clusterip-srv:4000/events', event);
        console.log("Posted to 4000");
    } catch (err) {
        console.error("Error posting to 4000", err);
    }

    //Sending to Comments service
    try {
        await axios.post('http://comments-srv:4001/events', event);
        console.log("Posted to 4001");
    } catch (err) {
        console.error("Error posting to 4001", err);
    }

    //Sending to Query service
    try {
        await axios.post('http://query-srv:4002/events', event);
        console.log("Posted to 4002");
    } catch (err) {
        console.error("Error posting to 4002", err);
    }

    //Sending to moderation service
    try {
        await axios.post('http://moderation-srv:4003/events', event);
        console.log("Posted to 4003");
    } catch (err) {
        console.error("Error posting to 4003", err);
    }

    res.status(201).json({"status": "OK"});
});

//Retrieving all the events
app.get('/events', (req,res) => {
    res.status(200).json(events)
})

app.listen(4005, () => {
    console.log("Listening on Port 4005");
});
