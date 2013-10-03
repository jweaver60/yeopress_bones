require.config({
	"baseUrl": "<%= userInput.contentDir %>/themes/<%= userInput.themeDir %>/js",
	"paths": {
		"jquery": "libs/jquery/jquery"
	}
});

require(['jquery'], function($) {
	console.log('Working!!');
});