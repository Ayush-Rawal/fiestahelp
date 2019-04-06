require("dotenv").config()
const express = require('express')
const router = express.Router()
const passport = require("passport")
const GithubStrategy = require('passport-github')
const LocalStrategy = require('passport-local').Strategy
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET
const user = require('./models').user

passport.use(new GithubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/cb"
}, function (accessToken, refreshToken, profile, cb) {
    console.log(profile)
    return cb(null, profile)
}))

router.get('/github', passport.authenticate('github'), function(req, res) {
    return res.json({data: res})
})

router.get('/github/cb',
  passport.authenticate('github'),
  function(req, res) {
      return res.json({ok:true, name: res.displayName})
  }
);

passport.use(new LocalStrategy(
    function(username, password, done) {
        user.findOne({
          username: username
        }, function(err, user) {
          if (err) {
            return done(err);
          }
  
          if (!user) {
            return done(null, false);
          }
  
          if (user.password != password) {
            return done(null, false);
          }
          return done(null, user);
        });
    }
));
  
router.post('/', passport.authenticate('local'), function(req, res) {
    return res.json({ok: true, name: req.user.username});
});

router.post('/register', function (req, res) {
    if(!req.body.name || !req.body.email || !req.body.password) {
        return res.json({ok:false, err: "Insufficient arguments"})
    }
    user.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone || "",
        isModerator: false
    })
    .then(function(data) {
        return res.json({ok: true, data})
    })
})

router.post('/register/moderator', function(req, res) {
    if(!req.body.name || !req.body.email || !req.body.password) {
        return res.json({ok:false, err: "Insufficient arguments"})
    }
    user.create({
        name: req.body.name,
        email: req.body.email,
        phone: "",
        password: req.body.password,
        isModerator: true
    })
    .then(function(data) {
        return res.json({ok: true, data})
    })
})

module.exports = router
