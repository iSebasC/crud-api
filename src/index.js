//Paso 1 independencias
//express

const express = require('express')
const app = express()

const userRouter = require('./routes/user')

//port
const PORT = process.env.PORT || 5000;

//routes
app.use(userRouter)

app.listen(PORT, ()=> 
    {console.log(`listen on port: ${PORT}`)
})