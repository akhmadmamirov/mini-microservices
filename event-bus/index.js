const express = require("express")
const bodyParser = require("body-parser")
const axios = require("axios")

const app = express()
app.use(bodyParser.json())


axios.post("/events", (req,res) => {
    const event = req.body

    axios.post('http://localhost:4000/events', event).catch(err => console.log(err));
    axios.post('http://localhost:4001/events', event).catch(err => console.log(err));
    axios.post('http://localhost:4002/events', event).catch(err => console.log(err));

    res.status(201).json({"status": "OK"})
})

app.listen(4005,() => {
    console.log("Listening on Port 4005")
})


