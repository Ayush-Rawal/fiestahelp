const mongoose = require("mongoose")

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    isModerator: Boolean
})

var user = mongoose.model('user', userSchema)

module.exports = {
    user
}