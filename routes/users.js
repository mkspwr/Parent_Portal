var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log("first level users");
});

router.get("/getuser", (req, res) => {
    console.log(req.body);
    User.findOne({email: req.body.email}).then((user) => {
        if(user){
            return res.status(200).json({ user: user });
        }
    })
  })

module.exports = router;