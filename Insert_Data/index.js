var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "collage"
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/register.html');
});
app.listen(7000);
app.post('/', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var number = req.body.number;
    // console.log(name, email, number);
    con.connect(function(error) {
        if (error) console.log(error);
        var sql = "INSERT INTO students(name,email,number) values('" + name + "','" +
            email + "','" +
            number + "')";
        con.query(sql, function(error, result) {
            if (error) console.log(error);
            res.send('Student register succesfull' + result.insertId);
        });

    });


});