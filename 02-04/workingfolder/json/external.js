// variables
var info = { 
	"full_name" : "Ray",
	"title" : "Staff Author",
	"links" : [
		{ "blog" : "http://iviewsource.com" },
		{ "facebook" : "http://iviewsource.com" },
		{ "podcast" : "http://iviewsource.com" },
		{ "twitter" : "http://iviewsource.com" },
		{ "youtube" : "http://iviewsource.com" }
	]
};

// utilities

// listeners, main
function list() {
	var output = '';
	for (var i=0; i<info.links.length; i++) {
		for (var key in info.links[i]) {
			output += '<li>';
			output += '<a href="'+info.links[i][key]+'">'+key+'</a>';
			output += '</li>';
		}
	}
	var update = document.getElementById('links');
	update.innerHTML = output;
}

// init
function init() {
	list();
}

window.addEventListener('load', init, false);