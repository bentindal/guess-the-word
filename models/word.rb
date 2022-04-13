def newWord
  listOfWords = File.read('words.txt').upcase.lines.map &:split
  randomNumber = rand(1..listOfWords.length)
  theWord = listOfWords[randomNumber].to_s[2..6]
end