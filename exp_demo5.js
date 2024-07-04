var express = require('express');
var app = express();

app.get('/bookings/:boookingId', function(req,res){
    res.send(req.params);
});

app.listen(3000);
