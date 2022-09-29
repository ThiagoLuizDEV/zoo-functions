const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, idade) {
  // seu código aqui
  return species.find(({ name }) => name === animal).residents.every(({ age }) => age >= idade);
}
module.exports = getAnimalsOlderThan;
