// arrange
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://localhost:3000/imc/calculate',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "height": 1.9,
    "weight": 88
  })

};

// act
request(options, function (error, response) {
  if (error) throw new Error(error);
  // assert
  var body = JSON.parse(response.body);
  var result = body.imc === 24.38 && body.imcDescription === "normal";

  console.log('resultado do teste POST: <url>/imc/calculate = ', result);
});






