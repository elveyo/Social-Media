const mongoose = require("mongoose");
const { Schema } = mongoose;
const commentSchema = new Schema({
  commentBody: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
