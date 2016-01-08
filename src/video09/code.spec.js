// https://egghead.io/lessons/javascript-advanced-flattening

const exchanges= [
  {
    name: 'NYSE',
    stocks: [
      {symbol: 'XFX', price: 240.22, volume: 23432},
      {symbol: 'TNZ', price: 332.19, volume: 234},
    ],
  },
  {
    name: 'TSX',
    stocks: [
      {symbol: 'JXJ', price: 120.22, volume: 5323},
      {symbol: 'NYN', price: 88.47, volume: 98275},
    ],
  },
]

console.log('\nVIDEO 09')
Array.prototype.concatAll= function() {
  let results= []
  this.forEach(subArray => subArray.forEach(item => results.push(item)))
  return results
}

exchanges
  .map(exchange => exchange.stocks.filter(stock => stock.price >= 100))
  .concatAll()
  .forEach(stock => console.log(stock))

const exchangesWithClosePrice= [
  {
    name: 'NYSE',
    stocks: [
      {symbol: 'XFX', closes: [
        {date: new Date(2014,11,24), price: 240.1},
        {date: new Date(2014,11,23), price: 232.08},
        {date: new Date(2014,11,22), price: 241.09},
      ]},
      {symbol: 'TNZ', closes: [
        {date: new Date(2014,11,24), price: 521.24},
        {date: new Date(2014,11,23), price: 511},
        {date: new Date(2014,11,22), price: 519.29},
      ]},
    ],
  },
  {
    name: 'TSX',
    stocks: [
      {symbol: 'JXJ', closes: [
        {date: new Date(2014,11,24), price: 423.22},
        {date: new Date(2014,11,23), price: 424.84},
        {date: new Date(2014,11,22), price: 419.72},
      ]},
      {symbol: 'NYN', closes: [
        {date: new Date(2014,11,24), price: 16.82},
        {date: new Date(2014,11,23), price: 16.12},
        {date: new Date(2014,11,22), price: 15.77},
      ]},
    ],
  },
]

let christmasEveCloses= exchangesWithClosePrice
  .map(
    exchange => exchange.stocks.map(
      stock => stock.closes.filter(
        close => close.date.getMonth() === 11 && close.date.getDate() === 24
      )
      .map(close => {
        return {
          symbol: stock.symbol,
          price: close.price,
        }
      })
    )
    .concatAll()
   )
  .concatAll()
  .forEach(stock => console.log(stock))
