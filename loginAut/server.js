const express = require ('express');
const jwt = require('jsonwebtoken')

const dotEnv = require('dotenv');
const app= express();

const port = 4000;

app.use(express.json());
dotEnv.config();

const secretKey = process.env.mySecretKey

const users =[{
    id:"1",
    username:"lavanya",
    password:"lavanya",
    isAdmin:true
},
{
    id:"2",
    username:"dara",
    password:"dara",
    isAdmin:false
}
]

app.post('/api/login',(req,res)=>{
    const {username,password}=req.body;

    const user = users.find((person)=>{
        return person.username === username && person.password === password 

    })
    if(user){
        const accessToken=jwt.sign(
            {
                id:user.id,
                username:user.username,
                isAdmin:user.isAdmin
            },secretKey
        )
        res.json({
            username:user.username,
            isAdmin:user.isAdmin,
            accessToken
        })
    }else{
        res.status(401).json("user details not matched");
    }
})

app.delete('/api/users/:userID')


app.listen(port,()=>{
    console.log(`SERVER STARTED AND RUNNING ON ${port}`);
})