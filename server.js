
const express = require('express');
const app = express();
const mysql = require("mysql");
const path = require("path");

const bdd = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database : "tuto_mysql",
    port: 3306,
})


app.get("/", (req, res)=>{
res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/users", (req, res) =>{
    bdd.connect(function(err) {
        if (err) throw err;
        bdd.query("SELECT * FROM users", function (err, result) {
          if (err) throw err;
          console.log(result);

    res.send(result);
        });
      });
})

app.listen(5500, () => {
    console.log("server running on port 5500");       //npm run dev pour lancer le server
})