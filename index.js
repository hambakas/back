var express = require('express'); 
var cors = require('cors'); 
var app = express(); 
app.use(cors()); 
 
app.get('/', function (req, res) { 
  res.send("hello final2"); 
}); 
 
 
 app.get('/:number', function (req, res) { 
  var result = { 
  data: parseInt(req.params.number, 10) * 4
  }; 
  res.send(result); 
}); 
 
 
app.listen(process.env.PORT || 3000, function () { 
console.log('Example app listening on port 3000!'); 
console.log('testv2'); 
}); 
