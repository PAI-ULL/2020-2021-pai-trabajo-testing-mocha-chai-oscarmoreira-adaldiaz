const {assert, expect } = require('chai');
const { prime } = require('../../nth-prime/src/nth-prime.js');

describe('Examples of test', () => {
  describe('Equals examples', () => {
    it('assert number 3 is equal a string 3', () => {
      assert.equal(3, '3');
    });
    
    it('assert 3 is equal 3', () => {
      assert.strictEqual(3, 3);
    });
    
    it('assert an array is deep equal another array', () => {
      assert.deepEqual([3, 4, 5, 6], [3, 4, 5, 6]);
    });
  
    it('expect number 3 is equal a number 3', () => {
      expect(3).to.equal(3);
    });
    
    it('expect 3 is eql 3', () => {
      expect(3).to.eql(3);
    });
    
    it('expect an array is deep equal another array', () => {
      expect([3, 4, 5, 6]).to.deep.equal([3, 4, 5, 6]);
    });
    
    it('expect an array is eql another array', () => {
      expect([3, 4, 5, 6]).to.eql([3, 4, 5, 6]);
    });
  });

  describe('Includes Examples', () => {
    it('assert 2 is in [1, 2, 3]', () => {
      assert.include([1, 2, 3], 2);
    });

    it('assert {foo: obj1, bar: obj2} include {foo: obj1}', () => {
      const obj1 = {a: 1};
      const obj2 = {b: 2};
      assert.include({foo: obj1, bar: obj2}, {foo: obj1});
    });

    // Error. Use to deepInclude
    it('assert {foo: obj1, bar: obj2} include {foo: {a: 1}}', () => {
      const obj1 = {a: 1};
      const obj2 = {b: 2};
      assert.include({foo: obj1, bar: obj2}, {foo: {a: 1}});
    });
    
    it('expect a sentence include a word', () => {
      expect('This is an example').to.include('example');
    });
    
    it('expect {foo: obj1, bar: obj2} include {foo: obj1}', () => {
      const obj1 = {a: 1};
      const obj2 = {b: 2};
      expect({foo: obj1, bar: obj2}).to.include({foo: obj1});
    });

    // Error. Use to to.deep.include
    it('expect {foo: obj1, bar: obj2} include {foo: {a: 1}}', () => {
      const obj1 = {a: 1};
      const obj2 = {b: 2};
      expect({foo: obj1, bar: obj2}).to.include({foo: {a: 1}});
    });    
  });

  describe('Typeof examples', () => {
		it('assert typeof', () => {
      assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
    });
  
    it('expect to be an', () => {
      expect({ tea: 'chai' }).to.be.an('object', 'we have an object');
    });
  });

  describe('Length of examples', () => {
		it('assert lengthof', () => {
      assert.lengthOf([1, 2, 3], 3, 'we have a length of 3');
    });
  
    it('expect to have lengthof', () => {
      expect([1, 2, 3]).to.have.lengthOf('3', 'we have a length of 3');
    });
  });

  describe('Throws examples', () => {
		it('Error. We lose the context', () => {
			expect(prime(0)).to.throw('there is no zeroth prime');
		});

    it('Encapsulate the function in another function', () => {
			expect(() => prime(0)).to.throw('there is no zeroth prime');
		});

		it('Link the context with bind', () => {
      expect(prime.bind(null,0)).to.throw('there is no zeroth prime');
		});

    it('Throw with assert', () => {
      assert.throws(() => prime(0), 'there is no zeroth prime');
    });
  });
});