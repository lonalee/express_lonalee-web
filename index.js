require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var path    = require("path");


app.set('port', (process.env.PORT || 9999));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// MONGODB process.env.MONGO_URI를 통해서 연결.

mongoose.Promise = global.Promise;

// CONNECT TO MONGODB SERVER
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));
//
app.get('/', function(request, response) {
  response.render('pages/index')
});
// app.get('/signup', (req, res) => {
//   res.sendFile('pages/signup.ejs')
// })
app.get('/signup',function(req,res){
  res.render(path.join(__dirname+'/views/pages/signup.ejs'));
});

app.use('/books', require('./routes/books')); //라우터 사용
app.use('/users', require('./routes/users')); //라우터 사용

const Books = require('./models/books');
app.get('/books', function(req,res){
  Books.find(function(err, books){
    if(err) return res.status(500).send({error: 'database failure'});
    res.json(books);
  });
});

// 새로운 document의 생성
app.post('/books', (request, response) => {
  const insertBook = new Books(request.body);   // Books 모델로 인스턴스를 생성
  // insertBook = request.body;
  insertBook.save(function(err){      // DB에 실질적으로 저장하는 코드
    if(err){                          // error 처리
        console.error(err);
        response.json({result: 0});
        return;
    }
    response.json({result: 1});            //  성공
  });
});

const Users = require('./models/user');
app.post('/users', (req, res) => {
  const createUser = new Users(req.body);
  createUser.save((err) => {
    if(err) {
      console.log(err);
      response.json({result: 0});
    } else response.json({result: 1});
  })
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
