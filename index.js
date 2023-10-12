const mongoose = require('mongoose')
const util = require('util');

//connection string
mongoose.connect('mongodb://127.0.0.1:27017/BN6')
    .then(() => console.log('Connected!'))
    .catch((err) => console.error(err))

const UserModel = require('./models/UserModel')
const PostModel = require('./models/PostModel')
const CommentModel = require('./models/CommentModel')

const createData = async () => {
    try {
        const users = await UserModel.insertMany([
            {
                email: 'john@example.com',
                password: 'password123',
                name: 'John Doe',
                friends: 10,
                receiveRequests: "John's receive requests",
                sendRequests: "John's send requests"
            },
            {
                email: 'jane@example.com',
                password: 'password456',
                name: 'Jane Doe',
                friends: 20,
                receiveRequests: "Jane's receive requests",
                sendRequests: "Jane's send requests"
            },
            {
                email: 'bob@example.com',
                password: 'password789',
                name: 'Bob Brown',
                friends: 15,
                receiveRequests: "Bob's receive requests",
                sendRequests: "Bob's send requests"
            }
        ]);

        const posts = await PostModel.insertMany([
            {
                author: users[0]._id,
                content: 'This is John\'s first post',
                likes: 5
            },
            {
                author: users[1]._id,
                content: 'This is Jane\'s first post',
                likes: 3
            },
            {
                author: users[2]._id,
                content: 'This is Bob\'s first post',
                likes: 7
            }
        ]);


        await CommentModel.insertMany([
            {
                author: users[0]._id,
                post: posts[2]._id,
                content: 'John commenting on Bob\'s post',
                likes: 2,
                replies: "John's replies"
            },
            {
                author: users[1]._id,
                post: posts[0]._id,
                content: 'Jane commenting on John\'s post',
                likes: 4,
                replies: "Jane's replies"
            },
            {
                author: users[2]._id,
                post: posts[1]._id,
                content: 'Bob commenting on Jane\'s post',
                likes: 1,
                replies: "Bob's replies"
            }
        ]);
    } catch (error) {
        console.error("Error creating sample data:", error);
    }
};
createData();

// (async () => {
//     // Linking comments to posts
//     // for (let comment of comments) {
//     //     const post = await Post.findById(comment.post);
//     //     post.comments.push(comment._id);
//     //     await post.save();
//     // }
//     let users = await UserModel.find().exec()
//     console.log(users)
// })()
// async function getUsersWithPosts() {
//     try {
//         const result = await UserModel.aggregate([
//             {
//                 $lookup: {
//                     from: "posts",  // this should be the name of the posts collection in the database, usually lowercase and plural
//                     localField: "_id",  // field from the User collection
//                     foreignField: "author",  // field from the Post collection
//                     as: "userPosts"  // output array for found posts
//                 }
//             }
//         ]);
//         console.log(util.inspect(result, { depth: Infinity, colors: true }))
//         // console.log(result)
//         // This will display each user and their associated posts in the 'userPosts' field
//         return result;
//     } catch (err) {
//         console.error("Error fetching users with their posts:", err);
//         return [];
//     }
// }

// getUsersWithPosts();