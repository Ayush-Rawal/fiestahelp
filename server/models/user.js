const mongoose = require("mongoose")

var user = mongoose.model('user', userSchema)

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
})

module.exports = {
    user
}