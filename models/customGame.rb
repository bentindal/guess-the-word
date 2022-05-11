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
  # Check that it is 5 digits long
  if (cWord.length != 5)
    return "1" # not correct length
  end
  if (isValidWord(cWord.upcase) != true)
    return "2" # not a valid word!
  end

  # If successfull...
  cID = SecureRandom.random_number(99999).to_s.rjust(5, '0')
  DB[:customgames] << {id: cID, customWord:cWord.upcase, customDefinition:cDefinition}
  puts "Successfully generated a custom game!"
  return cID
end
