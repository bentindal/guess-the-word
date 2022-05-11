def newWord
  @listOfWords = File.read('words.txt').upcase.lines.map &:split
  randomNumber = rand(1..1000) # 1000 most common words
  theWord = @listOfWords[randomNumber].to_s[2..6]
end

def isValidWord(guess)
  wordList = File.read('words.txt').upcase.lines.map &:split
  for word in wordList
    word = word[0]
    if(word == guess)
      return true
    end
  end
  return false
end
