var express = require('express');
var router = express.Router();

/* GET images page. */
router.get('/imagefeed', function(req, res) {
  var db = req.db;
    db.collection('images').find().toArray(function (err, items) {
        res.json(items);
    });
});

module.exports = router;