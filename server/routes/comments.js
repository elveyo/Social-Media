const router = require("express").Router();
const Comment = require("../models/Comment");
const Post = require("../models/Post");
const verifyToken = require("../middlewares/verifyToken");
const { Types } = require("mongoose");

router.post("/:postId", verifyToken, async (req, res) => {
  const postId = req.params.postId;
  const comment = new Comment(req.body);
  const post = await Post.findById(postId);
  const commentId = new Types.ObjectId(req.user._id);
  comment.commentAuthor = commentId;
  post.comments.push(comment);
  await comment.save();
  await post.save();
  res.json(comment);
});

router.delete("/:commentId", verifyToken, async (req, res) => {
  const comment = await Comment.findById(req.params.commentId);
  if (comment.commentAuthor == req.user._id) {
    await Comment.deleteOne(comment);
  } else {
    console.log("noo");
  }
  res.json({ author: comment.commentAuthor, logged: req.user });
});
module.exports = router;
