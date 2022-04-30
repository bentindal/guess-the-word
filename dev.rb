require "sinatra"
require "sinatra/reloader"
require "require_all"

set :port, 1393

require_rel "db", "models"

def init
  puts "init called"
  @word = newWord().upcase
  @definition = define(@word)
end

get "/" do
  init()
  $score = "0"
  puts "[NEW GAME #{Time.now}] #{@word} : #{$score} : #{@definition}"
  erb :main
end

get '/custom-game/:id' do
  custom = params[:id]
  data = findCustomGame(custom)
  @word = data[0]
  @definition = data[1]
  if @word == "notFo"
    erb :pagenotfound
  else
    puts "[CUSTOM #{Time.now}] #{@word} : #{@definition}"
    erb :custom_game
  end
end


post "/" do
  init()
  $score = params["endGameButton"].to_i
  puts "[CONT GAME #{Time.now}] #{@word} : #{$score} : #{@definition}"
  erb :main
end

error 404 do
  erb :pagenotfound
end
