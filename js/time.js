$( document ).ready(function() {

  var time = new Date();

  var timeStorage = {
    hours: timeWraper(time.getHours()),
    minutes: timeWraper(time.getMinutes())
  }

  function setTime() {
    var nowTime = timeStorage.hours + ":" + timeStorage.minutes;
    $(".time").text(nowTime);
  }

  function timeWraper(item) {
    return result = (item.toString().length == 1) ? ('0'+ item) : item;
  }
  
  Object.observe(timeStorage, function(changes) {
    changes.forEach(function(change) {
      setTime();
    });
  });

  //Starting app
  $(".first").text('Эй ты, ленивая задница!');
  $(".second").text('Сделай это приложение!');

  setTime();

  setInterval( function() {
    time = new Date();
    timeStorage.hours = timeWraper(time.getHours());
    timeStorage.minutes = timeWraper(time.getMinutes());
  }, 1000);

});