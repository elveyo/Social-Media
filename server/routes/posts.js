const router = require("express").Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  const results = await Post.find();
  res.json(results);
});
router.post("/", async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.json(post);
});
router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id).populate("comments");
  res.json(post);
});
module.exports = router;
