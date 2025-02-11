const express = require("express");
const app = express();
app.use(express.json())
const cors = require("cors")
app.use(cors())

const port = 3000;

let users =[
    
        {
          id: 1,
          username: "john_doe",
          name: "John Doe",
          repoCount: 15,
          location: "New York, USA"
        },
        {
          id: 2,
          username: "jane_smith",
          name: "Jane Smith",
          repoCount: 23,
          location: "London, UK"
        },
        {
          id: 3,
          username: "sam_lee",
          name: "Sam Lee",
          repoCount: 8,
          location: "Sydney, Australia"
        },
        {
          id: 4,
          username: "linda_k",
          name: "Linda Kim",
          repoCount: 12,
          location: "Toronto, Canada"
        }
      ]
  

  app.get("/users",async(req,res)=>{
      res.status(200).json({users})
  })

  app.get("/users/:id",async(req,res)=>{
    let userid =parseInt(req.params.id);
    let result = users.find((user)=> user.id === userid)
    if(result){
    return res.status(200).json({result}) ;
    }

    res.status(400).json({message : " No user found "})

  })
app.listen(port,()=>{
    console.log(`your api is running on http://localhost:${port}`)
})