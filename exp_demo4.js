var express = require('express');
var app = express();

app.get('/home',(req,res) => {
    res.send("Home Page");
});
app.get('/about',(req,res) => {
    res.send("about");
});

app.listen(3000);
