const mongoose = require("mongoose");
const { PORT, DATABASE_LOCAL, DATABASE_LIVE } = require("./environment");

mongoose
  .connect(DATABASE_LOCAL || DATABASE_LIVE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("success connect to database");
  })
  .catch((error) => {
    console.log(error);
  });

const db = mongoose.connection;

module.exports = db;
