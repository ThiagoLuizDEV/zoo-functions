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
  const { sex, specie } = animal;
  if (sex) {
    return species.find((element) => element.name === specie)
      .residents.filter((resident) => resident.sex === sex).length;
  }
  return species.find((elemento) => elemento.name === specie).residents.length;
}

module.exports = countAnimals;
