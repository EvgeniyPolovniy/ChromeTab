$( document ).ready(function() {

  var uahStorage = {
    buy: null,
    count: 0
  }

  function getRateUah () {
    var baseUrl = 'http://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.xchange where pair in ("USDUAH")&format=json&env=store://datatables.org/alltableswithkeys&callback=';
    $.ajax({
      url: baseUrl,
      dataType: "json",
      success: function(data){
        uahStorage.buy = parseFloat(data.query.results.rate.Rate).toFixed(2);
        uahStorage.count++;
      },
      error: function (request, status, error) {
        console.log(request.responseText);
        getRateUah();
      }
    });
  }

  function setUah (changes) {
    $(".uah").removeClass('loading');
    $(".uah .currency").text(changes);
  }
  
  Object.observe(uahStorage, function(changes) {
    changes.forEach(function(change) {
      if (change.name == 'count') {
        setUah(change.object['buy']);
      }
    });
  });

  getRateUah();

  setInterval( function() {
    getRateUah();
  }, 60000);

});