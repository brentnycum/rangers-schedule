require 'csv'

teams = {
	"Atlanta" => "ATL",
	"Baltimore" => "BAL",
	"Boston" => "BOS",
	"Chi White Sox" => "CWS",
	"Cleveland" => "CLE",
	"Colorado" => "COL",
	"Detroit" => "DET",
	"Houston" => "HOU",
	"Kansas City" => "KC",
	"LA Angels" => "LAA",
	"Miami" => "MIA",
	"Minnesota" => "MIN",
	"NY Mets" => "NYM",
	"NY Yankees" => "NYY",
	"Oakland" => "OAK",
	"Philadelphia" => "PHI",
	"Seattle" => "SEA",
	"Tampa Bay" => "TB",
	"Toronto" => "TOR",
	"Washington" => "WSH"
}

puts "["

CSV.foreach("Rangers_Schedule.csv", :headers => true) do |row|
	home = (row["Opponent"] =~ /@/) != 0
	opponent = row["Opponent"].gsub(/(@|vs. )/, '')
	date = Date.strptime(row["Date"], "%A, %B %d")

	if !row["Time"].eql?("TBD")
		time = DateTime.strptime(row["Time"], "%l:%M %p")
		puts "\t{ 'Date': '#{date.strftime('%F')}', 'Time': '#{time.strftime('%H:%M')}', 'Opponent': '#{teams[opponent]}', 'Opponent_Full': '#{opponent}', 'home': #{home}, 'TV': '#{row['TV']}' },"
	else
		puts "\t{ 'Date': '#{date.strftime('%F')}', 'Time': 'TBD', 'Opponent': '#{teams[opponent]}', 'Opponent_Full': '#{opponent}', 'home': #{home}, 'TV': '#{row['TV']}' },"
	end
end

puts "]"
