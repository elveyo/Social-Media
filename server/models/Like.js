const mongoose = require("mongoose");
const { Schema } = mongoose;
const LikeSchema = new Schema({
  postId: {
    type: Schema.Types.ObjectId,
  },
  userId: {
    type: Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("Like", LikeSchema);
