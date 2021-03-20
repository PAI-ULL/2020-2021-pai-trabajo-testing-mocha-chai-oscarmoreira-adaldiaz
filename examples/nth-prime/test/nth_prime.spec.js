const should =  require('chai').should();
const {expect } = require('chai');
const { prime } = require('../src/nth-prime.js');

describe('nth-prime', () => {
  it('first prime', () => {
    prime(1).should.equal(2);
  });
  
  it('second prime', () => {
    prime(2).should.equal(3);
  });
  
  it('sixth prime', () => {
    prime(6).should.equal(13);
  });
  
  it('there is no zeroth prime', () => {
    /* As we lose the context this when the function 
    is invoked by throw we have to somehow save the context. 
    There are two solutions: */

    // Encapsulate the function in another function
    // let err = () => { prime(0) }
    // err.should.throw('there is no zeroth prime');
    expect(() => prime(0)).to.throw('there is no zeroth prime');

    // Link the context (bind)
    // let err_2 = prime.bind(null,0);
    // expect(err_2).to.throw('there is no zeroth prime');
  });

  it('assert typeof', () => {
    assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
  });

  it('expect to be a', () => {
    expect({ tea: 'chai' }).to.be.a('object', 'we have an object');
  });

  // it('expect to be a', () => {
  //   expect({ tea: 'chai' }).to.be.a('Number', 'we expect an object');
  // });

  it('expect to be a', () => {
    expect({ tea: 'chai' }).to.be.a('object', 'we have an object');
  });
});