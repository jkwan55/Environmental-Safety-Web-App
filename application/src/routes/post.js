/**
 * Routing file for the /post URL, which processes all of its HTTP requests
 */
const router = require('express').Router();

const postIssue = require('../controllers/postIssue');

const auth = require('../middleware/cookieAuth');

const multer = require('multer');
const upload = multer({dest: 'uploads/'});

router.get('/', function(req, res) {
    let authenticated = false;
    if (req.session.userEmail) {
        authenticated = true;
    }

    res.render('post.html', {
        authenticated: authenticated,
        category: "" //Must render something for category, make it blank
    });
});

/** POST function for search */
router.post('/', function(req, res) {
    res.redirect(302, '/results');
});

/** POST function for submitting post */
router.post('/submit', auth.authenticatePost, upload.single('image') , postIssue.post, function (req, res) {
    console.log("submitted post");
    res.redirect(302, '/');
});

module.exports = router;