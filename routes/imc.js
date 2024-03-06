var imcLogic = require("../logic/imc");

var express = require("express");
var router = express.Router();

/* POST calculateImc. */
router.post("/calculate", function (req, res) {
    console.log("calculating ...");
    const { height, weight } = req.body;
    var imc = imcLogic.calculateImc(height, weight);
    var imcDescription = imcLogic.translateImc(imc);

    res.json({
        height,
        weight,
        imc,
        imcDescription,
    });
});

module.exports = router;
