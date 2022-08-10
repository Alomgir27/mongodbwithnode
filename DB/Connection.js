const mongoose = require('mongoose');

const URI = "mongodb+srv://dbUser:dbUser@cluster0.kqf4z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI,  { useNewUrlParser: true, useUnifiedTopology: true })
  console.log("DB Connected Successfully");
};


module.exports = connectDB;