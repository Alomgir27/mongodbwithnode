const express = require('express');
const connectDB = require('./DB/Connection')
const app = express()

connectDB();
app.use(express.json({extended: false}))
app.use('/api/userModel', require('./Api/User'))
const Port = process.env.port || 3301;

app.listen(Port, () => console.log("Server Started"));