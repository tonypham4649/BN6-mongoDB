const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//define Post Collection
const PostSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    content: String,
    likes: Number,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})

const PostModel = mongoose.model('Post', PostSchema);

module.exports = PostModel