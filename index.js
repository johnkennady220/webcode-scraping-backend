const express = require("express")
const app = express ();
const PORT = 8000;

app.get("/",(req,res)=>{
    res.send("hello happy pongal to every one❤❤❤")
});

app.listen(PORT, ()=> console.log("server started on PORT",PORT));