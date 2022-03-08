require "sinatra"
require "sinatra/reloader"
require "require_all"

require_rel "models", "controllers"

get "/" do
  erb :main
end