/* CURRENTLY IN: javascript/main.js */

(function(){ // protect da scope

	// temp variables to hold mouse x-y pos
	var mouseX = 0	
		, mouseY = 0;

	// when mouse moves it assings coordinates to var(s)	
	$(document).on('mousemove', function(e) {
		mouseX = e.pageX;
		mouseY = e.pageY;
		console.log(mouseX, 'X');
		console.log(mouseY, 'Y');
	});	

	// add event listerner to observe mouse move
	// document.addEventListener('touchmove', function(e) {
 	// e.preventDefault();
 	// mouseX = e.pageX;
	// mouseY = e.pageY;
	// console.log(mouseY, 'here');
	// }, false);

	function moveEl(el, speed) {
		var pointX = 0
			, pointY = 0;

		var trackDiv = setInterval(function trackEl() {
			pointX += (mouseX - pointX) / speed;
			pointY += (mouseY - pointY) / speed;

			$(el).css({
				left: pointX
				, top: pointY
			});
		}, 30);
	}

	moveEl( ".js-track", 5);

})();

