const mongoose = require("mongoose");
const mongoURI = process.env.DB;
const connectToMongo = () => {
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connection Successful..."))
    .catch((err) => console.log(err));
};

module.exports = connectToMongo;
