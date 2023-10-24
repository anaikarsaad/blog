const mongoose = require('mongoose');
const { commentSchema } = require('../../user/schema/schema_user_generation.ts'); // Import your Comment model

// Connect to MongoDB
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
const Comment=mongoose.model('comment',commentSchema);
// List of Star Wars-related comments
const starWarsComments = [
  'May the Force be with you!',
  'I am your father.',
  'The dark side is strong in this one.',
  'These are not the droids you are looking for.',
  'I have a bad feeling about this.',
  'Use the Force!',
  'It’s a trap!',
  "I've got a bad feeling about this.",
  'The Force will be with you, always.',
];

// Define your User and Blog data arrays here
const users = [
    "6534ae4f30278d87f9d760b5",
    "6534afb47a87243e42e0b635",
    "6534b02fdb506c67557a62fd",
    "6535b4cec9554515324e39d2",
    "6536ecd59724b553f0acf01c",
    "6536ecd59724b553f0acf01e",
    "6536ecd59724b553f0acf020",
    "6536ecd59724b553f0acf022",
    "6536ecd59724b553f0acf024",
    "6536ecd59724b553f0acf026",
    "6536ecd59724b553f0acf028",
    "6536ecd69724b553f0acf02a",
    "6536ecd69724b553f0acf02c",
    "6536ecd69724b553f0acf02e",
    "6536ecd69724b553f0acf030",
    "6536ecd69724b553f0acf032",
    "6536ecd69724b553f0acf034",
    "6536ecd69724b553f0acf036",
    "6536ecd79724b553f0acf038",
    "6536ecd79724b553f0acf040",
    "6536ecd79724b553f0acf042",
    "6536ecd79724b553f0acf044",
    "6536ecd79724b553f0acf046",
    "6536ecd79724b553f0acf04a",
    "6536ecd79724b553f0acf04c",
    "6536ecd79724b553f0acf04e",
    "6536ecd79724b553f0acf050",
    "6536ecd79724b553f0acf052",
    "6536ecd79724b553f0acf054",
    "6536ecd89724b553f0acf056"]
    const blogPosts = [
        "6535d58392fe0fe231f83764",
        "6536c85ec62fa1a572da559c",
        "6536f12997f039d82e68d680",
        "6536f7e43f7354b8167cff55",
        "6536f7e43f7354b8167cff5a",
        "6536f7e43f7354b8167cff5c",
        "6536f7e43f7354b8167cff5e",
        "6536f7e43f7354b8167cff60",
        "6536f7e43f7354b8167cff62",
        "6536f7e43f7354b8167cff64",
        "6536f7e43f7354b8167cff66",
        "6536f7e43f7354b8167cff68",
        "6536f7e43f7354b8167cff6a",
        "6536f7e43f7354b8167cff6c",
        "6536f7e43f7354b8167cff6e",
        "6536f7e43f7354b8167cff70",
        "6536f7e43f7354b8167cff72",
        "6536f7e43f7354b8167cff74",
        "6536f7e43f7354b8167cff76",
        "6536f7e43f7354b8167cff78",
        "6536f7e43f7354b8167cff7a",
        "6536f7e43f7354b8167cff7c",
        "6536f7e43f7354b8167cff7e",
        "6536f7e43f7354b8167cff80",
        "6536f7e43f7354b8167cff82",
        "6536f7e43f7354b8167cff84",
        "6536f7e43f7354b8167cff86",
        "6536f7e43f7354b8167cff88",
        "6536f7e43f7354b8167cff8a",
        "6536f7e43f7354b8167cff8c",
        "6536f7e43f7354b8167cff8e",
        "6536f7e43f7354b8167cff90",
        "6536f7e43f7354b8167cff92",
        "6536f8475f4bfe4d4e25faaa",
        "6536f8475f4bfe4d4e25faaf",
        "6536f8475f4bfe4d4e25fab1",
        "6536f8475f4bfe4d4e25fab3",
        "6536f8475f4bfe4d4e25fab5",
        "6536f8475f4bfe4d4e25fab7",
        "6536f8475f4bfe4d4e25fab9",
        "6536f8475f4bfe4d4e25fab1",
        "6536f8475f4bfe4d4e25fab3",
        "6536f8475f4bfe4d4e25fab5",
        "6536f8475f4bfe4d4e25fab7",
        "6536f8475f4bfe4d4e25fab9",
        "6536f8475f4bfe4d4e25fabb",
        "6536f8475f4bfe4d4e25fabe",
        "6536f8475f4bfe4d4e25fac0",
        "6536f8475f4bfe4d4e25fac2",
        "6536f8475f4bfe4d4e25fac4",
        "6536f8475f4bfe4d4e25fac6",
        "6536f8475f4bfe4d4e25fac8"
      
      ];
    

// Function to create a random comment with random User and Blog IDs
async function createRandomComment() {
  const randomComment = starWarsComments[Math.floor(Math.random() * starWarsComments.length)];
  const randomUser = users[Math.floor(Math.random() * users.length)];
  const randomBlog = blogPosts[Math.floor(Math.random() * blogPosts.length)];

  const comment = new Comment({
    comment: randomComment,
    commenterName: randomUser,
    blog: randomBlog,
    // You can add relevant tags
  });

  await comment.save();
  return comment;
}

// Create 30 random comments
async function createRandomComments() {
  const comments = [];

  for (let i = 0; i < 30; i++) {
    const comment = await createRandomComment();
    comments.push(comment);
  }

  return comments;
}

// Usage: Call createRandomComments() to generate comments and push them into the users and blogPosts arrays.
createRandomComments()
  .then((comments) => {
    console.log('Random comments created:', comments);
    // Now, the comments have random User and Blog IDs assigned from the provided arrays.
  })
  .catch((error) => {
    console.error('Error creating random comments:', error);
  });
