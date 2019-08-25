/**
 * Controller file for issues, including search and creation
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
    search : function (req, res, next) {
        //user's search term
        var searchTerm = req.query.search;
        console.log(String(searchTerm));
        //user's selected category
        var category = req.query.category;

        let query = 'SELECT * FROM Issue INNER JOIN Park ON Issue.Park = Park.Id INNER JOIN Category ON Issue.Category = Category.Id';
        if (searchTerm != null && category != null) {
            query = query.concat(` WHERE Category.Category_Name= '` + category + `' AND (Issue.Description LIKE '%` + searchTerm + `%' OR Park.Location LIKE '%` + searchTerm + `%')`);
        } else if (searchTerm != null && category == null) {
            query = query.concat(` WHERE Issue.Description LIKE '%` + searchTerm + `%' OR Park.Location LIKE '%` + searchTerm + `%'`);
        } else if (searchTerm == null && category != null) {
            query = query.concat(` WHERE Category.Category_Name = '` + category + `'`);
        }

        db.query(query, function (err, results, fields) {
            if (err) { //TODO: properly handle errors
                console.log(query);
                req.body.searchResult = "";
                req.body.searchTerm = "";
                req.body.category = "";
                console.log(err);
                next();
            }
            
            console.log(results);
            req.body.searchResult = results; //collection of issues
            req.body.searchTerm = searchTerm;
            req.body.category = category;
            next();
        });
    }
};