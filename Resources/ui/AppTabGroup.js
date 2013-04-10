function AppTabGroup() {
	var AppWindow = require('ui/AppWindow');
	
	var self = Ti.UI.createTabGroup({
		title: 'Tabbed Group Test'
	});
	
	var win1 = new AppWindow('Home window'),
		win2 = new AppWindow('Settings window');
	
	var tab1 = Ti.UI.createTab({
		title: 'Home',
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	var tab2 = Ti.UI.createTab({
		title: 'Settings',
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	
	win1.containingTab = tab1;	
	win2.containingTab = tab2;
	self.addTab(tab1);
	self.addTab(tab2);
	
	tab1.addEventListener('focus', function(e) {
		invalidateMenu(self, e)
	});
	tab2.addEventListener('focus', function(e) {
		invalidateMenu(self, e)
	});
	
	// self.addEventListener("open", function(e) {
	    // var activity = self.getActivity();
	    // activity.onCreateOptionsMenu = function(e) {
		  	// var menu = e.menu;
			// 	    	
			// var tab = self.activeTab;
			// var title = tab.title;		
			// Ti.API.info("create menu for " + title);
		  	// menu.add({ 
		  		// icon: "KS_nav_ui.png",
	  			// title: title + ' Item 1',
		  		// showAsAction : Ti.Android.SHOW_AS_ACTION_IF_ROOM 
		  	// }).addEventListener("click", function(e) {
		    	// Ti.API.info(e.source.title + " was clicked");
		    // });
		  	// var menuItem = menu.add({
	  			// title: title + ' Item 2',
	  			// showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM 
	  		// });		    	
		  	// if ( title == 'Home' ) {
		  		// menuItem.icon = "KS_nav_views.png"; 
		    // }
		    // menuItem.addEventListener("click", function(e) {
		    	// Ti.API.info(e.source.title + " was clicked");
		    // });
	    // }
	    // activity.invalidateOptionsMenu();
	// });

	return self;
};

function invalidateMenu(self, e) {
	var tab = e.tab || e.source.tab;
	if ( tab ) {
		Ti.API.info("invalidate menu for " + tab.title);
		var activity = self.getActivity();
		if ( activity ) {
			activity.invalidateOptionsMenu();
		}
	}
}

module.exports = AppTabGroup;
