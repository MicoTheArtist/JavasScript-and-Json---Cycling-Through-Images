// variables
var request = new XMLHttpRequest();

// utilities

// listeners, main
function list() {
	request.open('GET', 'data.json');
	request.onreadystatechange = function() {
		if ((request.readyState === 4) && (request.status === 200)) {
			var info = JSON.parse(request.responseText);
			console.log(info);
			
			var output = '';
			for (var i=0; i<info.links.length; i++) {
				for (var key in info.links[i]) {
					if (info.links[i].hasOwnProperty(key)) {
						output += '<li>';
						output += '<a href="'+info.links[i][key]+'">'+key+'</a>';
						output += '</li>';
					}
				}
			}
			var update = document.getElementById('links');
			update.innerHTML = output;
		}
	}
	request.send();
}

// init
function init() {
	list();	
}

window.addEventListener('load', init, false);