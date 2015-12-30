/*global require*/
'use strict';

require([
	'angular'
], function (angular) {
	require([
		'controllers/todo' 
	], function (todoCtrl) {
		angular
			.module('todomvc')
			.controller('TodoController', todoCtrl);
		angular.bootstrap(document, ['todomvc']);			
	});	
});
