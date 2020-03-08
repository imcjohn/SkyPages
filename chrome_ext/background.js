const PAGE = "http://imcjohn.github.io/SkyPages/frontend";

chrome.browserAction.onClicked.addListener(function(tab) {
    if (tab.url.match("^https:\/\/[A-Za-z0-9\-]{1,61}\.github\.io\/.*$")) {
        chrome.tabs.create({url: PAGE + `?page=${tab.url}`});
    }
});