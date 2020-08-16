function economicalBowlers(matches,deliveries){
    let result = {}
    let balls = {}
    let arr = []
    
    for(let match of matches){
        if(match.season == 2015){
            arr.push(match.id)
        }
    }
    for(let id of arr){
        for(let i of deliveries){
            if(id == i.match_id){
                if(result.hasOwnProperty(i.bowler) == false){
                    result[i.bowler] = 0
                    
                }
                result[i.bowler] += parseInt(i.total_runs)
            }
        }
    }
    for(let id of arr){
        for(let i of deliveries){
            if(id == i.match_id){
                if(balls.hasOwnProperty(i.bowler) == false){
                    balls[i.bowler] = 1
                }
                
                balls[i.bowler] += 1
            }
        }
    }
    for(let i in balls){
        balls[i] = Math.floor(balls[i]/6)
    }
    for(let i in result){
        result[i] = result[i]/balls[i]
        result[i] = parseFloat(result[i].toFixed(2))
    }
    arr = []
    for(let i in result){
        arr.push([i,result[i]])
    }
    arr.sort(function(a,b){
        return b[1]-a[1] ;
    })
    arr = arr.slice(0,10)
    arr.sort(function(a,b){
        return a[1]-b[1]
    })
    
    result = {}
    for(let i of arr){
        result[i[0]] = i[1]
    }
    return result

}
module.exports = economicalBowlers;