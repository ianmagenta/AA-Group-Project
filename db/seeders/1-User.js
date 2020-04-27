'use strict';
const bcrypt = require("bcryptjs");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        userName: 'JoSmi',
        password: bcrypt.hashSync('P@ssw0rd', 10),
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@smith.com',
        bio: 'Hi there, my name is John! I like to write stories!',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'Sean1',
        password: bcrypt.hashSync('P@ssw0rd2', 10),
        firstName: 'Sean',
        lastName: 'M',
        email: 'sean@test.com',
        bio: 'Hi there, my name is Sean!',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'Andras1',
        password: bcrypt.hashSync('P@ssw0rd3', 10),
        firstName: 'Andras',
        lastName: 'S',
        email: 'ian@test.com',
        bio: 'Hi there, my name is Andras!',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'Ian1',
        password: bcrypt.hashSync('P@ssw0rd4', 10),
        firstName: 'Ian',
        lastName: 'M',
        email: 'andras@test.com',
        bio: 'Hi there, my name is Ian!',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'edGR',
        password: bcrypt.hashSync('P@ssw0rd5', 10),
        firstName: 'Edgar Allen',
        lastName: 'Poe',
        email: 'edgar@poe.com',
        bio: 'I brood in the darkness.',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'JnAn',
        password: bcrypt.hashSync('P@ssw0rd6', 10),
        firstName: 'Jane',
        lastName: 'Austin',
        email: 'jane@austin.com',
        bio: 'Boy, I sure do like writing!',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'FriskLunder',
        password: bcrypt.hashSync('P@ssw0rdLunder', 10),
        firstName: 'Frisk',
        lastName: 'Lunder',
        email: 'Frisk@Lunder.com',
        bio: "Hi there! My name is Frisk. I really enjoy writing stories and I hope you take the time to read them!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'OscarWilde',
        password: bcrypt.hashSync('P@ssw0rdWilde', 10),
        firstName: 'Oscar',
        lastName: 'Wilde',
        email: 'Oscar@Wilde.com',
        bio: "Hi there! My name is Oscar. I really enjoy writing stories and I hope you take the time to read them!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'MaryShelly',
        password: bcrypt.hashSync('P@ssw0rdShelly', 10),
        firstName: 'Mary',
        lastName: 'Shelly',
        email: 'Mary@Shelly.com',
        bio: "Hi there! My name is Mary. I really enjoy writing stories and I hope you take the time to read them!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'DanielDefoe',
        password: bcrypt.hashSync('P@ssw0rdDefoe', 10),
        firstName: 'Daniel',
        lastName: 'Defoe',
        email: 'Daniel@Defoe.com',
        bio: "Hi there! My name is Daniel. I really enjoy writing stories and I hope you take the time to read them!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'CharlotteGilman',
        password: bcrypt.hashSync('P@ssw0rdGilman', 10),
        firstName: 'Charlotte',
        lastName: 'Gilman',
        email: 'Charlotte@Gilman.com',
        bio: "Hi there! My name is Charlotte. I really enjoy writing stories and I hope you take the time to read them!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'JonathanSwift',
        password: bcrypt.hashSync('P@ssw0rdSwift', 10),
        firstName: 'Jonathan',
        lastName: 'Swift',
        email: 'Jonathan@Swift.com',
        bio: "Hi there! My name is Jonathan. I really enjoy writing stories and I hope you take the time to read them!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'CharlesDickens',
        password: bcrypt.hashSync('P@ssw0rdDickens', 10),
        firstName: 'Charles',
        lastName: 'Dickens',
        email: 'Charles@Dickens.com',
        bio: "Hi there! My name is Charles. I really enjoy writing stories and I hope you take the time to read them!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'ArthurDoyle',
        password: bcrypt.hashSync('P@ssw0rdDoyle', 10),
        firstName: 'Arthur',
        lastName: 'Doyle',
        email: 'Arthur@Doyle.com',
        bio: "Hi there! My name is Arthur. I really enjoy writing stories and I hope you take the time to read them!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'HermanMelville',
        password: bcrypt.hashSync('P@ssw0rdMelville', 10),
        firstName: 'Herman',
        lastName: 'Melville',
        email: 'Herman@Melville.com',
        bio: "Hi there! My name is Herman. I really enjoy writing stories and I hope you take the time to read them!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'RobertStevenson',
        password: bcrypt.hashSync('P@ssw0rdStevenson', 10),
        firstName: 'Robert',
        lastName: 'Stevenson',
        email: 'Robert@Stevenson.com',
        bio: "Hi there! My name is Robert. I really enjoy writing stories and I hope you take the time to read them!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'CarlLorem',
        password: bcrypt.hashSync('P@ssw0rdLorem', 10),
        firstName: 'Carl',
        lastName: 'Lorem',
        email: 'First@Lorem.com',
        bio: "Hi there! My name is Carl. I don't enjoy writing that much so many of my articles may have filler in them. Sorry about that!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'JessLorem',
        password: bcrypt.hashSync('P@ssw0rdLorem', 10),
        firstName: 'Jess',
        lastName: 'Lorem',
        email: 'Jess@Lorem.com',
        bio: "Hi there! My name is Jess. I don't enjoy writing that much so many of my articles may have filler in them. Sorry about that!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'StevenLorem',
        password: bcrypt.hashSync('P@ssw0rdLorem', 10),
        firstName: 'Steven',
        lastName: 'Lorem',
        email: 'Steven@Lorem.com',
        bio: "Hi there! My name is Steven. I don't enjoy writing that much so many of my articles may have filler in them. Sorry about that!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'MaryLorem',
        password: bcrypt.hashSync('P@ssw0rdLorem', 10),
        firstName: 'Mary',
        lastName: 'Lorem',
        email: 'Mary@Lorem.com',
        bio: "Hi there! My name is Mary. I don't enjoy writing that much so many of my articles may have filler in them. Sorry about that!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'JeffLorem',
        password: bcrypt.hashSync('P@ssw0rdLorem', 10),
        firstName: 'Jeff',
        lastName: 'Lorem',
        email: 'Jeff@Lorem.com',
        bio: "Hi there! My name is Jeff. I don't enjoy writing that much so many of my articles may have filler in them. Sorry about that!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'BarbraLorem',
        password: bcrypt.hashSync('P@ssw0rdLorem', 10),
        firstName: 'Barbra',
        lastName: 'Lorem',
        email: 'Barbra@Lorem.com',
        bio: "Hi there! My name is Barbra. I don't enjoy writing that much so many of my articles may have filler in them. Sorry about that!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'CarolLorem',
        password: bcrypt.hashSync('P@ssw0rdLorem', 10),
        firstName: 'Carol',
        lastName: 'Lorem',
        email: 'Carol@Lorem.com',
        bio: "Hi there! My name is Carol. I don't enjoy writing that much so many of my articles may have filler in them. Sorry about that!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'PaulLorem',
        password: bcrypt.hashSync('P@ssw0rdLorem', 10),
        firstName: 'Paul',
        lastName: 'Lorem',
        email: 'Paul@Lorem.com',
        bio: "Hi there! My name is Paul. I don't enjoy writing that much so many of my articles may have filler in them. Sorry about that!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'GeorgeLorem',
        password: bcrypt.hashSync('P@ssw0rdLorem', 10),
        firstName: 'George',
        lastName: 'Lorem',
        email: 'George@Lorem.com',
        bio: "Hi there! My name is George. I don't enjoy writing that much so many of my articles may have filler in them. Sorry about that!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'GuestUser',
        password: bcrypt.hashSync('P@ssw0rd', 10),
        firstName: 'Guest',
        lastName: 'User',
        email: 'guest@user.com',
        bio: "I am just looking around this website to see if I like it.",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
