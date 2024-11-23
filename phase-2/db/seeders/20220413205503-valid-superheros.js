'use strict';

const { Superhero } = require('../models');

// DON'T SPEND ALL YOUR TIME MAKING REAL SEED DATA!!!
// Try to just spend only 5 minutes to create the seed data for testing
// You do not need to put in real superhero data as values! The data values
// just need to make sense based from the migration and model files.

const validSuperheros = [
  {
    name: 'MILLY VANILLY',
    alias: 'Vanilly',
    affiliation: 'Avengers',
    heightCm: 170,
    isMutant: false,
    race: 'human',
    universe: 'Marvel',
    releaseYear: 1950,
  },
  {
    name: 'CLARK KENT',
    alias: 'Superman',
    affiliation: 'Justice League',
    heightCm: 200,
    isMutant: false,
    race: 'human',
    universe: 'DC',
    releaseYear: 1951,
  },
  {
    name: 'LOGAN HOWLETT',
    alias: 'Wolverine',
    affiliation: 'X-Men',
    heightCm: 150,
    isMutant: true,
    race: 'human',
    universe: 'Marvel',
    releaseYear: 1985,
  },
  {
    name: 'CHARLES XAVIER',
    alias: 'Professor X',
    affiliation: 'X-Men',
    heightCm: 165,
    isMutant: true,
    race: 'human',
    universe: 'Marvel',
    releaseYear: 1983,
  },
  {
    name: 'PETER PARKER',
    alias: 'Spiderman',
    affiliation: 'Avengers',
    heightCm: 160,
    isMutant: false,
    race: 'human',
    universe: 'Marvel',
    releaseYear: 1975,
  }
];


module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await Superhero.bulkCreate(validSuperheros, {
        validate: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async down(queryInterface, Sequelize) {
    for (let superheroInfo of validSuperheros) {
      try {
        await Superhero.destroy({
          where: superheroInfo
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  },
  // DO NOT MODIFY BELOW (for testing purposes):
  validSuperheros,
};
