const mongoose = require("mongoose");
const Post = require("./models/Post");
const Comment = require("./models/Comment");
mongoose
  .connect(
    "mongodb+srv://elveyo:odekucisad3@cluster0.sbokc.mongodb.net/socialMedia?retryWrites=true&w=majority",
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
