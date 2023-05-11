const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection( {
    host: "localhost",
    user: "root",
    password: "root",
    database: "ecommerce"
})

app.post('/signup', (req, res) => {
    const checkEmail = "SELECT `email` FROM users WHERE `email` = ?";
    db.query(checkEmail, [req.body.email], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0) {
            return res.json("Email Fail");
        }
        else {
            const checkPhone = "SELECT `phone number` FROM users WHERE `phone number` = ?";
            db.query(checkPhone, [req.body.phone], (err2, data2) => {
                if(err2) {
                    return res.json("Error");
                }
                if(data2.length > 0) {
                   return res.json("Phone Fail");
                } else {
                    const sql = "INSERT INTO users(`first name`, `last name`, `email`, `phone number`, `password`, `address line`, `city`, `state`, `country`, `zipcode`)" + 
                                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
                    const values = [
                        req.body.F_Name,
                        req.body.L_Name,
                        req.body.email,
                        req.body.phone, 
                        req.body.password,
                        req.body.address_line,
                        req.body.city,
                        req.body.state,
                        req.body.country,
                        req.body.zipcode
                    ]
                    db.query(sql, values, (err3, data3) => {
                        if(err3) {
                            return res.json("Error");
                        } else {
                            return res.json("Success");
                        }
                    })
                }
            })
        }
    })
})
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ?";
    const values = [
        req.body.email,
        req.body.password
    ]
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) {
            return res.json("Error");
        }if(data.length>0) {
            return res.json("Success");
        } else {
            return res.json("Failed");
        }
    })
})
app.post('/shop', (req, res) => {
        const sql = "INSERT INTO item(`User`, `Name`, `Description`, `Price`)" + 
                                "VALUES (?, ?, ?, ?)";
        const values = [
            req.body.c_User,
            req.body.i_Name,
            req.body.i_Description,
            req.body.i_Price
        ];
        db.query(sql, values, (err, data) => {
            if(err) {
                return res.json("Error");
            } else {
                return res.json("Success");
            }
        })
})

app.post('/cart', (req, res) => {
    const sql = "Select `Item ID`, `Name`, `Price` FROM item";
    db.query(sql, (err, data) => {
        return res.json(data);
    })
})
app.post('/CartRemove', (req, res) => {
    const sql = "DELETE FROM `item`";
    db.query(sql, (err, data) => {
        if(err) {
            return res.json("Error");
        } else {
            return res.json(data);
        }
    })
})
app.listen(8080, ()=>{
    console.log("listening");
})