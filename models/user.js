const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true },
    birthday: { type: String, required: true },
  },
  {
    timestamps: true
  }
);
// default 옵션도 있음

userSchema.statics.create = (payload) => {
  // this === Model
  const user = new this(payload);
  // return Promise
  return user.save();
};

// 모델의 생성과 외부 export
module.exports = mongoose.model('User', personSchema);