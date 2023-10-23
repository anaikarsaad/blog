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


module.exports = User;
