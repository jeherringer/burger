var burger = require("../models/burger.js");
var express = require("express");
var app = express();

var controller = function(app) {
	app.get('/', function(req, res) {
		burger.all(function(data) {
			res.render("index", {
				burgers: data
			});
		});
	});

	app.post('/', function(req, res) {
		burger.new('burger_name', req.body.burger, function(data) {
			res.redirect('/');
			console.log(req.body.burger);
		});
	});

	app.put('/', function(req, res) {
		burger.devour('devoured', 1, 'id', req.body.id, function(data) {
			res.redirect('/');
		});
	});
};

module.exports = controller;