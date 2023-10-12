const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        max: 100,
        required: true,
    },
    password: String,
    name: {
        type: String,
        max: 100,
        required: true,
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
    friends: {
        type: Number,
        default: 0,
    },
    receiveRequests: String,
    sendRequests: String,
})

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel