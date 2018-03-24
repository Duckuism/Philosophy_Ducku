const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
	title: String,
	instructor: String,
	lesson_intro: String,
	published_date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('user', userSchema);