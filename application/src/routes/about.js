/**
 * Routing file for the /about URL, which processes all of its HTTP requests
 * 
 * Author: Erick Velez
 */
const router = require('express').Router();

router.get('/', function(req, res) {
    let authenticated = false;
    if (req.session.userEmail) {
        authenticated = true;
    }

    res.render('about.html', {
        authenticated: authenticated,
        category: "" //Must render something for category, make it blank
    });
});

router.get('/Erick', function(req, res) {
    res.sendFile('public/pages/Erick.html', {root: './' })
});

router.get('/Jack', function(req, res) {
    res.sendFile('public/pages/Jack.html', {root: './' })
});

router.get('/Vincent', function(req, res) {
    res.sendFile('public/pages/Vincent.html', {root: './' })
});

router.get('/Hector', function(req, res) {
    res.sendFile('public/pages/Hector.html', {root: './' })
});

router.get('/Kevin', function(req, res) {
    res.sendFile('public/pages/Kevin.html', {root: './' })
});

router.get('/Jimmy', function(req, res) {
    res.sendFile('public/pages/Jimmy.html', {root: './' })
});


module.exports = router;