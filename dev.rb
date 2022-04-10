require "sinatra"
require "sinatra/reloader"
require "require_all"

set :port, 1393

require_rel "models"

get "/" do
  word = Word.new
  @word = "TABLE"
  @definition = "A smooth topped object designed for holding items on it"
  puts "[GAME] #{@word} : #{@definition}"
  erb :main
end