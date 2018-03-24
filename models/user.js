const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: String,
	password: String,
	email: String,
	phoneNumber: Number,
	published_date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('user', userSchema);