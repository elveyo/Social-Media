const router = require("express").Router();
const Comment = require("../models/Comment");
const Post = require("../models/Post");

router.post("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const comment = new Comment(req.body);
  const post = await Post.findById(postId);
  post.comments.push(comment);
  await comment.save();
  await post.save();
  res.json(post);
});
module.exports = router;
