require("dotenv").config();

const user = process.env.USER;

const password = process.env.PASSWORD;

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");


const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: user,
    password: password,
    database: "videogamesdb"
});


db.connect(err => {
    if (err) throw err;
    console.log("Conectado ao banco de dados (mysql)");
});


app.get("/", (req, res) => {
    res.send("API Rodando");
});

app.listen(3000, ()=> {
    console.log("Porta 3000");
});


app.get("/get_videogames", (req, res) => {
    db.query("SELECT * FROM videogames", (err, result) => {
        if (err) return res.status(500).send(err);
        res.json(result);
    });
});

app.post("/create_videogame", (req, res) => {
    const newGame = req.body;

    if (newGame.rating > 5.0) return res.status(500).send("Avaliação máxima permitida é 5,0");

    db.query("INSERT INTO videogames (name, genre, rating, launchy_date, publisher, platforms, description) VALUES (?, ?, ?, ?, ?, ?, ?) ", [newGame.name, newGame.genre, newGame.rating, newGame.launchy_date, newGame.publisher, newGame.platforms, newGame.description], (err, result) =>{
        if (err) {
            if (err.code === "ER_DUP_ENTRY"){
                return res.status(409).send("Videogame já existe no banco de dados");
            }
            else {
                console.log(err);
                return res.status(500).send("Alguma coisa deu errado! Cheque os log para saber mais");
            }
        }

        res.status(200).send("Videogame inserido com sucesso!");
    });
    
});

app.put("/update_videogame/:id", (req, res) => {
    const id = req.params.id;
    if (id <= 0) return res.status(500).send("Id inválido");
    const newGame = req.body;

    if (newGame.rating > 5.0) return res.status(500).send("Avaliação máxima permitida é 5,0");
    
    db.query("UPDATE videogames SET name= ?, genre= ?, rating= ?, launchy_date= ?, publisher =?, platforms= ?, description= ? WHERE id= ?", [newGame.name, newGame.genre, newGame.rating, newGame.launchy_date, newGame.publisher, newGame.platforms, newGame.description, id], (err, result) =>{
        if (err) {
            console.log(err);
            return res.status(500).send("Alguma coisa deu errado! Cheque os log para saber mais");
        }

        if (result.affectedRows === 0) {
            return res.status(404).send("Videogame não encontrado");
        }

        res.status(200).send("Videogame atualizado com sucesso!");
    });
});

app.delete("/delete_videogame/:id", (req, res) => {
    const id = req.params.id;

    if (id <= 0) return res.status(500).send("Id inválido");
    
    db.query("DELETE FROM videogames WHERE id= ?", [id], (err, result)=>{
        if (err) {
            console.log(err);
            return res.status(500).send("Alguma coisa deu errado! Cheque os log para saber mais");
        }

        if (result.affectedRows === 0) {
            return res.status(404).send("Videogame não encontrado");
        }
        res.status(200).send("Videogame deletado com sucesso!");
    })
});