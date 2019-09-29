var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var  data = {};




var urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { title: 'smart life', FarmT: data.FarmT, FarmH: data.FarmH, HomeT:data.HomeT, HomeD: data.HomeD
});
});

router.get('/home', function(req, res, next) {
  res.render('home', 
  { title: 'smart life' ,FarmT: data.FarmT, FarmH: data.FarmH, HomeT:data.HomeT, HomeD: data.HomeD


});
});

router.get('/field', function(req, res, next) {
  res.render('field', 
  { title: 'smart life' ,FarmT: data.FarmT, FarmH: data.FarmH, HomeT:data.HomeT, HomeD: data.HomeD


});
});

router.get('/datalog', function(req, res, next) {
  res.render('datalog', 
  { title: 'Express' ,
});
});
router.get('/aaaa', function(req, res, next) {
  res.render('aaaa', 
  { title: 'Express' ,
});
});


router.put("/", urlencodedParser, function(req, res, next){
  data[req.body.name] = req.body.value;
  console.log(data); 
});


router.post("/light/on", function(res, req, next){
ws.send("true");
res.writeHead(200).end("ok");
console.log("lights on!");
});

router.post("/light/off", function(res, req, next){
ws.send("false");
res.writeHead(200).end(OK);
console.log("lights off!");
});

router.post("/fan/on", function(res, req, next){
res.writeHead(200);
res.end(OK);
console.log("fan on!");
});


router.post("/fan/off", function(res, req, next){
res.writeHead(200).end(OK);
console.log("fan off!");
});



module.exports = router;
