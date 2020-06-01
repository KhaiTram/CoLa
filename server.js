var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');



app.use(express.static(path.join(__dirname, '/dist/CoLA')));



app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname + '/dist/CoLA' });
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
        con.query("SELECT * FROM User", function (err, result) {
            if (err) throw err;

            res.send(result);
        });

        con.end();

    });
});

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

        con.query("SELECT * FROM Artikel", function (err, result) {
            if (err) throw err;

            res.send(result);
        });

        con.end();

    });
});

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

        con.query("SELECT * FROM Lagerbestand", function (err, result) {
            if (err) throw err;

            res.send(result);
        });

        con.end();

    });
});

app.listen(8080, function () {
    console.log('erfolg!');
});