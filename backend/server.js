const express = require('express')
const app = express()
require('dotenv').config();

const mongoose = require('mongoose');

const taskRoutes = require("./routes/taskRoute");
app.use((req,res,next)=>{
    console.log('path ' + req.path + "method " + req.method );
    next();
})

app.use(express.json());

// app.get('/',(req,res)=>{
//     res.send("Hello world!!")
// })

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
    console.log(`DB connected successfully and listening to port ${process.env.PORT}`);
})
}).catch((err)=>{
    console.log(err);
})


app.use('/api/tasks',taskRoutes);