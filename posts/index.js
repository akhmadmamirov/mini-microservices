const express = require("express")
const bodyParser = require("body-parser")
const { randomBytes } = require("crypto")

app = express()

app.use(bodyParser.json())

posts = {}

app.get("/posts", (req, res) => {
    res.status(200).json(posts)
})

app.post("/posts", (req, res) => {
    //Gen random id
    const id = randomBytes(4).toString("hex")
    const { title } = req.body
    posts[id] = {
        id, title
    }

    res.status(201).json(posts[id])

})

app.listen((4000), () => {
    console.log('App listening on port 4000!');
});