document.addEventListener("DOMContentLoaded", function(event) {
	// lazyLoadFonts();
	// lazyLoadImages('js__lazy-load');
});

function lazyLoadImages(target) {
	var images = document.getElementsByClassName(target);
	for (var i = 0; i < images.length; i++) {
		var dataSource = images[i].getAttribute('data-src');
		images[i].setAttribute('src', dataSource);
	}
}

function lazyLoadFonts() {
	var url = 'https://fonts.googleapis.com/css?family=IM+Fell+Great+Primer|Ramaraja';
	var rel = 'stylesheet';

	var fontsElement = document.createElement('link');
	fontsElement.setAttribute('href', url);	
	fontsElement.setAttribute('rel', rel);

	document.getElementsByTagName('head')[0].appendChild(fontsElement);

}
