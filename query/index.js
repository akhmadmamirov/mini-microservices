const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app =  express();
app.use(bodyParser.json())
app.use(cors())

const posts = {}

//Ship the data
app.get('/posts', (req, res) => {
    res.status(200).json(posts)
})

//Receiving from event-bus & preparing data to ship
app.post('/events', (req, res) => {
    const {type, data} = req.body;

    if (type === 'PostCreated') {
        const {id, title} = data;

        posts[id] = {id, title, comments: []}
    }

    if (type === 'CommentCreated') {
        const {id, content, postId} = data;

        posts[postId].comments.push({id, content})
    }

    console.log(posts)
    res.status(200).json({});
})

app.listen(4002, (req,res) => {
    console.log('Listening on port 4002')
})

