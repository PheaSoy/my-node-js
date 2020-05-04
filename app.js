
const express = require('express')
const PORT = 3000
const app = express()

app.get('/', (req, res) => res.send('Hello from a Node JS'))

app.listen(PORT, () => console.log('I am listening on PORT '+PORT))
