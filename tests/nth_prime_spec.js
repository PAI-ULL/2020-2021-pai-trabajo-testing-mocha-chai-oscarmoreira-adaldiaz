import chai from 'chai';
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
  
    it('big prime', () => {
      prime(10001).should.equal(104743);
    });
  
    it('there is no zeroth prime', () => {
      prime(0).should.throw(Error('there is no zeroth prime'));
    });
  });