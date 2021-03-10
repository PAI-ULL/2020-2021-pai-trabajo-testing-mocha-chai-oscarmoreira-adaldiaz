import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';

chai.use(chaiHttp);
const url= '10.6.129.63:8081';

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