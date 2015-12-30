/*global require*/
'use strict';

require([
	'angular'
], function (angular) {
	require([
		'controllers/todo', 
	], function (todoCtrl) {
		angular.controller('TodoController', todoCtrl);
		angular.bootstrap(document, ['todomvc']);			
	});	
});
