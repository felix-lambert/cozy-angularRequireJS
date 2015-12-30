/*global define*/
'use strict';

/**
 * The main controller for the app. The controller:
 * - retrieves and persist the model via the todoStorage service
 * - exposes the model to the template and provides event handlers
 */

define([
	'angular', 'cozydb_browser'
], function (angular, cozydb_browser) {

	$scope.addTodo = function () {
		console.log('add todo');
		cozydb_browser.escape();
	};
});
