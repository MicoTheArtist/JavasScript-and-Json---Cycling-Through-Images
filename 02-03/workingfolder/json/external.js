// variables
var info = {
	"full_name" : "Ray",
	"title" : "Staff Author",
	"links" : {
		"blog" : "http://iviewsource.com",
		"facebook" : "http://iviewsource.com",
		"youtube" : "http://iviewsource.com",
		"podcast" : "http://iviewsource.com",
		"twitter" : "http://iviewsource.com"
	}
};

// utility

// listeners, main
function list() {
	var output = '';
	for (var key in info.links) {
		if (info.links.hasOwnProperty(key)) {
			output += '<li>';
			output += '<a href="'+info.links[key]+'">'+key+'</a>';
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