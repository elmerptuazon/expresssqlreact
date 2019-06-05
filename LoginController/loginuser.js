const MYSQL = require('mysql');
const SETTINGS = require('.././settings.json');
const DB = MYSQL.createConnection(SETTINGS);

var getUserCredentials;

//check if db has been disconnected
DB.connect(function(err) {
  if(err) throw err;
  console.log('DB Connected');
})

function showName(login, pass) {
//sample query builder
  DB.query('select * from users where username= ? AND password= ?',[login,pass], (err, results) => {
    if(err) { console.log(err)
    }else {
      getUserCredentials =  results;
    }
  });

  return getUserCredentials;
}

module.exports = {
  userCredentials: function(req, res) {
    var username = "admin";
    var password = "admin";
 
    var name = showName(username, password);
    
    return res.render('.././views/Main/home', {
      data: name
    });
    
    

    // return res.send(getUserCredentials);
  }
};
