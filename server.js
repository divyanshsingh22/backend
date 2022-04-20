const express = require("express");
const cookieParser = require("cookie-parser");
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.use(express.json({
  extended: false
}));
app.use(cookieParser());
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
mongoose.connect('mongodb://localhost:27017/april20userDB');

// app.get("/login", (req, res) => {
//   const token = jwt.sign(payload, config.get('jwtSecret'));
//   return res
//     .cookie("jwt_token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//     })
//     .status(200)
//     .json({ message: "Logged in successfully" });
// });
//
// app.get("/protected", authorization, (req, res) => {
//   return res.json({ user: req.user });
// });
//
// app.get("/logout", authorization, (req, res) => {
//   return res
//     .clearCookie("jwt_token")
//     .status(200)
//     .json({ message: "Successfully logged out" });
// });

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
