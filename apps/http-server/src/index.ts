import express from "express"
import { client } from "@repo/db/client"

const app = express()
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Hiii Lakshya")
})

app.post("/signup",async (req,res)=>{
    const {username,password} = req.body

    const user = await client.user.create({
        data:{
            username,
            password
        }
    })
    res.json({
        message: "Signup Success",
        id: user.id
    })
})


app.listen(3002)
