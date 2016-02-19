$( document ).ready(function() {

  var ethStorage = {
    buy: null,
    btc: null,
    count: 0
  }

  function getRateEth () {
    var baseUrl = 'http://coinmarketcap-nexuist.rhcloud.com/api/eth';
    $.ajax({
      url: baseUrl,
      dataType: "json",
      success: function(data){
        ethStorage.buy = parseFloat(data.price.usd).toFixed(2);
        ethStorage.btc = parseFloat(data.price.btc).toFixed(6);
        ethStorage.count++;
      },
      error: function (request, status, error) {
        console.log(request.responseText);
        getRateEth();
      }
    });
  }

  function setEth(buy, btc) {
    $(".eth").removeClass('loading');
    $(".eth.eth-dol .currency").text(buy);
    $(".eth.eth-btc .currency").text(btc);
  }
  
  Object.observe(ethStorage, function(changes) {
    changes.forEach(function(change) {
      if (change.name == 'count') {
        setEth(change.object['buy'], change.object['btc']);
      }
    });
  });

  getRateEth();

  setInterval( function() {
    getRateEth();
  }, 60000);

});