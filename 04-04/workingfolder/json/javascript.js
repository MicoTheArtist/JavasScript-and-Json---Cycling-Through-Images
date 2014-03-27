// variables
var request = new XMLHttpRequest();

// utility

// listeners, main
function list() {
	request.open('GET', 'data.json');
	request.onreadystatechange = function() {
		if ((request.readyState === 4) && (request.status === 200)) {
			console.log(request);
			
			var data = JSON.parse(request.responseText);
			console.log(data);
			
			var template = document.getElementById('speakerstpl').innerHTML;
			var html = Mustache.to_html(template, data);
			document.getElementById('carousel').innerHTML = html;
			
			$('#carousel').cycle({
				fx: 'fade',
				pause: 1,
				next: '#next_btn',
				prev: '#prev_btn',
				speed: 500,
				timeout: 10000
			});
		}
	}
	request.send();
}

// init
function init() {
	list();
}

window.addEventListener('load', init, false);
