/*global require*/
'use strict';

require.config({
	paths: {
		angular: '../node_modules/angular/angular',
		cozydb_browser: '../node_modules/cozydb_browser/'
	},
	shim: {
		angular: {
			exports: 'angular',
		},
		angular: {
			exports: 'cozydb_browser'
		}
	},
	deps: ['app']
});
