const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const url= '172.28.5.182:8085';

describe('Working app',()=>{
  it('We expect to have a status 200 so the web is deployed', (done) => {
    chai.request(url)
    .get('/')
    .end( function(err,res){
      console.log(res.body)
      expect(res).to.have.status(200);
      done();
    });
  });
});