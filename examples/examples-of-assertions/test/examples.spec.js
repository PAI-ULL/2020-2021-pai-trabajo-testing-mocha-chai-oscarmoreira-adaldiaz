const {assert, expect } = require('chai');
const { prime } = require('../../nth-prime/src/nth-prime.js');

describe('Examples of assertions', () => {
  describe('Typeof assertions examples', () => {
		it('assert typeof', () => {
      assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
    });
  
    it('expect to be a', () => {
      expect({ tea: 'chai' }).to.be.a('object', 'we have an object');
    });
  
    // it('Test fail. We expected an object', () => {
    //   expect({ tea: 'chai' }).to.be.a('Number', 'we expected an object');
    // });
  });

  describe('Length of assertions examples', () => {
		it('assert typeof', () => {
      assert.lengthOf([1, 2, 3], 3, 'we have a length of 3');
    });
  
    it('expect to be a', () => {
      expect([1, 2, 3]).to.have.lengthOf('3', 'we have a length of 3');
    });
  });

  describe('Throws assertions examples', () => {
		// it('Error. We lose the context', () => {
		// 	expect(prime(0)).to.throw('there is no zeroth prime');
		// });

    it('Encapsulate the function in another function', () => {
			expect(() => prime(0)).to.throw('there is no zeroth prime');
		});

		it('Link the context with bind', () => {
      expect(prime.bind(null,0)).to.throw('there is no zeroth prime');
		});

    it('Throw with assert', () => {
      assert.throws(() => prime(0), 'there is no zeroth prime');
    })
  });
});