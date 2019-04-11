//jshint esversion:6

const express = require("express");
const parser = require("body-parser");
const app = express();
app.use(parser.urlencoded({extended:true}));
app.use(express.static("css"));

app.get("/",function (req,res){
  res.sendFile(__dirname+"/index.html");
});

app.listen(process.env.port||"3000",function (){
  console.log("server working on port 3000...");
});
