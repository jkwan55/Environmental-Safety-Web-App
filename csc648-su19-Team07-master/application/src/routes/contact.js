/**
 * Routing file for the /post URL, which processes all of its HTTP requests
 */

const router = require('express').Router();

router.get('/', function(req, res) {
    let authenticated = false;
    if (req.session.userEmail) {
        authenticated = true;
    }

    res.render('contact.html', {
        authenticated: authenticated,
        category: "" //Must render something for category, make it blank
    });
});

module.exports = router;