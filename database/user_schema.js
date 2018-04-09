const mongoose = require('mongoose');
const crypto = require('crypto');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: { type:String, 'default':''}
	, hashed_password:{type:String, required: true, 'default':''}
	, name: {type: String, index: 'hashed', 'default':''}
	, salt: {type: String, required: true}
	, phoneNumber: {type: Number, required: true, 'default':0}
	, created_at:{type: Date, index:{unique: false}, 'default': Date.now()}
	, updated_at:{type: Date, index:{unique: false}, 'default': Date.now()}
});


//validate 메서드 : 그 값이 유효한지를 체크한다!

//입력된 컬럼 값이 있는지 확인
userSchema.path('email').validate(function(email){
	return email.length;
}, 'email 칼럼의 값이 없습니다.');

userSchema.path('hashed_password').validate((hashed_password)=>{
	return hashed_password.length;
}, 'hashed_password 칼럼의 값이 없습니다.');

//user모델 객체에서 메소드를 사용할 수 있도록 static()함수를 통해 메소드를 정의
userSchema.static('findByEmail',function(email, callback){
	return this.find({email: email}, callback);
});

userSchema.static('findAll', function(callback){
	return this.find({}, callback);
});

module.exports = mongoose.model('user', userSchema);