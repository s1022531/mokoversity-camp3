
/*
 * GET users listing.
 */
var scores = [];
exports.list = function(req, res){
  res.send("respond with a resource");
 };

exports.save = function(req, res){
	scores.push(req.query.scores: " + req.url"); // p.43
  console.log("Your scores: " + scores"); 
};