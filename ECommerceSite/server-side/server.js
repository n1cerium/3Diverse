//import necessary module
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path")

const app = express();
// to use the cors for the app
app.use(cors());
//gets the data from the front end and parse them to json
app.use(express.json())
//using the path of the public directory for deployment
app.use(express.static(path.join(__dirname + "/public")))

//create a connection to the RDS (Relational Database Service)
const db = mysql.createConnection( {
    connectionLimit: 10,
    host: "database-1.cha9each1rtw.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "adminroot",
    database: "ecommerce"
})

// using post method to get the data from the ../signup page that was passed in axios post method
//this method will check for existing user, if the user already exist it will not let the user sign up; otherwise, they will get to register
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
//this will check for correct email and password
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
//this insert the items to the item table
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
// this will handle giving data or items to the front end based on the user
// will return the item that they put on the cart
app.post('/cart', (req, res) => {
    const sql = "Select `Item ID`, `Name`, `Price` FROM item WHERE `User` = ?";
    const value = [
        req.body.c_User
    ]
    db.query(sql, value, (err, data) => {
        return res.json(data);
    })
})
//this will remove all items from the database once the user has complete their payment/transcation
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
//process.env.port is used for the deployment in heroku
//so whatever that is , it will listen to that port; otherwise, the server will listen to 8080
app.listen(process.env.PORT || 8080, ()=>{
    console.log("listening");
})