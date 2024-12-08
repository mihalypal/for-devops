const request = require('supertest');
const express = require('express');
const app = require('../app'); // Adjust the path if necessary

describe('GET /', function() {
  it('should return 200 OK and contain the title "DevOps alapanyag"', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .expect(/DevOps alapanyag/, done);
  });
});

describe('GET /game', function() {
  it('should return 200 OK and contain the title "Tic-Tac-Toe"', function(done) {
    request(app)
      .get('/game')
      .expect(200)
      .expect('Content-Type', /html/)
      .expect(/Tic-Tac-Toe/, done);
  });
});