const express = require("express")
const bodyParser = require("body-parser")
const { randomBytes } = require("crypto")
const cors = require('cors')
const axios = require("axios")

app = express()

app.use(bodyParser.json())
app.use(cors())

posts = {}

app.get("/posts", (req, res) => {
    res.status(200).json(posts)
})

app.post("/posts/create ", async (req, res) => {
    //Gen random id
    const id = randomBytes(4).toString("hex")
    const { title } = req.body
    posts[id] = {
        id, title
    }

    res.status(201).json(posts[id])

    await axios.post("http://event-bus-srv:4005/events", {
        type: "PostCreated",
        data: {
            id, title
        }
    })

})

app.post('/events', (req, res) => {
    console.log('received an event', req.body.type)

    res.status(201).json({})
})

app.listen((4000), () => {
    console.log('v55')
    console.log('App listening on port 4000!');
});