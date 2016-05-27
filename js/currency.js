$( document ).ready(function() {

  var currencyStorage = {
    uah: null,
    btc: null,
    eth: null,
    ethtobtc: null,
    lisk: null
  }

  function getRateUah () {
    var baseUrl = 'http://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.xchange where pair in ("USDUAH")&format=json&env=store://datatables.org/alltableswithkeys&callback=';
    $.ajax({
      url: baseUrl,
      dataType: "json",
      success: function(data){
        currencyStorage.uah = parseFloat(data.query.results.rate.Rate).toFixed(2);
        proxied.getRateUah;
      },
      error: function (request, status, error) {
        console.log(request.responseText);
        getRateUah();
      }
    });
  }

  function getRate () {
    var baseUrl = 'https://poloniex.com/public?command=returnTicker';
    $.ajax({
      url: baseUrl,
      dataType: "json",
      success: function(data){
        console.log(data);
        //BTC to USD
        currencyStorage.btc = parseFloat(data.USDT_BTC.last).toFixed(2);
        proxied.getRateBtc;
        //ETH to USD
        currencyStorage.eth = parseFloat(data.USDT_ETH.last).toFixed(2);
        proxied.getRateEth;
        //ETH to BTC
        currencyStorage.ethtobtc = parseFloat(data.BTC_ETH.last).toFixed(6);
        proxied.getRateEthToBtc;
        //Lisk to BTC
        currencyStorage.lisk = parseFloat(data.BTC_LSK.last).toFixed(6);
        proxied.getLisk;
      },
      error: function (request, status, error) {
        console.log(request.responseText);
        getRate();
      }
    });
  }

  function setBtc (btc) {
    $(".btc").removeClass('loading');
    $(".btc .currency").text(btc);
  }

  function setUah (uah) {
    $(".uah").removeClass('loading');
    $(".uah .currency").text(uah);
  }

  function setEth(eth) {
    $(".eth").removeClass('loading');
    $(".eth.eth-dol .currency").text(eth);
  }
  function setEthToBtc(ethtobtc) {
    $(".eth").removeClass('loading');
    $(".eth.eth-btc .currency").text(ethtobtc);
  }
  function setLisk(lisk) {
    $(".lisk").removeClass('loading');
    $(".lisk .currency").text(lisk);
  }

  var proxied = new Proxy(currencyStorage, {
    get: function(target, prop) {
      switch (prop) {
        case 'getRateUah':
          setUah(target.uah);
          break
        case 'getRateBtc':
          setBtc(target.btc);
          break
        case 'getRateEth':
          setEth(target.eth);
          break
        case 'getRateEthToBtc':
          setEthToBtc(target.ethtobtc);
          break
        case 'getLisk':
          setLisk(target.lisk);
          break
      }
      return Reflect.get(target, prop);
    }
  });

  getRateUah();
  getRate();

  setInterval( function() {
    getRateUah();
    getRate();
  }, 60000);
});
