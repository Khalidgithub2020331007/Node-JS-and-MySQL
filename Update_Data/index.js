var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "school"
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/register.html');
});

app.post('/', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var number = req.body.number;
    // console.log(name, email, number);
    con.connect(function(error) {
        if (error) console.log(error);
        var sql = "INSERT INTO students(name,email,number) values('" + name + "','" +
            email + "','" +
            number + "');";
        console.log(sql);
        console.log("Insert");
        con.query(sql, function(error, result) {
            if (error) console.log(error);
            res.redirect('/students');
            // res.send('Student register succesfull' + result.insertId);
        });

    });


});
app.get('/students', function(req, res) {
    con.connect(function(error) {
        if (error) console.log(error);

        var sq = "select * from students;";

        con.query(sq, function(error, result) {
            if (error)
                console.log(error);
            res.render(__dirname + '/students', { students: result });

        });
    });
});
app.listen(7000);
app.get('/delete-student', function(req, res) {
    con.connect(function(error) {
        if (error) console.log(error)

        var sql = "delete from students where id=?";
        id = req.query.id;

        con.query(sql, [id], function(error, result) {
            if (error) console.log(error);
            res.redirect('/students')
        });
    });
});
app.get('/update-student', function(req, res) {
    con.connect(function(error) {
        if (error) console.log(error)

        var sql = "select * from students where id=?";
        console.log(sql);


        id = req.query.id;
        console.log(id)

        con.query(sql, [id], function(error, result) {
            if (error) console.log(error);
            res.render(__dirname + '/update-student', { students: result });
        });
    });
});
app.post('/update-student', function(req, res) {
    var id = req.body.id;
    var name = req.body.name;
    var email = req.body.email;
    var number = req.body.number;

    console.log(`id`, id);

    con.connect(function(error) {

        if (error) console.log(error)

        var sql = "update students set name=?, email=?, number=? where id=?";
        con.query(sql, [name, email, number, id], function(error, result) {
            if (error) console.log(error)
            res.redirect('/students');
            console.log(name, email, number, id);
            console.log(sql);
        })
    });
});