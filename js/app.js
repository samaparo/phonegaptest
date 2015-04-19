var app = {
    // Application Constructor
    initialize: function() {
    	var initializeProcedure = (function(){
    		router.addRoute('', function() {
    			console.log('index');
  			});

  			router.addRoute('locations', function(id) {
  				console.log('locations');
  			});

  			router.addRoute('profile', function(id) {
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