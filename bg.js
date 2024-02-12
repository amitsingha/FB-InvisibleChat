try{

  //ON page change
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

    if (tab.url?.startsWith("chrome://")) return undefined;

    if(tab.active && changeInfo.status === 'complete'){

        if (tab.url === "https://www.facebook.com/") {

            chrome.scripting.insertCSS({
              target : {tabId : tab.id},
              files : ["change.css"],
    })
    .then(() => console.log("CSS injected"));
        }
    }
    });


}catch(e){
  console.log(e);
}
