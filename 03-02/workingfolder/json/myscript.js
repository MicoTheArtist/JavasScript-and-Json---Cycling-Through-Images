function dataHandler(info) {
	var output = '';
	console.log(info);
	
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