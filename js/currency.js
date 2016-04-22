$( document ).ready(function() {

  var currencyStorage = {
    uah: null,
    btc: null,
    eth: null,
    ethtobtc: null
  }

  function getRateBtc () {
    var baseUrl = 'http://coinmarketcap-nexuist.rhcloud.com/api/btc';
    $.ajax({
      url: baseUrl,
      dataType: "json",
      success: function(data){
        currencyStorage.btc = parseFloat(data.price.usd).toFixed(2);
        proxied.getRateBtc;
      },
      error: function (request, status, error) {
        console.log(request.responseText);
        getRateBtc();
      }
    });
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

  function getRateEth () {
    var baseUrl = 'http://coinmarketcap-nexuist.rhcloud.com/api/eth';
    $.ajax({
      url: baseUrl,
      dataType: "json",
      success: function(data){
        currencyStorage.eth = parseFloat(data.price.usd).toFixed(2);
        currencyStorage.ethtobtc = parseFloat(data.price.btc).toFixed(6);
        proxied.getRateEth;
      },
      error: function (request, status, error) {
        console.log(request.responseText);
        getRateEth();
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
          setEthToBtc(target.ethtobtc);
          setEth(target.eth);
          break
      }
      return Reflect.get(target, prop);
    }
  });

  getRateUah();
  getRateBtc();
  getRateEth();

  setInterval( function() {
    getRateUah();
    getRateBtc();
    getRateEth();
  }, 60000);
});
