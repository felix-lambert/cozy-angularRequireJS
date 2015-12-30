/*global require*/
'use strict';

require([
	'angular',
	'cozydb_browser'
], function (angular) {
	require([
		'controllers/todo', 
	], function (todoCtrl, cozydb_browser) {
		angular
			.controller('TodoController', todoCtrl);
		angular.bootstrap(document, ['todomvc']);			
	});	
});
