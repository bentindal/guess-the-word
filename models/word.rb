def newWord
  listOfWords = File.read('words.txt').upcase.lines.map &:split
  randomNumber = rand(1..1000) # 1000 most common words
  theWord = listOfWords[randomNumber].to_s[2..6]
end