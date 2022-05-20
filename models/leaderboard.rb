def sortDB
    scoreRecords = []
    scores = DB[:scores]
    x = 0
    scores.each do |score| 
        scoreRecords[x] = score[:score].to_i
        x += 1
    end
    #puts scoreRecords
    scoreRecords.sort!
    scoreRecords.reverse!

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
    if s.to_i > 0 && s.to_i != -1
        dateDB = Time.now.strftime("%d/%m/%Y %H:%M")
        DB[:scores] << {name: n, score:s.to_i, date:dateDB}
        puts "[#{dateDB}] Name #{n} just submitted a score of #{s}!"
    end
end
