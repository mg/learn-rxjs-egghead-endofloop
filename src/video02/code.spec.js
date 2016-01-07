// https://egghead.io/lessons/javascript-the-array-map-method

const stocks= [
  {symbol: 'XFX', price: 240.22, volume: 23432},
  {symbol: 'TNZ', price: 332.19, volume: 234},
  {symbol: 'JXJ', price: 120.22, volume: 5323},
]

Array.prototype.map2= function(projection) {
  let results= []
  this.forEach(item => results.push(projection(item)))
  return results
}

const getStockSymbols= stocks => stocks.map2(stock => stock.symbol)

console.log('\nVIDEO 02')
console.log(JSON.stringify(getStockSymbols(stocks)))
