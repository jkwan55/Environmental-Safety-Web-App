
module.exports = {
    authenticateUser : function (req, res, next) {
        console.log("in cookie auth");
        if (req.session.userEmail && req.cookies.sid) {
            console.log("user logged in");
            res.redirect('/');
        } else {
            console.log("not logged in");
            next();
        }    
    },

    authenticatePost : function (req, res, next) {
        if (req.session.userEmail && req.cookies.sid) {
            next();
        } else {
            console.log("nog logged in, cannot post");
            res.redirect('/login');
        }
    }
}

