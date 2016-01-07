// https://egghead.io/lessons/javascript-the-array-filter-method

const stocks= [
  {symbol: 'XFX', price: 240.22, volume: 23432},
  {symbol: 'TNZ', price: 332.19, volume: 234},
  {symbol: 'JXJ', price: 120.22, volume: 5323},
]

const getStocksOver1= (stocks, minPrice) => {
  let results= []
  stocks.forEach(stock => {
    if(stock.price >= minPrice) {
      results.push(stock)
    }
  })
  return results
}

Array.prototype.filter2= function(predicate) {
  let results= []
  this.forEach(item => {
    if(predicate(item)) {
      results.push(item)
    }
  })
  return results
}

const getStocksOver2= (stocks, minPrice) => stocks.filter2(stock => stock.price >= minPrice)

console.log('\nVIDEO 03')
console.log(JSON.stringify(getStocksOver1(stocks, 150)))
console.log(JSON.stringify(getStocksOver2(stocks, 150)))
