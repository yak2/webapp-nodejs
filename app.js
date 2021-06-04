const express = require("express");
const app = express();

app.get("/",function(req, res){
	res.send("Hello from Docker!");
});

/** 3000, 8000, 8080, 8888*/
app.listen(3000, function(){
	console.log("app listening on 3000");
});
