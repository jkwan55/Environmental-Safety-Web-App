/**
 * The routing file for the /results URL, which process all of its HTTP requests
 */
const router = require('express').Router();

/** Import issues module */
const search = require('../controllers/search');

/**
 * The GET mehtod for results.html
 * 
 * After redirecting from a POST request through a search bar, this method calls
 * search.issues, which will take the search term from the request's body and 
 * query the database. The relevant search result is then rendered to results.html
 */
router.get('/', search.issues, function(req, res) {
    let searchResults = req.body.searchResults;
    let authenticated = false;
    if (req.session.userEmail) {
        authenticated = true;
    }

    
    res.render('results.html', {
        searchResultsLength : searchResults.length,
        searchTerm : req.searchTerm,
        searchResults : searchResults,
        category : req.category,
        authenticated: authenticated
    });
});

module.exports = router;