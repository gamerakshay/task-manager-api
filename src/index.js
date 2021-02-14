const express=require('express')
require('./db/mongoose')
const userRouter= require('./routers/users')
const taskrouter=require('./routers/task')
const app=express()
const port=process.env.PORT 


app.use(express.json())
app.use(userRouter)
app.use(taskrouter)

app.listen(port,()=>{
    console.log('Server is up on port '+port)
})
