const express = require('express')
const router = express.Router()
const models = require('./models')
const user = models.user
const ambulance = models.ambulance

router.get('/ambulance', function(req, res) {
    ambulance.find()
    .then(function(data) {
        return res.json({ok:true, data})
    })
})

router.post('/ambulance', function (req, res) {
    if(!req.body.name || !req.body.driver.name || !req.body.driver.phone) {
        return res.json({ok:false, err: "Insufficient arguments"})
    }
    ambulance.create({
        name: req.body.name,
        driver: {
            name: req.body.driver.name,
            phone: req.body.driver.phone
        },
        booked: false
    })
    .then(function(data) {
        return res.json({ok: true, data})
    })
})

router.delete('/ambulance', function (req, res) {
    if(!req.body._id) {
        return res.json({ok:false, err: "_id is necessary"})
    }
    ambulance.remove({_id: req.body._id})
    .then(function(data) {
        return res.json({ok: true, data})
    })
})

router.put('/ambulance', function(req, res) {
    if(!req.body._id) {
        return res.json({ok:false, err: "_id is necessary"})
    }
    let updatedAmbulance = {}
    if(req.body.name) updatedAmbulance.name = req.body.name
    if(req.body.driver && req.body.driver.name) updatedAmbulance.driver.name = req.body.driver.name
    if(req.body.driver && req.body.driver.phone) updatedAmbulance.driver.phone = req.body.driver.phone
    updatedAmbulance.booked = req.body.booked === true ? true : false
    ambulance.updateOne({_id: req.body._id}, updatedAmbulance)
    .then(function(data) {
        return res.json({ok: true, data})
    })
})

module.exports = router
