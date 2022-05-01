require "logger"
require "sequel"
require "sqlite3"

def findCustomGame(customID)
  puts "finding Custom Game"
  gameData = ["notFo", "n/a"]
  customDB = DB[:customgames].where(id: customID)
  customDB.each do |game|
    puts "Game Found"
    gameData[0] = game[:customWord]
    gameData[1] = game[:customDefinition]
  end

  puts "Here is the #{gameData[0]}"
  return gameData
end

def generateCustomGame(cWord, cDefinition)
  matches = DB[:customgames].where(word: cWord)
  cID = SecureRandom.random_number(99999).to_s.rjust(5, '0')
  DB[:customgames] << {id: cID, customWord:cWord.upcase, customDefinition:cDefinition}
  puts "Success!"
  return cID
end
