/*global require*/
'use strict';

require([
	'angular'
], function (angular) {
	require([
		'cozydb_browser',
		'controllers/todo' 
	], function (todoCtrl) {
		angular
			.module('todomvc', [])
			.controller('TodoController', todoCtrl);
		angular.bootstrap(document, ['todomvc']);			
	});	
});