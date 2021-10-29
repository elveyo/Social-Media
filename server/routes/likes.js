const router = require("express").Router();
const Post = require("../models/Post");
const Like = require("../models/Like");
const verifyToken = require("../middlewares/verifyToken");
const { Types } = require("mongoose");

router.post("/:postId", verifyToken, async (req, res) => {
  const userId = req.user._id;
  const foundLike = await Like.findOne({ postId: req.params.postId, userId });
  if (foundLike) {
    const deletedLike = await Like.deleteOne(foundLike);
    res.json({ liked: true });
  } else {
    const like = new Like({ postId: req.params.postId, userId });
    await like.save();
    res.json({ liked: false });
  }
});

module.exports = router;
