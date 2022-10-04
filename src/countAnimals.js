const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const obj = {};

    species.forEach((elemento) => {
      obj[elemento.name] = elemento.residents.length;
    });

    return obj;
  }
  if ('sex' in animal) {
    return species.find((element) => element.name === animal.specie)
      .residents.filter((resident) => resident.sex === animal.sex).length;
  }
  return species.find((elemento) => elemento.name === animal.specie).residents.length;
}

module.exports = countAnimals;
