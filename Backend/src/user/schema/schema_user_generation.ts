const { Schema, model } = require('mongoose');

// Define the user schema
const IUser = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: { type: Date, required: true },
});

// Create the User model
const User = model('User', IUser);





// Define the blog schema
const BlogSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  tags: [String],
});

// Create the Blog model
const Blog = model('Blog', BlogSchema);


module.exports = Blog;





// Define the commentDto schema
const commentSchema = new Schema({
  comment: { type: String, required: true },
  commenterName: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  blog: { type: Schema.Types.ObjectId, ref: 'Blog', required: true },
});

// Create the CommentDto model
const CommentDto = model('comment', commentSchema);

module.exports = CommentDto;

module.exports = User;
