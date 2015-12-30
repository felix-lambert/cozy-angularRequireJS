/*global require*/
'use strict';

require.config({
	paths: {
		angular: '../node_modules/angular/angular'
		cozydb_browser: '../node_modules/angular/'
	},
	shim: {
		angular: {
			exports: 'angular',
		}
	},
	deps: ['app']
});
