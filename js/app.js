/*global require*/
'use strict';

require([
	'angular'
], function (angular) {
	require(['cozydb_browser'], function (cozydb_browser) {
		require([
		'controllers/todo', 
		], function (todoCtrl) {
			angular.controller('TodoController', todoCtrl);
			angular.bootstrap(document, ['todomvc']);			
		});
	});
		
});
