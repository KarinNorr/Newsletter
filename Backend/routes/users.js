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

/* POST newUser */
router.post('/tryUser', function(request, response) {

  fs.readFile("users.json", (err, data) => {
    if(err) throw err; 
    var users = JSON.parse(data);
    var user = users.find(u => u.userName == request.body.userName && u.userEmail == request.body.userEmail);

    console.log(user);
    console.log(user.userPassword);
    var decryptedPass = decryptPassword(user.userPassword);
    //var decryptedPass = CryptoJS.AES.decrypt(user.userPassword, "Salt nyckel").toString(CryptoJS.enc.Utf8);
    console.log("Loggar det dekrypterade lösenordet");
    console.log(decryptedPass);
    if (decryptedPass == request.body.userPassword)
    {
      response.send("Du är inloggad");
      //skicka tillbaks data
    }
    else {
      //response.send("Lösenordet matchar inte");
      response.sendStatus(401);

  }
    
  })


});


function encryptPassword(userPassword)
{
  var passwordToEncrypt = CryptoJS.AES.encrypt(userPassword, "Salt nyckel").toString();
  console.log("Krypterar lösenord");
  console.log(passwordToEncrypt);
  return passwordToEncrypt;
  
}
function decryptPassword(encryptetPassword)
{
  var decryptedPass = CryptoJS.AES.decrypt(encryptetPassword, "Salt nyckel").toString(CryptoJS.enc.Utf8);
  console.log("Dekrypterar lösenord");
  console.log(decryptedPass);
  return decryptedPass;
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

