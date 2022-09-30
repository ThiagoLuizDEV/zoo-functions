const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toContain('Ilana');
  });
  test('a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  test('localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toMatch('NW');
  });
  test('popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  test('array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toContain('Tuesday');
  });
  test('é string ?', () => {
    expect(handlerElephants()).toBeUndefined();
  });
});
