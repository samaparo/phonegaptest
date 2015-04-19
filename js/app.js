var app = {
    // Application Constructor
    initialize: function() {
    	var initializeProcedure = (function(){
    		router.addRoute('', function() {
    			console.log('index');
  			});

  			router.addRoute('locations', function() {
  				console.log('locations');
  			});

  			router.addRoute('profile', function() {
  				console.log('profile');
  			});

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