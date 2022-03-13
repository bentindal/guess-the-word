require "sinatra"
require "sinatra/reloader"
require "require_all"

set :port, 80

require_rel "models"


get "/" do
  word = Word.new
  @word = word.newWord
  erb :main
end