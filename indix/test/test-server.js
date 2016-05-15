//server side test cases
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('phantomTest',function(){
    it('Parse single element without attributes', function(done){
      chai.request(server)
      .post("/processData")
      .send({"fine":{"objects":[{"css": ".brandname > a","attribute": "nothing","summary": "sample","name": ""}]}})
      .end(function(err,res){
        res.should.have.status(200);
        res.body.should.be.a('object')
        res.body.should.have.property('success')
        res.body.success.should.equal('done')

        done();
      })
    });
    it('Parse multiple element without attributes',function(done){
      chai.request(server)
      .post("/processData")
      .send({"fine":{"objects":[{"css": ".brandname > a","attribute": "nothing","summary": "sample","name": ""},{"css": ".pagetop > :nth-child(6)","attribute": "nothing","summary": "sample","name": ""},{"css": ".pagetop > :nth-child(7)","attribute": "nothing","summary": "sample","name": ""},{"css": ":nth-child(3) > .pagetop > a","attribute": "nothing","summary": "sample","name": ""}]}})
      .end(function(err,res){
        res.should.have.status(200);
        res.body.should.be.a('object')
        res.body.should.have.property('success')
        res.body.success.should.equal('done')
        done();
      })
    });
    it('Parse single element with attributes',function(done){
      chai.request(server)
      .post("/processData")
      .send({"fine":{"objects":[{"css": "a > img","attribute": "src","summary": "sample","name": ""}]}})
      .end(function(err,res){
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('success');
        res.body.success.should.equal('done')
        done();
      })
    });
    it('Parse multiple elements with attributes',function(done){
      chai.request(server)
      .post("/processData")
      .send({"fine":{"objects":[{"css": "a > img","attribute": "src","summary": "sample","name": ""},{"css": ".pagetop > :nth-child(2)","attribute": "href","summary": "sample","name": ""}]}})
      .end(function(er,res){
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('success');
        res.body.success.should.equal('done')
        done();
      })
    });
    it('Server response check',function(done){
      chai.request(server)
      .get("/")
      .end(function(err,res){
        res.should.have.status(200);
        done();
      })
    });
    it('Server angular route check',function(done){
      chai.request(server)
      .get("/#/home")
      .end(function(err,res){
        res.should.have.status(200);
        //shoulnt return 404;
        done();
      })
    })
    it('Server home id route check', function(done){
      chai.request(server)
      .get("/#/home/https://google.com")
      .end(function(err,res){
        res.should.have.status(200);
        done();
      })
    })

});
