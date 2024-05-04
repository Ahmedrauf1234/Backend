const express = require('express')
const app = express()
const port = 3000
const Arr = [];
//========================Data mangwane k liye used hota hai===================>>
app.get('/api/v1/todo', (req, res) => {
  res.send({todo:Arr})
})
//===========End===========>>

//====================Data behjne k liye ==========================>>
app.post('/api/v1/todo',(req , res)=>{
    const title = req.body;
    Arr.push({title:title, id: Date.now()})
    res.send({massage:'Data Added' , toto:Arr})
})
//================End==============>>
//=================Get Single todo=================>>
app.get('/api/v1/todo/:id' , (req , res)=>{
    const id = req.params;
    console.log(id);
    const items = Arr.filter((item)=>{
        item.id == id
        return items
    })
    res.send({todo: items})
})
//====================End===============>>
//==================Put==================>>
app.put('' , (req  , res)=>{
    const id = req.params
    const title = req.body
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





//HTTP METHODS
// GET //data mangwana ka liya
// POST //data bhejna ka liya
// PUT //update
// DELETE //delete


//thunder client