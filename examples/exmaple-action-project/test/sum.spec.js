const { expect } = require("chai");
const { suma } = require("../src/sum");


describe('suma', () => {
  it('2 + 3 retorna 5', () => {
    expect(suma(2, 3)).to.equal(5)
  });
});