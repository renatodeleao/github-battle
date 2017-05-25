export function fadeDaShitOutOfAnElement(oGajoQueServeDeFeidePoint, oGajoQueSeFeida, magicOffset, breakpoint) {
	/*
		cache variables for lightnight fast operations
	*/
	var vw = document.documentElement.clientWidth; //viewport width
	var vh = document.documentElement.clientHeight; //viewport height

	var _oGajoQueServeDeFeidePoint = document.querySelector(oGajoQueServeDeFeidePoint) || null; // pode ser util 
	var _osGajosQueSeFeidam = document.querySelectorAll(oGajoQueSeFeida); // because can be more than one
	var _magicOffset = magicOffset || 0;
	var _breakpoint = breakpoint || null;
	var scrollTop =  0;
    var scrollBottom = 0;
    var fade_points = Array.from(_osGajosQueSeFeidam).map((point) => point.offsetTop + _magicOffset); // 
    //perf
    var ticking = false;

    function handleThaFade(){
    	ticking = false;
    	scrollBottom = scrollTop + vh;

    	// for each trigger point on our array let's check if scrollBottom has reached it
    	fade_points.forEach((point,index) => {
    		if (scrollBottom >= point){
	    		console.log('ui tá todo lá dentro')
	    		if (!_osGajosQueSeFeidam[index].classList.contains('faded-in')) {
	    			_osGajosQueSeFeidam[index].classList.add('faded-in')
	    		}
		    }
		 	else{
		    	console.log('oops saiu, sry')
		    	if (_osGajosQueSeFeidam[index].classList.contains('faded-in')) {
		       		_osGajosQueSeFeidam[index].classList.remove('faded-in')
		   		}
		    }
    	})
    }

    function updateViewPortDimensions(){
		vw = document.documentElement.clientWidth; //viewport width
		vh = document.documentElement.clientHeight; //viewport height
	}



    // RAF STUFF
    function onScroll(e){
    	// update scroll position
    	scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    	requestTick();
    }

	function requestTick() {
	    if(!ticking) {
	        requestAnimationFrame(handleThaFade);
	    }
	    ticking = true;
	}


	// Attach events
	function attatchEvents(){
		window.addEventListener('scroll', onScroll, false);
		window.addEventListener('resize', onScroll, false);
		window.addEventListener('resize', updateViewPortDimensions, false);	
	}


	// initialize
	function init() {
		handleThaFade();
		attatchEvents();
	}

	init();
}




