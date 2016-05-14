//server side test cases
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('phantomTest',function(){
    it('Parse single element without attributes');
    it('Parse multiple element without attributes');
    it('Parse single element with attributes');
    it('Parse multiple elements with attributes');
    it('Server response check',function(done){
      chai.request(server)
      .get("/")
      .end(function(err,res){
        res.should.have.status(200);
        done();
      })
    });
    
});
