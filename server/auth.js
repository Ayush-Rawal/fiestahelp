require("dotenv").config()
const express = require('express')
const router = express.Router()
const passport = require("passport")
const GithubStrategy = require('passport-github')
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET

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
      console.log(res)
  }
);

module.exports = router
