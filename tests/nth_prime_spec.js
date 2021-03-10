import chai from 'chai';
import { expect } from 'chai';
const should = chai.should();
import { prime } from '../src/nth-prime.js';

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
  
  it.skip('big prime', () => {
    prime(10001).should.equal(104743);
  });

  it('there is no zeroth prime', () => {
    /* As we lose the context this when the function 
    is invoked by throw we have to somehow save the context. 
    There are two solutions: */

    // Encapsulate the function in another function
    let err = () => { prime(0) }
    err.should.throw('there is no zeroth prime');
    expect(() => prime(0)).to.throw('there is no zeroth prime');

    // Link the context (bind)
    let err_2 = prime.bind(null,0);
    expect(err_2).to.throw('there is no zeroth prime');
  });
});