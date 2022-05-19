def sortDB
    scoreRecords = []
    scores = DB[:scores]
    x = 0
    scores.each do |score| 
        scoreRecords[x] = score[:score].to_i
        x += 1
    end

    scoreRecords.sort.reverse!

    results = []
    x = 0
    scoreRecords.each do |s|
        results[x] = scores.where(score: scoreRecords[x].to_s)[:score]
        x += 1
    end

    return results
end

def getScoreToBeat()
    sortedDB = sortDB()
    length = sortedDB.length
    if length >= 10
        return sortedDB[10][:score]
    else # length < 10
        return 1
    end
end

def submitScore(n, s)
    dateDB = Time.now.strftime("%d/%m/%Y")
    DB[:scores] << {name: n, score:s, date:dateDB}
    puts "[#{dateDB}] Name #{n} just submitted a score of #{s}!"
end