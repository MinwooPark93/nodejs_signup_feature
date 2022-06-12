const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userAge: {
    type: Number,
    required: true,
  },
  userDept: {
    type: String,
    required: true,
  },
  userMemo: {
    type: String,
  },
});

module.exports = mongoose.model("User", schema);
