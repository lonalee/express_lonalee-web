var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var booksSchema = new Schema({
  title : String,
  author: String,
  price : String
});

booksSchema.statics.create = function (payload) {
  // this === Model
  const book = new this(payload);
  // return Promise
  return book.save();
};

module.exports = mongoose.model('books', booksSchema);