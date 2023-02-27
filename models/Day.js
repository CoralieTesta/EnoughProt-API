const mongoose = require('mongoose')
const daySchema = mongoose.Schema({
    email: {type: String, required : true},
    date: {type: String, required : true},
    food: [{
        name : String,
        quantity : String,
        quantityProtein : Number
    }]
})

module.exports = mongoose.model('Day', daySchema)