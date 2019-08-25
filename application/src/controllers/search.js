/**
 * Controller file for search of all tables
 * 
 * Author: Erick Velez
 */

const db = require('../models/database.js');

module.exports = {

    /** 
     * search is called by result.html's GET function, which is redirected to from every page
     * through the search bar
     * 
     * returns RESULTS, a collection of issues matching SEARCHTERM, within the body of the HTTP request
     * The HTTP request originates from the page that the search was submitted in.
     */
    issues : function (req, res, next) {
        //user's search term
        var searchTerm = req.query.search;
        console.log('in search', String(searchTerm));
        //user's selected category
        var category = req.query.category;

        let query = 'SELECT * FROM Issue INNER JOIN Park ON Issue.Park = Park.Id INNER JOIN Category ON Issue.Category = Category.Id';
        if (searchTerm != "" && category != "") {
            query = query.concat(` WHERE Category.Id= '` + category + `' AND (Issue.Description LIKE '%` + searchTerm + `%' OR Park.Location LIKE '%` + searchTerm + `%')`);
        } else if (searchTerm != "" && category == "") {
            console.log("Empty cat but search term present")
            query = query.concat(` WHERE Issue.Description LIKE '%` + searchTerm + `%' OR Park.Location LIKE '%` + searchTerm + `%'`)
        } else if (searchTerm == "" && category != "") {
            query = query.concat(` WHERE Category.Id = '` + category + `'`);
        }

        db.query(query, function (err, results, fields) {
            if (err) { //TODO: properly handle errors
                req.body.searchResults = "";
                req.body.searchTerm = "";
                req.body.category = "";
                next();
            }
            
            req.body.searchResults = results; //collection of issues
            req.body.searchTerm = searchTerm;
            req.body.category = category;
            next();
        });
    },

    parks : function (req, res, next) {
        let query = 'SELECT Location FROM Park'

        db.query(query, function (err, results, fields) {
            if (err) {
                req.body.searchResults = "";
                next();
            }

            req.body.searchResults = results;
            next();
        });
    }
};