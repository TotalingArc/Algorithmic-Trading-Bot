// call to Gemini
const GeminiAPI = require("gemini-api").default;
const secret = "";
const key = "";
const restClient = new GeminiAPI({key,secret, sandbox:true});

// Module, js calls.
module.exports = {

  marketBuyBitcoin:function(){
    return restClient.newOrder({amount: 1,
                      price:60000,
                      side: "buy",
                      symbol: "btcusd",
                      options:["immediate-or-cancel"]})

 },

 marketSellBitcoin:function(){
   return restClient.newOrder({amount: 1,
                     price:1,
                     side: "sell",
                     symbol: "btcusd",
                     options:["immediate-or-cancel"]})

 },

 bitcoinPrice:function(){
   return restClient.getTicker("btcusd");
 }


}
