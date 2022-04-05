const mongoose = require("mongoose");

const todoModel = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  body: {
    type: String,
    required: true,
  },
  completed: Boolean,
});

const Todo = mongoose.model("todo", todoModel);

module.exports = Todo;
