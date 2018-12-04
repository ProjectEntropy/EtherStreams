var express = require('express');
var router = express.Router();

/* GET streams. */
router.get('/', function(req, res, next) {
  var data = ( 
    { 
      streams: [
      {
        title: "Test",
        magnet: "aslkdkalsjda"
      }
      ] 
    } 
  ) 

  res.status(200).send(data);
});

module.exports = router;
