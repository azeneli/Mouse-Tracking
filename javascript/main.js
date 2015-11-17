/* CURRENTLY IN: javascript/main.js */

(function(){ // protect da scope

	
	/**
	 * @type {number}
 	 * @temp
	 */
	
	var mouseX = 0	
		, mouseY = 0;

	/**
 	* When mouse moves it assings coordinates to var(s)
 	* @param {callback} cb - The callback that handles the response.
 	*/
 
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

	/**
	 *  @moveEl 
	 *	@description - func move the pos of the el according to mouse position
	 *	@para {el} - el that will be selected
	 *	@para {speed} - speed at which the el will be moved 
	 */

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

