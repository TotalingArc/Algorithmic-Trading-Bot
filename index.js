global.fetch = require("node-fetch");
const indicators = require("./indicators.js");
const exchange = require("./exchange.js");


var hasPosition = false;
var strategy = function(){
  // If BTC < MA ==> buy(if we have no position)

console.log("         ");
console.log("=======================");

console.log("Executing Strategy");
  // If BTC > MA ==> sell (if we have a position)
indicators.hourlyMovingAverage("BTC","USD",100,function(ma){
  exchange.bitcoinPrice()
  .then(res => {

    var price = res.last;

    console.log("MA: ",ma);
    console.log("Price: ", price);

    if(price < ma && !hasPosition){


      console.log("BUY!");
    exchange.marketBuyBitcoin()
    .then(res=>{
      console.log("Buy successful");
      hasPosition = true;

      setTimeout(strategy,1000);

    })
    .catch(error => console.error)

  }

    else if(price > ma && hasPosition){

      console.log("SELL!");
      exchange.marketBuyBitcoin()
      .then(res=>{
        console.log("Sell successful");
        hasPosition = false;

        setTimeout(strategy,1000);

      })
      .catch(error => console.error)
    }

    else{

      console.log("HOLD!");
      setTimeout(strategy,1000);

    }



  })

});

}

strategy();




/*exchange.marketSellBitcoin()
.then(res => console.log(res))
.catch(error => consoleerror(error));
*/








// 1. get data from CC
//2. calculate MA from 100 hours
//3. check countinously if price is crossing 100 MA  => BUY/SELL/HOLD


// 100 minutes Moving Average


// 100 hour Moving Average
/*indicators.hourlyMovingAverage("BTC", "USD", 100, function(result){
  console.log("hourly MA: ", result);
});*/

// 100 day Moving Average
