var express = require('express');
var router = express.Router();
var fs = require('fs');
var CryptoJS = require('crypto-js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readFile("users.json", (err, data) => {
    if(err) throw err; 
    var users = JSON.parse(data);
    res.send(users);
    console.log(users);

  })
  
});

/* POST newUser */
router.post('/newUser', function(request, response){
  fs.readFile("users.json", (err, data) => {
    if(err) throw err; 
    var users = JSON.parse(data);
    
    var encryptedPassword = encryptPassword(request.body.userPassword);

    var newUser = {
      id: request.body.id,
      userName: request.body.userName,
      userEmail: request.body.userEmail,
      userPassword: encryptedPassword,
      isSubscriber: request.body.isSubscriber
    }

    console.log(newUser);

    users.push(newUser);
    var saveUsers = JSON.stringify(users, null, 2);
    fs.writeFile("users.json", saveUsers, (err, data) => {
        if(err) throw err;
    });

    response.send("Du är nu registrerad");
    //skicka tillbaks objektet istället
  })
  
});

function encryptPassword(userPassword)
{
  var passWordToCrypt = CryptoJS.AES.encrypt(userPassword, "Salt nyckel").toString();
  console.log("Krypterar lösenord");
  console.log(passWordToCrypt);
  return passWordToCrypt;
  
}

  


/* GET user */
// router.post('/', function(req, res){

//   //Fånga användare och lösenord från inloggning
//   //skickas med json 
//   //Jämför att lösenordet stämmer
//   //Visa inloggad 
//   //Vad blir svaret när det stämmer
//   //Svaret när det ej stämmer

// });


module.exports = router;

