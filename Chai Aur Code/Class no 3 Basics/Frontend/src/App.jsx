import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [jokes , setJokes] = useState([]);
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((res)=>{
      setJokes(res.data)
    }).catch((error)=>{
      console.log(error);
    })
  })
  return (
    <>
    <h1>Chai and full stack</h1>
    <p>Jokes: {jokes.length}</p>

    {jokes.map((items , index)=>{
     return <div key={index}>
        <h3>{items.title}</h3>
        <p>{items.content}</p>
      </div>
    })}
    </>
  )
}

export default App