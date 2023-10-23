const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://chaitanyaganipa121212:Ganipa%232004@cluster0.1mwscbj.mongodb.net/";

async function connectToMongo() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = connectToMongo;
