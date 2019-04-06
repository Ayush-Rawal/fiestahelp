const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const passport = require("passport")
const path = require("path")
const mongoose = require("mongoose")
const cors = require("cors")
const auth = require("./server/auth")

app.use(cors())

mongoose.connect('mongodb://localhost:27017/fiesta', {useNewUrlParser: true})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("DB Connected")
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
app.use(session({secret: "Real Secret"}))

app.use(passport.initialize())
app.use(passport.session())

app.get("/", function (req, res) {
    return res.sendFile(path.resolve(__dirname, "./build/index.html"))
})

app.use('/auth', auth)

app.get("*", function (req, res) {
    return res.sendFile(path.resolve(__dirname, "./build/index.html"))
})

app.listen(process.env.port || 8080, () => console.log(`listening on ${process.env.port || 8080}`))