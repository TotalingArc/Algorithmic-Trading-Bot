const CCAPIKey = "";
const CryptoCompareAPI = require("cryptocompare");
CryptoCompareAPI.setApiKey(CCAPIKey);


module.exports = {



  hourlyMovingAverage:function(cryptoAsset, fiatCurrency, hours, callback){
    if (hours>169) {
      console.error("Only up to 169 hours allowed!");
      return
    }
    CryptoCompareAPI.histoHour(cryptoAsset, fiatCurrency)
    .then(data => {
      data = data.reverse();
      var sum = 0;
      for (var i=0; i<hours; i++){
        sum += data[i].close;
      }
      var movingAverage = Math.floor(sum / hours);
      callback(movingAverage);
      
    })
    .catch(console.error)

  }



}
