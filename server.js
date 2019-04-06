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
const api = require("./server/api")

app.use(cors())

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/fiesta', {useNewUrlParser: true})

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

passport.serializeUser(function(user, done) {
  done(null, user.name);
});

app.get("/", function (req, res) {
    return res.sendFile(path.resolve(__dirname, "./build/index.html"))
})

app.use('/auth', auth)
app.use('/api', api)

app.get("*", function (req, res) {
    return res.sendFile(path.resolve(__dirname, "./build/index.html"))
})

app.listen(process.env.PORT || 8080, () => console.log(`listening on ${process.env.PORT || 8080}`))