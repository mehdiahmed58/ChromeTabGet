getLinks();

function getLinks(){
  var list = document.createElement("ul");

  chrome.tabs.query({currentWindow:true}, function (tab){
    for(x in tab){
      console.log(tab[x].url);
      var listElement = document.createElement("li");
      var textlistElement= document.createTextNode(tab[x].url);

      listElement.appendChild(textlistElement);
      list.appendChild(listElement);
    }  
  });
  document.body.appendChild(list);
}