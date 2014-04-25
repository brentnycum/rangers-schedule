angular.module('RangersScheduleFilter', []).filter('previous', function() {
	var currentDate = new Date((new Date()).setHours(0, 0, 0, 0));

	return function(input) {
		var gameDate = new Date((new Date(input)).setHours(24, 0, 0, 0));
		return gameDate < currentDate;
	};
});
