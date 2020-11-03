var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app
.route('/document/status')
.get( function(req, res) {
    res.send("<h2>Status</h2>");
  })
.post( function (req, res){
   
    console.log(req.body);
    if (Object.keys(req.body).length!== 0){       //проверяет длину боди, если post был не с json, то длина 0 ({})
    req.body["code"]=200}
    res.send (req.body);
});
app
.route('/document/project')
.get( function(req, res) {
    res.send("<h2>Project</h2>");
  })
.post( function (req, res){
   
    console.log(req.body);
    if (Object.keys(req.body).length!== 0){       //проверяет длину боди, если post был не с json, то длина 0 ({})
    req.body["code"]=200}
    res.send (req.body);
});
  
  app.listen(3000);