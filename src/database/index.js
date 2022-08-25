const mongoose = require("mongoose");

function connect() {
  mongoose.connect("mongodb://localhost:27017/");

  const db = mongoose.connection;

  db.once("open", () => {
    console.log("Connected to DB");
  });

  db.on("error", console.error.bind(console, "connection error"));
}

module.exports = {
    connect
}
