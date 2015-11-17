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
	document.addEventListener('touchmove', function(e) {
    	e.preventDefault();
    	mouseX = e.pageX;
		mouseY = e.pageY;
	}, false);

	function moveDiv(el, speed) {
		var xp = 0
			, yp = 0;

		var loop = setInterval(function () {
			xp += (mouseX - xp) / speed;
			yp += (mouseY - yp) / speed;

			$(el).css({
					left:xp
					, top:yp
			});
		}, 30);
	}

	moveDiv( ".container__box", 30);


})();