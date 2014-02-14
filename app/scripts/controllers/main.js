'use strict';

angular.module('craftsmansApp').controller('MainCtrl', function ($scope) {

	$scope.scroll = function(selector) {
		$('body').scrollTo(selector, 800);
	};

	$scope.scrollAndEmphasize = function(selector) {
		$(selector).collapse('show');
		$('body').scrollTo(selector, 800);
	};

	$scope.collapse = function(selector) {
		$(selector).collapse('toggle');
	};
});
