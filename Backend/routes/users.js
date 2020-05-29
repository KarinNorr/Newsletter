var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readFile("users.json", (err, data) => {
    if(err) throw err; 
    var users = JSON.parse(data);
    res.send(users);
    console.log(users);

  })
  
});

/* POST user */
router.post('/newUser', function(request, response){
  fs.readFile("users.json", (err, data) => {
    if(err) throw err; 
    var users = JSON.parse(data);
    
    newUser = {
      "id": request.body.id,
      "userName": request.body.userName,
      "userEmail": request.body.userEmail,
      "subscribe": request.body.isSubscriber
    }

    users.push(newUser);
    var saveUsers = JSON.stringify(users, null, 2);
    fs.writeFile("users.json", saveUsers, (err, data) => {
        if(err) throw err;
    });

    response.send("Du är nu registrerad");
    //skicka tillbaks objektet istället
  })
  
});

    
  //kryptera lösenordet
  //kalla på metoden som krypterar lösenordet 
  //fånga informationen från ett formulär
  // Skickas med json til post
  //Kryptera lösenord innan spara
  //spara till users.json
  //writefile 
  //

  


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

//metod som krypterar password