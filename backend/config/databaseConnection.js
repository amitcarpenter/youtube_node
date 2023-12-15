const mongoose = require("mongoose");

let connection_string_online =
  "mongodb+srv://amitcarpenter:amitcarpenter@youtubenodebot.uxvc1vg.mongodb.net/?retryWrites=true&w=majority";
let connection_string_offline = "mongodb://127.0.0.1/Youtube_Automation";
// Connect Database
const DbConnnection = mongoose
  .connect(connection_string_online, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connnected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = { DbConnnection };
