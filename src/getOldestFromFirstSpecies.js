const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const colaborador = data.employees.find((employee) => employee.id === id);
  const primeiraEspecie = data.species.find((specie) => specie.id === colaborador
    .responsibleFor[0]);
  const Velhos = primeiraEspecie.residents.reduce((acc, curr) =>
    (acc.age > curr.age ? acc : curr));
  return Object.values(Velhos);
}

module.exports = getOldestFromFirstSpecies;
