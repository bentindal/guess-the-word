require "sinatra"
require "sinatra/reloader"
require "require_all"

set :port, 80

require_rel "db", "models"

def init
  puts "init called"
  @word = newWord().upcase
  @definition = define(@word)
  @list = @listOfWords
end

get "/" do
  init()
  $score = "0"
  puts "[NEW GAME #{Time.now}] #{@word} : #{$score} : #{@definition}"
  erb :main
end

get "/custom-game" do
  @getID = ""
  erb :customword
end

get '/game' do
  custom = params[:id]
  data = findCustomGame(custom)
  @word = data[0]
  @definition = data[1]
  if @word == "notFo"
    erb :pagenotfound
  else
    puts "[CUSTOM #{Time.now}] #{@word} : #{@definition}"
    @list = File.read('words.txt').upcase.lines.map &:split
    erb :custom_game
  end
end

post "/" do
  init()
  $score = params["endGameButton"].to_i
  puts "[CONT GAME #{Time.now}] #{@word} : #{$score} : #{@definition}"
  erb :main
end

post "/custom-game" do
  puts "page attempted to load!!"
  @getID = generateCustomGame(params["word"], params["definition"]).to_s
  erb :customword
end

error 404 do
  erb :pagenotfound
end