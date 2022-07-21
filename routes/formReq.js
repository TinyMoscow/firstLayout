var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.post('/', function(req, res, next) {
    var saveString = `name:${req.body.name}|email:${req.body.email}|phone:${req.body.phone}\n`
    
    fs.appendFileSync("анкеты.txt", saveString);
    res.send('мы вам перезвоним');
 
});

module.exports = router;
