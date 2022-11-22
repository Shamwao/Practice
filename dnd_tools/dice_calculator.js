const diceCalculator = function(q, d) {
    let total = 0
    for(let i = 1; i <= q; i++){
        total += Math.floor(Math.random()*d+1)
    }
    return total
}
console.log(diceCalculator(8,6))