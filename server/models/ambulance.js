const mongoose = require("mongoose")

var ambulance = mongoose.model('ambulance', ambulanceSchema)

var ambulanceSchema = new mongoose.Schema({
    name: String,
    driver: {
        name: String,
        phone: String
    },
    booked: Boolean
})

ambulanceSchema.index({booked: 1})

module.exports = {
    ambulance
}