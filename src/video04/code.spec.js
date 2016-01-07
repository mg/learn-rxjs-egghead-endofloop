// https://egghead.io/lessons/javascript-chaining-the-array-map-and-filter-methods

const stocks= [
  {symbol: 'XFX', price: 240.22, volume: 23432},
  {symbol: 'TNZ', price: 332.19, volume: 234},
  {symbol: 'JXJ', price: 120.22, volume: 5323},
]

let filteredStockSymbols= stocks
  .filter(stock => stock.price >= 150)
  .map(stock => stock.symbol)

console.log('\nVIDEO 04')
filteredStockSymbols.forEach(stock => console.log(stock))
