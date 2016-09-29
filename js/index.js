document.addEventListener("DOMContentLoaded", function(event) {
	lazyLoadImages('js__lazy-load');
});

function lazyLoadImages(target) {
	var images = document.getElementsByClassName(target);
	for (var i = 0; i < images.length; i++) {
		var dataSource = images[i].getAttribute('data-src');
		images[i].setAttribute('src', dataSource);
	}
}
