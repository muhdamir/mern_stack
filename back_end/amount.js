const mongoose = require("mongoose");

// create schema 
let mongoSchema = mongoose.Schema

let amountSchema = new mongoSchema(
    {
        "name": String,
        "bells": Number,
        "whistles": Number
    }, {collection:"amount"}
)

// export mongoose model
module.exports = mongoose.model("amount", amountSchema)