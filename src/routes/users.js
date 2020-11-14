var express = require("express");
var router = express.Router();
const {
  showSignup,
  showLogin,
  login,
  signup,
  logout,
} = require("../controllers/userController");

const passport = require("passport");
/* GET home page. */
router.get("/", showLogin);

router.get("/signup", showSignup);

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/" }),
  login
);

router.get("/logout", logout);
router.post("/signup", signup);

module.exports = router;
