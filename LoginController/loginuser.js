module.exports = {
  userCredentials: function(req, res) {
    var username = "elmer";
    var password = "test";

    res.send(username + " " + password);
  }
};
