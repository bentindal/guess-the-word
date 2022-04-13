require "sinatra"
require "sinatra/reloader"
require "require_all"

set :port, 1393

require_rel "models"

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

post "/" do
  init()
  $score = params["endGameButton"].to_i
  puts "[CONT GAME #{Time.now}] #{@word} : #{$score} : #{@definition}"
  erb :main
end