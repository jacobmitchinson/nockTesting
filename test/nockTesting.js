var nock = require('nock');
var expect = require('chai').expect;
var get = require('../lib/nock.js');

describe('nock', function() { 

  var google = nock('http://www.google.co.uk')
                .get('/')
                .reply(200, {
                  "success": "hi"
                });

  it('should stub an http request', function(done) {
    get(function(data) { 
      var json = JSON.parse(data);
      expect(json.success).to.equal('hi');
      done();
    });
  });

});