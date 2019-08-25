const router = require('express').Router();

router.get('/', function (req, res) {
    if (req.session.userEmail && req.cookies.sid) {
        res.clearCookie('sid');
        res.redirect(302, '/');
    }
});

module.exports = router;