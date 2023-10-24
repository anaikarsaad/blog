// Define the predefined user IDs
const ids = [
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
    "6536ecd89724b553f0acf056"
  ];
  
  // Rest of your code remains the same
  const mongoose = require('mongoose');
  const {BlogSchema} = require('../../user/schema/schema_user_generation.ts'); 
  const Blog = mongoose.model('Blog', BlogSchema);

  
  // Connect to MongoDB
  mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
  
  // List of Star Wars character names
  const starWarsNames = [
    'Luke Skywalker',
    'Princess Leia',
    'Han Solo',
    'Chewbacca',
    'Darth Vader',
    'Yoda',
    'Obi-Wan Kenobi',
    'R2-D2',
    'C-3PO',
    'Leia Organa',
    'Lando Calrissian',
    'Padmé Amidala',
    'Mace Windu',
    'Qui-Gon Jinn',
    'Boba Fett',
    'Jabba the Hutt',
    'Count Dooku',
    'General Grievous',
    'Wicket W. Warrick',
    'Grand Moff Tarkin',
    'Dengar',
    'Salacious B. Crumb',
    'Nien Nunb',
    'Wedge Antilles',
    'Biggs Darklighter',
    'Admiral Ackbar',
    'Jango Fett',
    'Greedo',
    'Bib Fortuna',
    'Max Rebo',
    'Poe Dameron', // Added for a total of 30 names
  ];
  
  // List of tags
  const tags = ['Adventure', 'Sci-Fi', 'Action', 'Fantasy', 'Epic', 'Space', 'Heroic', 'Villainous', 'Classic', 'Galactic'];
  
  // Create sample blog posts with predefined user IDs
  async function createSampleBlogPosts() {
    const blogPosts = [];
    for (let i = 0; i < starWarsNames.length; i++) {
      const name = starWarsNames[i];
      const title = `The Adventures of ${name}`;
      const authorID = ids[i]; // Use the predefined user ID
  
      if (!authorID) {
        console.error(`Author ID not found for blog post ${title}`);
        continue; // Skip this iteration if the author ID is missing
      }
  
      const date = new Date();
      const tagIndex = i % tags.length;
      const tagsForPost = [tags[tagIndex]];
  
      // Generate a longer content with at least 500 words
      const content = generateLongContent();
  
      const blogPost = new Blog({ title, content, author: authorID, date, tags: tagsForPost });
      try {
        await blogPost.save();
        blogPosts.push(blogPost);
      } catch (error) {
        console.error('Error saving blog post:', error);
      }
    }
    return blogPosts;
  }
  
  
  // Helper function to generate longer content
  function generateLongContent() {
    let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend...`; // Add your content here
    // Repeat the content until it reaches at least 500 words
    while (loremIpsum.split(' ').length < 500) {
      loremIpsum += ` ${loremIpsum}`;
    }
    return loremIpsum;
  }
  
  // Create sample blog posts with predefined user IDs
  createSampleBlogPosts()
    .then((blogPosts) => {
      console.log('Sample blog posts created:', blogPosts);
    })
    .catch((error) => {
      console.error('Error creating sample blog posts:', error);
    });
  