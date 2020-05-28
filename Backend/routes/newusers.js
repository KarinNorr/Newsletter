var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readFile("users.json", (err, data) => {
    if(err) throw err; 
    var users = JSON.parse(data);
    newUser = {
        "id": "3",
        "userName": "En Till",
        "userEmail": "till@mail.com",
        "subscribe": "false"
    }

    users.push(newUser);
    var saveUsers = JSON.stringify(users, null, 2);
    fs.writeFile("users.json", saveUsers, (err, data) => {
        if(err) throw err;
    });

    res.send("Ny användare sparad!");
  })
  
});

module.exports = router;
