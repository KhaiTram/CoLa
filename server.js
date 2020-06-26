var express = require('express');
var app = express();
var path = require('path');
var mysql = require('mysql');
const bodyParser = require('body-parser');



app.use(express.static(path.join(__dirname, '/dist/CoLA')));
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname + '/dist/CoLA' });
});
//----------------USERS-METHODS---------------------------------------------------

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
        var sql = "SELECT * FROM User";
        con.query(sql, function (err, result) {
            if (err) throw err;

            res.send(result);
        });

        con.end();

    });
});

app.post('/Users', function (req, res) {
    var con = mysql.createConnection({
        database: "20_Gruppe1_DB",
        port: "20133",
        host: "195.37.176.178",
        user: "Gruppe1New",
        password: "Z$RrjuBp3Q'a;A;2fwZW4:A+Cxxo9gLd"
    });

    var User;
    req.on('data',function(data) {
        
        User= JSON.parse(data.toString()); 
        console.log(data.toString());
        console.log(User);
        const benutzername = User.Benutzername;
        const email = User.Email;
        const passwort = User.Passwort;
        const vorname = User.Vorname;
        const nachname  = User.Nachname;
    
    

        con.connect(function (err) {
            if (err) throw err;
            //Insert a record in the "customers" table:
            var post  = {Benutzername: benutzername, Email: email, Passwort: passwort, Vorname: vorname, Nachname: nachname};
            var sql = 'INSERT INTO User SET ?';

            con.query(sql,post, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
            });

            con.end();
        });
    });
});

app.put('/Users', function (req, res) {
    var con = mysql.createConnection({
        database: "20_Gruppe1_DB",
        port: "20133",
        host: "195.37.176.178",
        user: "Gruppe1New",
        password: "Z$RrjuBp3Q'a;A;2fwZW4:A+Cxxo9gLd"
    });

    var User;
    req.on('data',function(data) {
        
        User= JSON.parse(data.toString()); 
        const email = User.Email;
        const passwort = User.Passwort;
    
        con.connect(function (err) {
            if (err) throw err;

            //Update a record in the "customers" table:
            var beforeSql = 'UPDATE User SET Passwort = ? WHERE Email = ?';
            var inserts = [passwort, email];
            sql = mysql.format(beforeSql, inserts);

            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record updated");
            });

            con.end();
        });
    });
});

//-------------------CATEGORY-METHODS---------------------------------------------------

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
        con.query("SELECT * FROM Produktkategorie", function (err, result) {
            if (err) throw err;

            res.send(result);
        });

        con.end();

    });
});

app.get('/ProduktLager', function (req, res) {
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
        var sql = "SELECT * FROM Lagerbestand AS Lager INNER JOIN Artikel ON Lager.Artikel_Produktname = Artikel.Produktname"
        con.query(sql, function (err, result) {
            if (err) throw err;

            res.send(result);
        });

        con.end();

    });
});

//-------------------ARTICLE-METHODS---------------------------------------------------
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

//-------------------COMMENTS-METHODS------------------------------------------------

app.get('/Kommentar', function (req, res) {
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

        var sql = "SELECT * FROM Kommentar";
        con.query(sql, function (err, result) {
            if (err) throw err;

            res.send(result);
        });

        con.end();

    });
});

//-------------------INVENTORY-METHODS---------------------------------------------------

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
    console.log('Erfolg!');
});