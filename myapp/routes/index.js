
var Backbone = require("backbone");
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.hello = function(req, res){
	//res.render('index', { title: 'Hello '+req.param("name", "-") });
	//var view = View().extend;
	var view = new Backbone.View();
	res.send(view);

};