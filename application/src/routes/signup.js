/**
 * Routing file for the /signup URL, which processes all of its HTTP requests
 * 
 * Author: Erick Velez
 */
const router = require('express').Router();
const auth = require('../middleware/cookieAuth');
const user = require('../controllers/user');

router.get('/', auth.authenticateUser, function(req, res) {
    res.render('signUp.html', {
        category: "" //Must render something for category, make it blank
    });
});

/** POST function for search */
router.post('/', function(req, res) {
    res.redirect(302, '/results');
});

/** POST function for signup */
router.post('/submit', user.register, function (req, res) {
    res.redirect(302, '/');
});

module.exports = router;
