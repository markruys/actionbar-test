function AppWindow(title) {
	var self = Ti.UI.createWindow({
		title: title + " (unused)"
	});
	
	var button = Ti.UI.createButton({
		top: '40dp',
		height: '44dp',
		width: '220dp',
		title: 'Open ' + title
	});
	// self.add(button);
	
	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		
		var win = Ti.UI.createWindow({
			title: title,
			activity: {
				onCreateOptionsMenu: function(e) {
				  	var menu = e.menu;
				  	var menuItem = menu.add({ 
				    	icon: "KS_nav_ui.png",
				  		title: "Item 1",
				  		showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM 
				  	});
				    menuItem.addEventListener("click", function(e) {
				    	var menuItem = e.source;
				    	Ti.API.debug(menuItem.title + " was clicked");
				    });

					// Because of a Titanium SDK bug, we need to set the action bar properties
					// in the onCreateOptionsMenu handler.				    				    
				    var actionBar = win.activity.actionBar;
		            if ( actionBar ) {
	            	    actionBar.displayHomeAsUp = true;
	                	actionBar.onHomeIconItemSelected = function() {
	                    	win.close();
	                	};
	               	}
				}				
			}						
		});
		
		self.containingTab.open(win);	
	});	

	return self;
};

module.exports = AppWindow;
