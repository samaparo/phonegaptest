var app = {
    // Application Constructor
    initialize: function() {
    	var initializeProcedure = (function(){

    		FastClick.attach(document.body);
    		var slider = new PageSlider($('.content'));

    		router.addRoute('coupon', function() {
    			slider.slidePage($('<div><h1 class="demo-text">LATEST COUPON</h1></div>'));
    			$('.title').html('Latest Coupon');
    			$('.tab-item').removeClass('active');
    			$('.tab-item').eq(0).addClass('active');
  			});

  			router.addRoute('locations', function() {
  				slider.slidePage($('<div><h1 class="demo-text">LOCATIONS</h1></div>'));
  				$('.title').html('Store Locator');
  				$('.tab-item').removeClass('active');
    			$('.tab-item').eq(1).addClass('active');
  			});

  			router.addRoute('profile', function() {
  				slider.slidePage($('<div><h1 class="demo-text">PROFILE</h1></div>'));
  				$('.title').html('Your Profile');
  				$('.tab-item').removeClass('active');
    			$('.tab-item').eq(2).addClass('active');
  			});

  			router.load('coupon');
  			router.start();
    	});

    	if(window.cordova) {
        	document.addEventListener('deviceready', initializeProcedure, false);
    	} else {
    		window.addEventListener('load', initializeProcedure, false);
    	}
    }
};

app.initialize();