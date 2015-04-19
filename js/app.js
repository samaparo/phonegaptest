var app = {
    // Application Constructor
    initialize: function() {
    	var initializeProcedure = (function(){

    		FastClick.attach(document.body);
    		var demoLabel = document.getElementById('demo-label');
    		router.addRoute('coupon', function() {
    			demoLabel.innerHTML = 'index';
  			});

  			router.addRoute('locations', function() {
  				demoLabel.innerHTML = 'locations';

  			});

  			router.addRoute('profile', function() {
  				demoLabel.innerHTML = 'profile';
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