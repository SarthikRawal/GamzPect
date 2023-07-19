const express = require("express");
const app = express();
const PORT = process.env.PORT || 7887;
const path = require("path");
const mongoose = require("./db/connect");
const Register = require("./models/userMaster");

app.use(express.static("./public"));

app.set("view engine", "hbs");
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/signup", async(req, res) => {
    const userRegView = new Register({
        usermailid:req.body.email,
        username:req.body.username,
        userpwd:req.body.pwd
    });
    if (password !== confirmPassword) {
      res.status(400).send("Passwords don't match");
      return;
    }
    const result = await userRegView.save();
  res.status(200).send(req.body);
});



app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/blog", (req, res) => {
  res.render("blog");
});
app.get("/TicTacToe", (req, res) => {
  res.render("TicTacToe");
});

app.listen(PORT, () => {
  console.log("Sever is running on: 7887");
});
