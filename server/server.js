const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const postsRoutes = require("./routes/posts");
const commentRoutes = require("./routes/comments");

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
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
//Routes
app.use("/posts", postsRoutes);
app.use("/comments", commentRoutes);

app.listen(3001, () => {
  console.log("server started");
});
