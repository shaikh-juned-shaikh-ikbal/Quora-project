const mongoose = require("mongoose");

const url ='mongodb+srv://sheikhjuned770:AGY6vgWyBvbvnvJ8@quora-clone.llatw74.mongodb.net/?retryWrites=true&w=majority';

const connect = async() => {
 await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};

module.exports=connect;