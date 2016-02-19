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
  
  Object.observe(currencyStorage, function(changes) {
    changes.forEach(function(change) {
      switch (change.name) {
        case 'uah':
          setUah(change.object[change.name]);
          break
        case 'btc':
          setBtc(change.object[change.name]);
          break
        case 'ethtobtc':
          setEthToBtc(change.object[change.name]);
          break
        case 'eth':
          setEth(change.object[change.name]);
          break
      }
    });
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