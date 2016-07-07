
var express = require('express');
var router = express.Router();


router.get('/info', function(req, res, next) {
    res.json({
        lname: 'Tagra',
        fname: 'Ronald',        
    });
});

module.exports = router;