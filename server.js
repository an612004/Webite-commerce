const express = require('express')
const app = express()
const port = 3000 // port
const hostName = 'localhost' // hostname
require('dotenv').config()

console.log(">>>check env:",process.env);
// khai báo route
app.get('/', (req, res) => { // app express
  res.send('Hello World!')
})
app.get('/Page2', (req, res) => { // app express
  res.send('Hello javascript!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
