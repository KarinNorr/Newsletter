var express = require('express');
var router = express.Router();
var fs = require('fs');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;


router.get('/login', function (request, response) {
    var html = '';
    html += "<body>";
    html += "<form action='/admin/helloAdmin' method='post' name='form1'>";
    html += "Namn: <input type='text' name='name'><br/>";
    html += "Lösenord: <input type='text' name='password'><br/>";
    html += "<input type='submit' value='Login'><br/>";
    html += "</form>";
    html += "</body>";
    response.send(html);
})

router.post('/helloAdmin', urlencodedParser, function (request, response) {

    var testName = "test";
    var testPass = "1234";

    if (request.body.name == testName && request.body.password == testPass) {

        var reply = '';
        reply += "<br/>Hello admin" + " " + request.body.name;
        reply += "<br/>Här nedan kan du se registrerade användare:";
        reply += "<br/>";

        fs.readFile("users.json", (err, data) => {
            if (err) throw err;
            var users = JSON.parse(data);
            console.log("Läst från fil");
            console.log(users);

            users.forEach(u => {
                reply += "<br/>" + u.userName;
            });

            reply += "<br/>";
            reply += "<br/>Följande e-postadresser vill ha nyhetsbrev: ";

                var subscribers = users.filter(u => u.isSubscriber === true);
                console.log("Lista med subscribers:");
                console.log(subscribers);
            
                subscribers.forEach(u => {
                    //reply += "<br/>" + u.userEmail;
                    reply +=  u.userEmail + ", ";
                });
        

            response.send(reply);
        })

    }
    else {
        //response.send("Lösenordet matchar inte");
        response.sendStatus(401);

    }

});




