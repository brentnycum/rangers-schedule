var rangersScheduleApp = angular.module('rangersScheduleApp', ['RangersScheduleFilter']);

rangersScheduleApp.controller('RangersScheduleCtrl', function ($scope) {
	$scope.games = [
		{ 'Date': '2015-04-06', 'Time': '9:05 PM', 'Opponent': 'OAK', 'Opponent_Full': 'Athletics', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-04-07', 'Time': '9:05 PM', 'Opponent': 'OAK', 'Opponent_Full': 'Athletics', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-04-08', 'Time': '9:05 PM', 'Opponent': 'OAK', 'Opponent_Full': 'Athletics', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-04-09', 'Time': '2:35 PM', 'Opponent': 'OAK', 'Opponent_Full': 'Athletics', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-04-10', 'Time': '3:05 PM', 'Opponent': 'HOU', 'Opponent_Full': 'Astros', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-04-11', 'Time': '7:05 PM', 'Opponent': 'HOU', 'Opponent_Full': 'Astros', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-04-12', 'Time': '2:05 PM', 'Opponent': 'HOU', 'Opponent_Full': 'Astros', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-04-13', 'Time': '7:05 PM', 'Opponent': 'LAA', 'Opponent_Full': 'Angels', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-04-14', 'Time': '7:05 PM', 'Opponent': 'LAA', 'Opponent_Full': 'Angels', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-04-15', 'Time': '1:05 PM', 'Opponent': 'LAA', 'Opponent_Full': 'Angels', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-04-17', 'Time': '9:10 PM', 'Opponent': 'SEA', 'Opponent_Full': 'Mariners', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-04-18', 'Time': '8:10 PM', 'Opponent': 'SEA', 'Opponent_Full': 'Mariners', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-04-19', 'Time': '3:10 PM', 'Opponent': 'SEA', 'Opponent_Full': 'Mariners', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-04-21', 'Time': '8:40 PM', 'Opponent': 'ARZ', 'Opponent_Full': 'D-backs', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-04-22', 'Time': '8:40 PM', 'Opponent': 'ARZ', 'Opponent_Full': 'D-backs', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-04-24', 'Time': '9:05 PM', 'Opponent': 'LAA', 'Opponent_Full': 'Angels', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-04-25', 'Time': '8:05 PM', 'Opponent': 'LAA', 'Opponent_Full': 'Angels', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-04-26', 'Time': '2:35 PM', 'Opponent': 'LAA', 'Opponent_Full': 'Angels', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-04-27', 'Time': '7:05 PM', 'Opponent': 'SEA', 'Opponent_Full': 'Mariners', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-04-28', 'Time': '7:05 PM', 'Opponent': 'SEA', 'Opponent_Full': 'Mariners', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-04-29', 'Time': '7:05 PM', 'Opponent': 'SEA', 'Opponent_Full': 'Mariners', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-05-01', 'Time': '7:05 PM', 'Opponent': 'OAK', 'Opponent_Full': 'Athletics', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-05-02', 'Time': '7:05 PM', 'Opponent': 'OAK', 'Opponent_Full': 'Athletics', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-05-03', 'Time': '2:05 PM', 'Opponent': 'OAK', 'Opponent_Full': 'Athletics', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-05-04', 'Time': '7:10 PM', 'Opponent': 'HOU', 'Opponent_Full': 'Astros', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-05-05', 'Time': '7:10 PM', 'Opponent': 'HOU', 'Opponent_Full': 'Astros', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-05-06', 'Time': '7:10 PM', 'Opponent': 'HOU', 'Opponent_Full': 'Astros', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-05-07', 'Time': '6:10 PM', 'Opponent': 'TB', 'Opponent_Full': 'Rays', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-05-08', 'Time': '6:10 PM', 'Opponent': 'TB', 'Opponent_Full': 'Rays', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-05-09', 'Time': '5:10 PM', 'Opponent': 'TB', 'Opponent_Full': 'Rays', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-05-10', 'Time': '12:10 PM', 'Opponent': 'TB', 'Opponent_Full': 'Rays', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-05-11', 'Time': '7:05 PM', 'Opponent': 'KC', 'Opponent_Full': 'Royals', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-05-12', 'Time': '7:05 PM', 'Opponent': 'KC', 'Opponent_Full': 'Royals', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-05-13', 'Time': '7:05 PM', 'Opponent': 'KC', 'Opponent_Full': 'Royals', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-05-14', 'Time': '1:05 PM', 'Opponent': 'KC', 'Opponent_Full': 'Royals', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-05-15', 'Time': '7:05 PM', 'Opponent': 'CLE', 'Opponent_Full': 'Indians', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-05-16', 'Time': '7:05 PM', 'Opponent': 'CLE', 'Opponent_Full': 'Indians', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-05-17', 'Time': '2:05 PM', 'Opponent': 'CLE', 'Opponent_Full': 'Indians', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-05-19', 'Time': '6:10 PM', 'Opponent': 'BOS', 'Opponent_Full': 'Red Sox', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-05-20', 'Time': '6:10 PM', 'Opponent': 'BOS', 'Opponent_Full': 'Red Sox', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-05-21', 'Time': '6:10 PM', 'Opponent': 'BOS', 'Opponent_Full': 'Red Sox', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-05-22', 'Time': '6:05 PM', 'Opponent': 'NYY', 'Opponent_Full': 'Yankees', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-05-23', 'Time': '12:05 PM', 'Opponent': 'NYY', 'Opponent_Full': 'Yankees', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-05-24', 'Time': '7:05 PM', 'Opponent': 'NYY', 'Opponent_Full': 'Yankees', 'home': false, 'TV': 'ESPN' },
		{ 'Date': '2015-05-25', 'Time': '3:10 PM', 'Opponent': 'CLE', 'Opponent_Full': 'Indians', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-05-26', 'Time': '6:10 PM', 'Opponent': 'CLE', 'Opponent_Full': 'Indians', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-05-27', 'Time': '11:10 AM', 'Opponent': 'CLE', 'Opponent_Full': 'Indians', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-05-28', 'Time': '7:05 PM', 'Opponent': 'BOS', 'Opponent_Full': 'Red Sox', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-05-29', 'Time': '7:05 PM', 'Opponent': 'BOS', 'Opponent_Full': 'Red Sox', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-05-30', 'Time': '6:15 PM', 'Opponent': 'BOS', 'Opponent_Full': 'Red Sox', 'home': true, 'TV': 'FOX' },
		{ 'Date': '2015-05-31', 'Time': '2:05 PM', 'Opponent': 'BOS', 'Opponent_Full': 'Red Sox', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-06-02', 'Time': '7:05 PM', 'Opponent': 'CWS', 'Opponent_Full': 'White Sox', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-06-03', 'Time': '7:05 PM', 'Opponent': 'CWS', 'Opponent_Full': 'White Sox', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-06-04', 'Time': '7:05 PM', 'Opponent': 'CWS', 'Opponent_Full': 'White Sox', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-06-05', 'Time': '7:10 PM', 'Opponent': 'KC', 'Opponent_Full': 'Royals', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-06-06', 'Time': '1:10 PM', 'Opponent': 'KC', 'Opponent_Full': 'Royals', 'home': false, 'TV': 'FS1' },
		{ 'Date': '2015-06-07', 'Time': '1:10 PM', 'Opponent': 'KC', 'Opponent_Full': 'Royals', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-06-09', 'Time': '9:05 PM', 'Opponent': 'OAK', 'Opponent_Full': 'Athletics', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-06-10', 'Time': '9:05 PM', 'Opponent': 'OAK', 'Opponent_Full': 'Athletics', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-06-11', 'Time': '2:35 PM', 'Opponent': 'OAK', 'Opponent_Full': 'Athletics', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-06-12', 'Time': '7:05 PM', 'Opponent': 'MIN', 'Opponent_Full': 'Twins', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-06-13', 'Time': '3:05 PM', 'Opponent': 'MIN', 'Opponent_Full': 'Twins', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-06-14', 'Time': '2:05 PM', 'Opponent': 'MIN', 'Opponent_Full': 'Twins', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-06-15', 'Time': '7:05 PM', 'Opponent': 'LAD', 'Opponent_Full': 'Dodgers', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-06-16', 'Time': '7:05 PM', 'Opponent': 'LAD', 'Opponent_Full': 'Dodgers', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-06-17', 'Time': '9:10 PM', 'Opponent': 'LAD', 'Opponent_Full': 'Dodgers', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-06-18', 'Time': '9:10 PM', 'Opponent': 'LAD', 'Opponent_Full': 'Dodgers', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-06-19', 'Time': '7:10 PM', 'Opponent': 'CWS', 'Opponent_Full': 'White Sox', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-06-20', 'Time': '1:10 PM', 'Opponent': 'CWS', 'Opponent_Full': 'White Sox', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-06-21', 'Time': '1:10 PM', 'Opponent': 'CWS', 'Opponent_Full': 'White Sox', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-06-23', 'Time': '7:05 PM', 'Opponent': 'OAK', 'Opponent_Full': 'Athletics', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-06-24', 'Time': '7:05 PM', 'Opponent': 'OAK', 'Opponent_Full': 'Athletics', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-06-25', 'Time': '1:05 PM', 'Opponent': 'OAK', 'Opponent_Full': 'Athletics', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-06-26', 'Time': '6:07 PM', 'Opponent': 'TOR', 'Opponent_Full': 'Blue Jays', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-06-27', 'Time': '12:07 PM', 'Opponent': 'TOR', 'Opponent_Full': 'Blue Jays', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-06-28', 'Time': '12:07 PM', 'Opponent': 'TOR', 'Opponent_Full': 'Blue Jays', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-06-29', 'Time': '6:05 PM', 'Opponent': 'BAL', 'Opponent_Full': 'Orioles', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-06-30', 'Time': '6:05 PM', 'Opponent': 'BAL', 'Opponent_Full': 'Orioles', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-07-01', 'Time': '6:05 PM', 'Opponent': 'BAL', 'Opponent_Full': 'Orioles', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-07-02', 'Time': '6:05 PM', 'Opponent': 'BAL', 'Opponent_Full': 'Orioles', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-07-03', 'Time': '7:05 PM', 'Opponent': 'LAA', 'Opponent_Full': 'Angels', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-07-04', 'Time': '8:05 PM', 'Opponent': 'LAA', 'Opponent_Full': 'Angels', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-07-05', 'Time': '6:05 PM', 'Opponent': 'LAA', 'Opponent_Full': 'Angels', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-07-07', 'Time': '7:05 PM', 'Opponent': 'ARZ', 'Opponent_Full': 'D-backs', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-07-08', 'Time': '7:05 PM', 'Opponent': 'ARZ', 'Opponent_Full': 'D-backs', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-07-10', 'Time': '7:05 PM', 'Opponent': 'SD', 'Opponent_Full': 'Padres', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-07-11', 'Time': '8:05 PM', 'Opponent': 'SD', 'Opponent_Full': 'Padres', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-07-12', 'Time': '2:05 PM', 'Opponent': 'SD', 'Opponent_Full': 'Padres', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-07-17', 'Time': '7:10 PM', 'Opponent': 'HOU', 'Opponent_Full': 'Astros', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-07-18', 'Time': '6:10 PM', 'Opponent': 'HOU', 'Opponent_Full': 'Astros', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-07-19', 'Time': '1:10 PM', 'Opponent': 'HOU', 'Opponent_Full': 'Astros', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-07-20', 'Time': '7:40 PM', 'Opponent': 'COL', 'Opponent_Full': 'Rockies', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-07-21', 'Time': '7:40 PM', 'Opponent': 'COL', 'Opponent_Full': 'Rockies', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-07-22', 'Time': '2:10 PM', 'Opponent': 'COL', 'Opponent_Full': 'Rockies', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-07-24', 'Time': '9:05 PM', 'Opponent': 'LAA', 'Opponent_Full': 'Angels', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-07-25', 'Time': '8:05 PM', 'Opponent': 'LAA', 'Opponent_Full': 'Angels', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-07-26', 'Time': '2:35 PM', 'Opponent': 'LAA', 'Opponent_Full': 'Angels', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-07-27', 'Time': '7:05 PM', 'Opponent': 'NYY', 'Opponent_Full': 'Yankees', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-07-28', 'Time': '7:05 PM', 'Opponent': 'NYY', 'Opponent_Full': 'Yankees', 'home': true, 'TV': 'FS1' },
		{ 'Date': '2015-07-29', 'Time': '7:05 PM', 'Opponent': 'NYY', 'Opponent_Full': 'Yankees', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-07-30', 'Time': '7:05 PM', 'Opponent': 'NYY', 'Opponent_Full': 'Yankees', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-07-31', 'Time': '7:05 PM', 'Opponent': 'SF', 'Opponent_Full': 'Giants', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-08-01', 'Time': '7:05 PM', 'Opponent': 'SF', 'Opponent_Full': 'Giants', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-08-02', 'Time': '2:05 PM', 'Opponent': 'SF', 'Opponent_Full': 'Giants', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-08-03', 'Time': '7:05 PM', 'Opponent': 'HOU', 'Opponent_Full': 'Astros', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-08-04', 'Time': '7:05 PM', 'Opponent': 'HOU', 'Opponent_Full': 'Astros', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-08-05', 'Time': '7:05 PM', 'Opponent': 'HOU', 'Opponent_Full': 'Astros', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-08-07', 'Time': '9:10 PM', 'Opponent': 'SEA', 'Opponent_Full': 'Mariners', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-08-08', 'Time': '3:10 PM', 'Opponent': 'SEA', 'Opponent_Full': 'Mariners', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-08-09', 'Time': '3:10 PM', 'Opponent': 'SEA', 'Opponent_Full': 'Mariners', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-08-11', 'Time': '7:10 PM', 'Opponent': 'MIN', 'Opponent_Full': 'Twins', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-08-12', 'Time': '7:10 PM', 'Opponent': 'MIN', 'Opponent_Full': 'Twins', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-08-13', 'Time': '12:10 PM', 'Opponent': 'MIN', 'Opponent_Full': 'Twins', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-08-14', 'Time': '7:05 PM', 'Opponent': 'TB', 'Opponent_Full': 'Rays', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-08-15', 'Time': '7:05 PM', 'Opponent': 'TB', 'Opponent_Full': 'Rays', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-08-16', 'Time': '2:05 PM', 'Opponent': 'TB', 'Opponent_Full': 'Rays', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-08-17', 'Time': '7:05 PM', 'Opponent': 'SEA', 'Opponent_Full': 'Mariners', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-08-18', 'Time': '7:05 PM', 'Opponent': 'SEA', 'Opponent_Full': 'Mariners', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-08-19', 'Time': '1:05 PM', 'Opponent': 'SEA', 'Opponent_Full': 'Mariners', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-08-20', 'Time': '6:08 PM', 'Opponent': 'DET', 'Opponent_Full': 'Tigers', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-08-21', 'Time': '6:08 PM', 'Opponent': 'DET', 'Opponent_Full': 'Tigers', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-08-22', 'Time': '6:08 PM', 'Opponent': 'DET', 'Opponent_Full': 'Tigers', 'home': false, 'TV': 'FS1' },
		{ 'Date': '2015-08-23', 'Time': '12:08 PM', 'Opponent': 'DET', 'Opponent_Full': 'Tigers', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-08-25', 'Time': '7:05 PM', 'Opponent': 'TOR', 'Opponent_Full': 'Blue Jays', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-08-26', 'Time': '7:05 PM', 'Opponent': 'TOR', 'Opponent_Full': 'Blue Jays', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-08-27', 'Time': '1:05 PM', 'Opponent': 'TOR', 'Opponent_Full': 'Blue Jays', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-08-28', 'Time': '7:05 PM', 'Opponent': 'BAL', 'Opponent_Full': 'Orioles', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-08-29', 'Time': '7:05 PM', 'Opponent': 'BAL', 'Opponent_Full': 'Orioles', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-08-30', 'Time': '2:05 PM', 'Opponent': 'BAL', 'Opponent_Full': 'Orioles', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-08-31', 'Time': '9:10 PM', 'Opponent': 'SD', 'Opponent_Full': 'Padres', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-09-01', 'Time': '9:10 PM', 'Opponent': 'SD', 'Opponent_Full': 'Padres', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-09-02', 'Time': '9:10 PM', 'Opponent': 'SD', 'Opponent_Full': 'Padres', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-09-04', 'Time': '9:05 PM', 'Opponent': 'LAA', 'Opponent_Full': 'Angels', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-09-05', 'Time': '8:05 PM', 'Opponent': 'LAA', 'Opponent_Full': 'Angels', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-09-06', 'Time': '2:35 PM', 'Opponent': 'LAA', 'Opponent_Full': 'Angels', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-09-07', 'Time': '5:40 PM', 'Opponent': 'SEA', 'Opponent_Full': 'Mariners', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-09-08', 'Time': '9:10 PM', 'Opponent': 'SEA', 'Opponent_Full': 'Mariners', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-09-09', 'Time': '9:10 PM', 'Opponent': 'SEA', 'Opponent_Full': 'Mariners', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-09-10', 'Time': '2:40 PM', 'Opponent': 'SEA', 'Opponent_Full': 'Mariners', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-09-11', 'Time': '7:05 PM', 'Opponent': 'OAK', 'Opponent_Full': 'Athletics', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-09-12', 'Time': '7:05 PM', 'Opponent': 'OAK', 'Opponent_Full': 'Athletics', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-09-13', 'Time': '2:05 PM', 'Opponent': 'OAK', 'Opponent_Full': 'Athletics', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-09-14', 'Time': '7:05 PM', 'Opponent': 'HOU', 'Opponent_Full': 'Astros', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-09-15', 'Time': '7:05 PM', 'Opponent': 'HOU', 'Opponent_Full': 'Astros', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-09-16', 'Time': '7:05 PM', 'Opponent': 'HOU', 'Opponent_Full': 'Astros', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-09-17', 'Time': '7:05 PM', 'Opponent': 'HOU', 'Opponent_Full': 'Astros', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-09-18', 'Time': '7:05 PM', 'Opponent': 'SEA', 'Opponent_Full': 'Mariners', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-09-19', 'Time': '7:05 PM', 'Opponent': 'SEA', 'Opponent_Full': 'Mariners', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-09-20', 'Time': '2:05 PM', 'Opponent': 'SEA', 'Opponent_Full': 'Mariners', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-09-22', 'Time': '9:05 PM', 'Opponent': 'OAK', 'Opponent_Full': 'Athletics', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-09-23', 'Time': '9:05 PM', 'Opponent': 'OAK', 'Opponent_Full': 'Athletics', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-09-24', 'Time': '2:35 PM', 'Opponent': 'OAK', 'Opponent_Full': 'Athletics', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-09-25', 'Time': '7:10 PM', 'Opponent': 'HOU', 'Opponent_Full': 'Astros', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-09-26', 'Time': '6:10 PM', 'Opponent': 'HOU', 'Opponent_Full': 'Astros', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-09-27', 'Time': '1:10 PM', 'Opponent': 'HOU', 'Opponent_Full': 'Astros', 'home': false, 'TV': 'FSSW' },
		{ 'Date': '2015-09-28', 'Time': '7:05 PM', 'Opponent': 'DET', 'Opponent_Full': 'Tigers', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-09-29', 'Time': '7:05 PM', 'Opponent': 'DET', 'Opponent_Full': 'Tigers', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-09-30', 'Time': '7:05 PM', 'Opponent': 'DET', 'Opponent_Full': 'Tigers', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-10-01', 'Time': '7:05 PM', 'Opponent': 'LAA', 'Opponent_Full': 'Angels', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-10-02', 'Time': '7:05 PM', 'Opponent': 'LAA', 'Opponent_Full': 'Angels', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-10-03', 'Time': '7:05 PM', 'Opponent': 'LAA', 'Opponent_Full': 'Angels', 'home': true, 'TV': 'FSSW' },
		{ 'Date': '2015-10-04', 'Time': '2:05 PM', 'Opponent': 'LAA', 'Opponent_Full': 'Angels', 'home': true, 'TV': 'FSSW' }
	];
});
