const express = require ("express");
const cors = require("cors");
const mysql = require("mysql2");   //since the security was compromised in mysql normal one 

const app = express ();

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user :"root",
    password: "root",
    database:"jyoti_project"
})

app.get("/",(req,res)=>{
    const sql = "SELECT * FROM jyoti_project.users;";
    db.query(sql, (err,data) => {
        if(err) 
             return res.json ("error");
        return res.json(data);    
    }
)
})


app.listen(8081, () =>{
    console.log("listening");
})