const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({
    Name: 'Ahmed Rauf',
    Age: 21,
    
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})