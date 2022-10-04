const data = require('../data/zoo_data');

const { hours } = data;
const dias = Object.keys(hours).map((dia) => dia);
const animais = data.species.map((animal) => animal.name);
const fecha = Object.entries(hours).map((element) => element);

const ObjetoComParam = (elemento) => {
  const obj = {};

  if (elemento === 'Monday') {
    obj[elemento] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  } else if (dias.some((elementos) => elementos.includes(elemento))) {
    const hora = fecha.find((elements) => elements[0] === elemento);
    obj[elemento] = {
      officeHour: `Open from ${hora[1].open}am until ${hora[1].close}pm`,
      exhibition: data.species.filter((specie) => specie.availability
        .includes(elemento)).map((animal) => animal.name) };
  } else {
    return data.species.find((especie) => especie.name === elemento).availability.map((dia) => dia);
  }
  return obj;
};
const ObjetoSemParam = () => {
  const obj = {};

  fecha.forEach((elementos) => {
    if (elementos[0] !== 'Monday') {
      obj[elementos[0]] = {
        officeHour: `Open from ${elementos[1].open}am until ${elementos[1].close}pm`,
        exhibition: data.species.filter((specie) => specie.availability
          .includes(elementos[0])).map((dia) => dia.name),
      };
    } else {
      obj[elementos[0]] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    }
  });
  return obj;
};

const getSchedule = (scheduleTarget) => ((scheduleTarget === undefined || !([dias, animais]
  .some((element) => element
    .includes(scheduleTarget)))) ? ObjetoSemParam() : ObjetoComParam(scheduleTarget));

module.exports = getSchedule;
