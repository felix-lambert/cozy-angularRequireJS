/*global require*/
'use strict';

require([
	'angular',
	'cozydb_browser'
], function (angular, cozydb) {
	require([
		'controllers/todo' 
	], function (todoCtrl) {
		angular
			.module('todomvc', [todoFocusDir, todoEscapeDir, todoStorageSrv])
			.controller('TodoController', todoCtrl);
		angular.bootstrap(document, ['todomvc']);			
	});	
});
