require "sinatra"
require "sinatra/reloader"
require "require_all"

set :port, 1393

require_rel "models"

get "/" do
  word = Word.new
  @word = word.newWord.upcase
  @definition = "Offdline"#define(@word)
  puts "[GAME] with #{word} : #{definition}"
  erb :main
end