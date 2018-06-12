const express = require ('express');
const we = express();
const path = require ('path');
const bodyParser = require ('body-parser');

we.use(bodyParser.json({}));
we.use(bodyParser.urlencoded({extended: true}));
we.use(express.static(path.join(__dirname,'public')));
we.set('view engine','pug');
we.set('views',path.join(__dirname,'views'));

we.get('/',function(req,res){
  res.render('index');
})
we.get('/login',function(req,res){
  res.render('login');
})

var port = 3001;
we.listen(port,function(req,res){
  console.log('Urubuto at port'+port);
})
