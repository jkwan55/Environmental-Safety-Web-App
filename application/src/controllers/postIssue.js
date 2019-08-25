/*
	User related functions, login and registration. 

	Author: Jimmy Kwan and Vincent 
*/
const db = require('../models/database.js');
const bcrypt = require('bcrypt');
const fs = require('file-system');
const sharp = require('sharp');
// const multer = require('multer');
// const upload = multer({dest: '/uploads/'});

module.exports = {
	
	//user registration, grabs user input from the signUp page. 
	
	post : function (req, res, next) {
			
				//put name, email, and password into database
				let data = req.file;

    			data = new Buffer(String(data), 'base64')
    			let filename = new Date().toISOString().replace(/:/g, '-') + '.jpeg';

				sharp(req.file.path)
  				.rotate()
  				.resize(200)
  				.toBuffer()
  				.then( data => { 
					fs.writeFile(`./uploads/${filename}`, data, function(err) {
        				if (err) console.log(err);
    				})

				
					db.query('INSERT INTO Issue SET ?', {Park: req.body.park, Description: req.body.description,
				 		Category: req.body.category, Image: 'http://34.68.209.201:3000/uploads/' + filename,  Date: req.body.date, Status: "open"})
					.then(([result, _]) => {
						next();
					})
				
				.catch( err => {
					console.log(err);
				})
				
			});
		}
	}
