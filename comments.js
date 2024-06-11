// Create web server
// 1. Load the express module
const express = require('express')
// 2. Create an express application
const app = express()
// 3. Load the body-parser module
const bodyParser = require('body-parser')
// 4. Load the data module
const data = require('./data')
// 5. Load the fs module
const fs = require('fs')

// 6. Use the body-parser module
app.use(bodyParser.json())

// 7. Create a route for the path /comments
app.get('/comments', (req, res) => {
  data.getComments().then((comments) => {
    res.send(comments)
  })
})

app.post('/comments', (req, res) => {
  const comment = req.body
  data.addComment(comment).then(() => {
    res.send('Comment added')
  })
})

// 8. Start the server
app.listen(3000, () => {
  console.log('Server started')
})