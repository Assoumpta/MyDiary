import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../Server/index';


chai.use(chaiHttp);


describe('User should get all entries', () => {
    it('GET /Users should get all entries', function (done) {
        chai
        .request(app)
        .get('/api/v1/entries')
        .end(function (err, res) {
          expect(res).to.have.status(200);
         expect(err).to.be.null;
          expect(res.body).to.be.an('object');
          expect(res.body.message).not.to.be.null;
          expect(res.status).to.equals(200);
          
          done();
        });
      });
   
    });


  describe('User should get specific entry by Id', () => {
    it('GET /User should get specific entry by Id', function (done) {
      const id = 1;
      chai
        .request(app)
        .get('/api/v1/entries/1')
      
        .end(function (err, res) 
        {
         
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.status).to.equals(200);
     
           done();
         });
        });
        it('GET /User should not get specific entry by Id if ID does not exist', function (done) {
         
          chai
            .request(app)
            .get('/api/v1/entries/5')
          
            .end(function (err, res) {
              expect(res).to.have.status(404);
              
         
               done();
             });
            });
      }); 
      describe('User should add new entry ', () => {
        it('POST /User should add new entry with title and description', function (done) {
          
          chai
            .request(app)
            .post('/api/v1/entries')
             .send('title,description')
            .end(function (err, res) {
              
              expect(res).to.have.status(500);
              expect(res.body).to.be.an('object');
              expect(res.body.title).not.to.be.null;
              expect(res.body.description).not.to.be.null;
              expect(res.status).to.equals(500);
             
              
               done();
             });
            });
            it('POST /User should add new entry', function (done) {
          
              chai
                .request(app)
                .post('/api/v1/entries')
                .send('title,description')
                .end(function (err, res) {
                  
                  expect(res).to.have.status(500);
              
         
                   done();
                 });
                });
          });

          describe('User can modify entry ', () => {
            it('PUT /User can modify entry', function (done) {
              
              chai
                .request(app)
                .put('/api/v1/entries/:id')
                 
                .end(function (err, res) {
                  
                  expect(res).to.have.status(400);
                  expect(res.status).to.equals(400);
                  expect(res.body).to.be.an('object');
                  expect(res.body.title).not.to.be.null;
                  expect(res.body.description).not.to.be.null;
                   done();
                 });
                });
              });
              describe('User can delete entry by ID', () => {
                it('DELETE /User can delete entry by ID', function (done) {
                  
                  chai
                    .request(app)
                    .delete('/api/v1/entries/1')
                    .end(function (err, res) {
                      expect(res).to.have.status(200);
                      expect(res.status).to.equals(200);
                      expect(res.body).to.be.an('object');
                      done();
});
 });
 it('GET /User should not delete specific entry by Id if ID does not exist', function (done) {
         
  chai
    .request(app)
    .get('/api/v1/entries/5')
  
    .end(function (err, res) {
      expect(res).to.have.status(404);
      
 
       done();
     });
    });
 });
