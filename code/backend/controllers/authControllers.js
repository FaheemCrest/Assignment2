const User = require("../models/user");
const shortId = require("shortid");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const speakeasy = require('speakeasy');

// user signup
exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: "Email is already taken",
      });
    }

    //console.log('Show before:'+req.bady.secret);
    const { name, email, password, secret } = req.body;
    console.log('Show before:'+secret);
    let newUser = new User({ name, email, password, secret });
    newUser.save((err, success) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      // res.json({
      //   user: success,
      // });
      res.json({
        message: "Signup is Successful! Please Login to View or Add Trips",
      });
    });
  });
};

// user signin
exports.signin = (req, res) => {
  const { email, password, code} = req.body;

  console.log('code=');
  //check if user exist
  User.findOne({ email }).exec((err, user) => {
    //console.log("checking at the "+user.secret)
    if (err || !user) {
      return res.status(400).json({
        error: "User With That Email Does Not Exist. Please Signup",
      });
    }

    // authenticate
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "Email and Password Do Not Match.",
      });
    }
    const newMes = "ksjdfkjs";
    return res.json({
      newMes,
    });
    /*
    //VerificationTheCode
    console.log("checking at the "+user.secret)
    const secret = user.secret;
    console.log("checking at the "+secret)
    const token = code;
    const tokenValidate = speakeasy.totp.verify({
      secret,
      encoding: 'base32',
      token,
      window: 30
    });
    console.log('token++',tokenValidate);
    if(tokenValidate){
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
  
      res.cookie("token", token, { expiresIn: "1d" });
      const { _id, username, name, email, role } = user;
      return res.json({
        token,
        user,
      });
    }
    else{
      return res.status(400).json({
        error: "Invalid code.",
      });
    }
    // generate a token and send to client
    */
    
  });
};



exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "Signout Success",
  });
};

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});

exports.authMiddleware = (req, res, next) => {
  const authUserId = req.user._id;
  User.findById({ _id: authUserId }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User Not Found",
      });
    }
    req.profile = user;
    next();
  });
};

//we are not using any admin role in our signup and sign in but this is here for future use
exports.Middleware = (req, res, next) => {
  const UserId = req.user._id;
  User.findById({ _id: UserId }).exec((err, user) => {
    if (err || !user) {
      return status(400).json({
        error: "Admin User not found",
      });
    }
    if (user.role !== 1) {
      return res.status(400).json({
        error: "Admin resource Access denied",
      });
    }
    next();
  });
};