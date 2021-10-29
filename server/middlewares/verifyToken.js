const jwt = require("jsonwebtoken");
module.exports = async (req, res, next) => {
  const accesToken = req.cookies.token;
  if (accesToken) {
    try {
      const verified = await jwt.verify(accesToken, "secretkey");
      req.user = verified.user;
      next();
    } catch (e) {
      res.status(401).send({ message: "You are not allowed!" });
    }
  } else {
    res.status(401).send({ message: "You are not allowed!" });
  }
};
