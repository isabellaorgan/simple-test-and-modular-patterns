#!/usr/bin/env node

var greet = require(__dirname + '/lib/greet');
var bin = exports = module.exports = function() {
	console.log(greet(process.argv[2] || 'anonymous'));
	return greet(process.argv[2] || 'anonymous');
};
bin();