'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        userName: 'JoSmi',
        password: bcrypt.hashSync('P@ssw0rd', 10),
        firstName: 'John',
        lastName: 'Smith',
        emailAddress: 'john@smith.com',
        bio: 'falkjglterrweyhdkihfg;aslkfjd;othuj;orweurphf',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'JoSmi2',
        password: bcrypt.hashSync('P@ssw0rd2', 10),
        firstName: 'John2',
        lastName: 'Smith2',
        emailAddress: 'john@smith2.com',
        bio: 'falkjglterrweyhdkihfg;aslkfjd;othuj;orweurphf2',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'JoSmi3',
        password: bcrypt.hashSync('P@ssw0rd3', 10),
        firstName: 'John3',
        lastName: 'Smith3',
        emailAddress: 'john@smith3.com',
        bio: 'falkjglterrweyhdkihfg;aslkfjd;othuj;orweurphf3',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
