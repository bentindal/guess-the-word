require 'nokogiri'
require 'httparty'
require 'require_all'

def define(aWord)
    url = "https://www.vocabulary.com/dictionary/"+aWord
    unparsed_html = HTTParty.get(url).body
    page = Nokogiri::HTML(unparsed_html)
    definition = page.css('.short').text.gsub('"', "'")
    if definition.length > 300 || definition.length < 5
        return "No definition found"
    end
    return definition
end

#puts define("ORBED")