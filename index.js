require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

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

// 참고 url 요청
// app.get('/cool', function(request, response) {
//   response.send(cool());
// });
app.use('/people', require('./routes/people')); //라우터 사용
//
const Books = require('./models/books');
app.get('/books', function(req,res){
  Books.find(function(err, books){
    if(err) return res.status(500).send({error: 'database failure'});
    res.json(books);
  });
});
//

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
