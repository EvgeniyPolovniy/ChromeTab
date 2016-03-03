window.onload = function(){
  window.tab42 = new Tab42();

  chrome.tabs.getSelected(null, function(tab){
    chrome.tabs.sendMessage(tab.id,{msg:"msg01"});
  }); 

}

function factory(obj){
  if(obj && obj.method){
    if(obj.data)
      window.bg[obj.method](obj.data);
    else
      window.bg[obj.method]();
  }
}

window.Tab42 = function(){};

window.Tab42.prototype = {

  time: {},
}