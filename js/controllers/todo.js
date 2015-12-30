/*global define*/
'use strict';

/**
 * The main controller for the app. The controller:
 * - retrieves and persist the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */

define([
	'angular',
	'cozydb_browser'
], function (angular, cozydb_browser) {
	return ['$scope', '$location', 'todoStorage', 'filterFilter',
		function ($scope, $location, todoStorage, filterFilter) {
			$scope.addTodo = function () {
				console.log('inside todo');
				// cozydb_browser.escape();
			};
		}
	];
});
