const express = require('express');
const app = express();
const port = 8080;

app.get("/",    (req, res, next)=>{
    res.send("Welcome to the Ecommerce app")
})

app.listen(port, function(err){
    console.log("Server Started running on port " + port)
});


// morgan setup
const logger = require("morgan");
app.use(logger('tiny'));

// unknown routes handler
app.all("*", function(req, res) {
    res.status(404).json({message : `${req.url} not found`})
})


