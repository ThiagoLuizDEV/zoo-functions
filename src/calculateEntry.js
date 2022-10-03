const data = require('../data/zoo_data');

const { prices } = data;
function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age > 0 && entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  return { child, adult, senior };
}
function calculateEntry(entrants) {
  // seu código aqui
  if (!(entrants) || Object.entries(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  const total = (child * prices.child) + (adult * prices.adult) + (senior * prices.senior);
  return total;
}

module.exports = { calculateEntry, countEntrants };
