require 'csv'

teams = {
	"Braves" => "ATL",
	"Orioles" => "BAL",
	"Red Sox" => "BOS",
	"White Sox" => "CWS",
	"Indians" => "CLE",
	"Rockies" => "COL",
	"Tigers" => "DET",
	"Astros" => "HOU",
	"Royals" => "KC",
	"Angels" => "LAA",
	"Marlins" => "MIA",
	"Twins" => "MIN",
	"Mets" => "NYM",
	"Yankees" => "NYY",
	"Athletics" => "OAK",
	"Phillies" => "PHI",
	"Mariners" => "SEA",
	"Rays" => "TB",
	"Blue Jays" => "TOR",
	"Nationals" => "WSH",
	"Padres" => "SD",
	"Giants" => "SF",
	"D-backs" => "ARZ",
	"Dodgers" => "LAD",
	"Pirates" => "PIT",
	"Brewers" => "MIL",
	"Reds" => "CIN",
	"Cubs" => "CHI",
	"Cardinals" => "STL"
}

puts "["

CSV.foreach("Rangers_Schedule.csv", :headers => true) do |row|
	home = row["Home"]
	opponent = row["Opponent"]
	date = DateTime.strptime(row["Date"], "%m/%d/%y %H:%M %p")

	puts "\t{ 'Date': '#{date.strftime('%F')}', 'Time': '#{date.strftime(' %l:%M %p').lstrip!}', 'Opponent': '#{teams[opponent]}', 'Opponent_Full': '#{opponent}', 'home': #{home}, 'TV': '#{row['TV']}' },"
end

puts "]"
