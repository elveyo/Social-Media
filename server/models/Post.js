const mongoose = require("mongoose");
const { Schema } = mongoose;
const postSchema = new Schema({
  title: String,
  postText: String,
  username: String,
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

module.exports = mongoose.model("Post", postSchema);
