const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
let amount = require("./amount");

// create express app
let app = express()

// app.use(cors())
// connect to mongodb
// orm
mongoose.connect("mongodb://localhost:27017/test_db")
let db = mongoose.connection
// check if db connected
db.once("open", ()=> {
    console.log("mongodb connected")
})

// get api
app.get("/", (req, res) => {
    res.json({
        "message": "welcome to API"
    })
})

// list of all friends
app.get("/get/friends", (req,res) => {
    // {filter}
    amount.find({}, (error, data) => {
        if (error) {
            res.json.error(error)
        } else {
            res.json(data)
        }
    })
})

// add new friends
app.post("/get/friends", (req,res) => {
    console.log(req.body)
    res.json(req.body)
    /*
    let newFriend = new amount()
    newFriend.name = req.body.name
    newFriend.whistles = req.body.whitsles
    newFriend.bells = req.body.bells
    newFriend.save((err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    }) */
})

// make app listen to port 5000
app.listen(5000, () => {
    console.log("Listening to port 5000")
})