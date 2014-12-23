var modernizr = require('modernizr');
modernizr.build(require('./config-all.json'), function (result) {
	console.log(result.code);
});
