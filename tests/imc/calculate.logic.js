var imcLogic = require('../../logic/imc');

function testCalculateImc() {
    // arrange
    var height = 1.90;
    var weight = 88.00;

    // act
    var imc = imcLogic.calculateImc(height, weight);

    // assert
    var result = imc === 24.38;
    console.log('resultado do teste calculateImc = ', result);
}

function testTranslateImc() {
    // arrange
    var imc = 24.38;

    // act
    var imcDesc = imcLogic.translateImc(imc);

    // assert
    var result = imcDesc === 'normal';
    console.log('resultado do teste translateImc = ', result);
}

testCalculateImc();
testTranslateImc();