const mongoose = require("mongoose");
const Post = require("./models/Post");
const Comment = require("./models/Comment");
require("dotenv").config()

mongoose
  .connect(
    `${process.env.MONGODB_CONNECTION_STRING}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("database connected"))
  .catch((e) => console.log(e.message));

const resetDb = async () => {
  await Post.deleteMany({});
  await Comment.deleteMany({});
  console.log("Your database is clean as baby!");
};

resetDb();
