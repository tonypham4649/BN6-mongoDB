const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//define Comment Collection
const CommentSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    content: String,
    likes: Number,
    replies: String,
})

const CommentModel = mongoose.model('Comment', CommentSchema);

module.exports = CommentModel