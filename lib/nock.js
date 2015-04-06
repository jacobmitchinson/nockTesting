var http = require('http');

module.exports = function(callback) { 
  
  http.get('http://www.google.co.uk', function(res) {   
    var str = ''; 
    res.on('data', function(data) { str += data; });
    res.on('end', function() { 
      callback(str);
    });
  });

}; 

