require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const githubData ={
  "login": "Ahmedrauf1234",
  "id": 141822243,
  "node_id": "U_kgDOCHQJIw",
  "avatar_url": "https://avatars.githubusercontent.com/u/141822243?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Ahmedrauf1234",
  "html_url": "https://github.com/Ahmedrauf1234",
  "followers_url": "https://api.github.com/users/Ahmedrauf1234/followers",
  "following_url": "https://api.github.com/users/Ahmedrauf1234/following{/other_user}",
  "gists_url": "https://api.github.com/users/Ahmedrauf1234/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Ahmedrauf1234/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Ahmedrauf1234/subscriptions",
  "organizations_url": "https://api.github.com/users/Ahmedrauf1234/orgs",
  "repos_url": "https://api.github.com/users/Ahmedrauf1234/repos",
  "events_url": "https://api.github.com/users/Ahmedrauf1234/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Ahmedrauf1234/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Muhammad Ahmed",
  "company": null,
  "blog": "https://ahmedrauf1234.github.io/My-Portfolio/",
  "location": "Pakistan",
  "email": null,
  "hireable": null,
  "bio": "Front End Developer",
  "twitter_username": "ahmedrauf261",
  "public_repos": 35,
  "public_gists": 0,
  "followers": 1,
  "following": 0,
  "created_at": "2023-08-09T09:18:32Z",
  "updated_at": "2024-02-26T09:11:24Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter' , (req , res)=>{
    res.send('Ahmed.com');
})
app.get('/login' , (req , res)=>{
    res.send('<h1>Muhammad Ahmed</h1>')
})

app.get('/youtube' , (req , res)=>{
    res.send('<h2>Chai aur Code</h2>')
})
app.get('/github' , (req , res)=>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})