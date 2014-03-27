// variables

// utility

// listeners, main
function list() {
	$.getJSON('data.json', function(data) {
		console.log(data);
		var output = '';
		for (var i=0; i<data.links.length; i++) {
			for (var key in data.links[i]) {
				if (data.links[i].hasOwnProperty(key)) {
					output += '<li>';					
					output += '<a href="'+data.links[i][key]+'">'+key+'</a>';
					output += '</li>';
				}
			}
		}
		var update = document.getElementById('links');
		update.innerHTML = output;
	});
}

// init
function init() {
	list();
}

window.addEventListener('load', init, false);