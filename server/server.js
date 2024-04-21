const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const postsRoutes = require("./routes/posts");
const commentRoutes = require("./routes/comments");
const userRoutes = require("./routes/users");
const likeRoutes = require("./routes/likes");
const cookieParser = require("cookie-parser");
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

app.use(express.json());
app.use(express.urlencoded());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
//Routes
app.use("/posts", postsRoutes);
app.use("/comments", commentRoutes);
app.use("/auth", userRoutes);
app.use("/likes", likeRoutes);

app.listen(3001, () => {
  console.log("server started");
});
