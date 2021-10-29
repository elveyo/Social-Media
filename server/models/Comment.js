const mongoose = require("mongoose");
const { Schema } = mongoose;
const commentSchema = new Schema({
  commentBody: {
    type: String,
    required: true,
  },
  commentAuthor: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Comment", commentSchema);
