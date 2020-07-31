var request = require('supertest');
var app = require('../index.js');

describe('GET /',()=>{
    it('Test response',(done)=>{
        request(app).get('/').expect('Hello world this is my first app',done)
    })
})