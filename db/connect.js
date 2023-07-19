const { truncate } = require("fs");
const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("db is connected");
  });

module.exports = mongoose;