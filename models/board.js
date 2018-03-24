const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = new Schema({
	title: String,
	writer: String,
	content: String,
	published_date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('board', boardSchema);