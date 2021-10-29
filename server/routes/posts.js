const router = require("express").Router();
const Post = require("../models/Post");
const Like = require("../models/Like");
const User = require("../models/User");
const verifyToken = require("../middlewares/verifyToken");
const { Types } = require("mongoose");

router.get("/", verifyToken, async (req, res) => {
  const posts = await Post.aggregate([
    {
      $lookup: {
        from: "likes",
        localField: "_id",
        foreignField: "postId",
        as: "likes",
      },
    },
  ]);
  const userId = new Types.ObjectId(req.user._id);
  // const user = await User.findOne({ _id: userId });
  const likedPosts = await Like.find({ userId }).distinct("postId");

  res.json({ posts, likedPosts });
});
router.post("/", verifyToken, async (req, res) => {
  const post = new Post(req.body);
  post.username = req.user.username;
  await post.save();
  res.json(post);
});
router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id).populate({
    path: "comments",
    populate: {
      path: "commentAuthor",
      model: "User",
    },
  });
  res.json(post);
});
router.delete("/:postId", verifyToken, async (req, res) => {
  const post = await Post.findById(req.params.postId);
  if (post.username == req.user.username) {
    const deletedPost = await Post.deleteOne(post);
  } else {
    res.status(401);
  }

  res.json("deleted");
});

module.exports = router;
