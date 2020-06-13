var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');
const bodyParser = require('body-parser');



app.use(express.static(path.join(__dirname, '/dist/CoLA')));
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname + '/dist/CoLA' });
});
//----------------USERS-METHODS---------------------------------------------------
app.put('/User', function (req, res) {
    var con = mysql.createConnection({
        database: "20_Gruppe1_DB",
        port: "20133",
        host: "195.37.176.178",
        user: "Gruppe1New",
        password: "Z$RrjuBp3Q'a;A;2fwZW4:A+Cxxo9gLd"
    });

    
    con.connect(function (err) {
        if (err) throw err;
        console.log("connected");

        var sql = "INSERT INTO User (Benutzername, Email, Passwort, Vorname, Nachname, Kapazitaet) VALUES (?,?,?,?,?)";
        var values = [[]];
        con.query(sql,[values], function (err, result) {
            if (err) throw err;

            res.send(result);
        });

        con.end();

    });
});

app.get('/Kategorien', function (req, res) {
    var con = mysql.createConnection({
        database: "20_Gruppe1_DB",
        port: "20133",
        host: "195.37.176.178",
        user: "Gruppe1New",
        password: "Z$RrjuBp3Q'a;A;2fwZW4:A+Cxxo9gLd"
    });

    
    con.connect(function (err) {
        if (err) throw err;
        console.log("connected");
        con.query("SELECT * FROM Produktkategorien", function (err, result) {
            if (err) throw err;

            res.send(result);
        });

        con.end();

    });
});


app.get('/Users', function (req, res) {
    var con = mysql.createConnection({
        database: "20_Gruppe1_DB",
        port: "20133",
        host: "195.37.176.178",
        user: "Gruppe1New",
        password: "Z$RrjuBp3Q'a;A;2fwZW4:A+Cxxo9gLd"
    });

    
    con.connect(function (err) {
        if (err) throw err;
        console.log("connected");
        var sql = "";
        con.query(sql, function (err, result) {
            if (err) throw err;

            res.send(result);
        });

        con.end();

    });
});
//----------------ARTICLE-METHODS---------------------------------------------------
app.get('/Artikel', function (req, res) {
    var con = mysql.createConnection({
        database: "20_Gruppe1_DB",
        port: "20133",
        host: "195.37.176.178",
        user: "Gruppe1New",
        password: "Z$RrjuBp3Q'a;A;2fwZW4:A+Cxxo9gLd"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("connected");

        var sql = "SELECT * FROM Artikel";
        con.query(sql, function (err, result) {
            if (err) throw err;

            res.send(result);
        });

        con.end();

    });
});
//----------------INVENTORY-METHODS---------------------------------------------------
app.get('/Lagerbestand', function (req, res) {
    var con = mysql.createConnection({
        database: "20_Gruppe1_DB",
        port: "20133",
        host: "195.37.176.178",
        user: "Gruppe1New",
        password: "Z$RrjuBp3Q'a;A;2fwZW4:A+Cxxo9gLd"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("connected");

        var sql = "SELECT * FROM Lagerbestand";
        con.query(sql, function (err, result) {
            if (err) throw err;

            res.send(result);
        });

        con.end();

    });
});



app.listen(8080, function () {
    console.log('erfolg!');
});