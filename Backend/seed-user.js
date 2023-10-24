db = connect('mongodb://localhost:27017/test');

// An array of Star Wars character names
const starWarsNames = [
  'Luke Skywalker', 'Princess Leia', 'Han Solo', 'Chewbacca', 'Obi-Wan Kenobi',
  'Darth Vader', 'Yoda', 'R2-D2', 'C-3PO', 'Lando Calrissian', 'Boba Fett', 'Rey',
  'Finn', 'Kylo Ren', 'Mace Windu', 'Padmé Amidala', 'Anakin Skywalker', 'Qui-Gon Jinn',
  'Jabba the Hutt', 'Emperor Palpatine'
];

const usersData = [];

// Generate sample users using Star Wars names
for (let i = 0; i < starWarsNames.length; i++) {
  usersData.push({
    "username": starWarsNames[i],
    "email": `user${i + 1}@example.com`,
    "password": "$2b$15$9gCJgnC64F8bdxAuE74BjeoQjimlUJc.Xtqv54KJPDmlnUvKLFI.y",
    "date": "2023-10-01"
  });
}

// Insert the sample users into the database
db.users.insertMany(usersData);
