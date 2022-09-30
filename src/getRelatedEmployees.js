const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  return employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const elementos = employees.filter((elemento) => elemento.managers.includes(managerId));
    const nomes = elementos.map((gerente) => `${gerente.firstName} ${gerente.lastName}`);
    return nomes;
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
