const {expect} = require('chai');
const {Rectangle} = require('../src/rectangle');

describe('Rectangle tests', () => {
  before(() => {
    const square = new Rectangle(10, 10);
  });
  
  it('Area of a square', () => {
    const square = new Rectangle(10, 10);
    expect(square.area).to.equal(100)
  });
  
  it('Area of a rectangle', () => {
    const rectangle = new Rectangle(10, 20);
    expect(rectangle.area).to.equal(200)
  });
});