const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // Import the bcrypt library
const { userSchema } = require('./schema_user_generation.ts'); // Import your user schema

// Connect to MongoDB
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', userSchema);

// Function to create a sample user with hashed password
async function createUser(username, email, password, date) {
  try {
    const saltRounds = 10; // Adjust the number of salt rounds as needed
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new User({ email, username, password: hashedPassword, date });
    await user.save();
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

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
  

  
  
 
  

// Create 30 sample users with hashed passwords
async function createSampleUsers() {
  const users = [];
  for (let i = 0; i < 30; i++) {
    const name = starWarsNames[i % starWarsNames.length];
    const username = name.replace(' ', '_').toLowerCase();
    const email = `user${i + 1}@example.com`;
    const password = 'password123'; // Replace with the desired password
    const user = await createUser(username, email, password, new Date());
    users.push(user);
  }
  return users;
}

// Create 30 sample users
createSampleUsers()
  .then((users) => {
    console.log('Sample users created:', users);
  })
  .catch((error) => {
    console.error('Error creating sample users:', error);
  });
