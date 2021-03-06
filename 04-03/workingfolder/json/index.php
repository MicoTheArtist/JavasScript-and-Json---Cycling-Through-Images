<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
	<title>JSON Carousel</title>
</head>
<body>

<div id="speakerbox">
	<a href="#" id="prev_btn">&laquo;</a>
    <a href="#" id="next_btn">&raquo;</a>
    <div id="carousel"></div>
</div>

<script id="speakerstpl" type="text/template">
	{{#speakers}}
		<div class="speaker">
			<img src="images/{{shortname}}_tn.jpg" alt="Photo of {{name}}">
			<h3>{{name}}</h3>
			<h4>{{reknown}}</h4>
			<p>{{bio}}</p>
		</div>
	{{/speakers}}
</script>

<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>	<!-- json -->
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery.cycle/2.9999.8/jquery.cycle.all.min.js"></script>	<!-- json cycle -->
<script src="//cdnjs.cloudflare.com/ajax/libs/mustache.js/0.7.0/mustache.min.js"></script>	<!-- json mustache -->

<script>
// variables
var request = new XMLHttpRequest();

// utility

// listeners, main
function list() {
	request.open('GET', 'data.json');
	request.onreadystatechange = function() {
		if ((request.readyState == 4) && (request.status === 200)) {
			var data = JSON.parse(request.responseText);
			console.log(data);
			console.log(request);
			
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
</script>

</body>
</html>