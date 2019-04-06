const mongoose = require("mongoose")

var ambulanceSchema = new mongoose.Schema({
    name: String,
    driver: {
        name: String,
        phone: String
    },
    booked: Boolean
})

ambulanceSchema.index({booked: 1})

var ambulance = mongoose.model('ambulance', ambulanceSchema)

module.exports = {
    ambulance
}