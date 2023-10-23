const express = require("express");
const connectToMongo = require("./db");
const app = express();
connectToMongo();
app.use(express.json());
//available routes
// app.use("/api/user", require("./routes/user"));
app.use("/api/payments", require("./routes/payments"));
app.listen(5000, () => {
  console.log("Server started at port 5000");
});
