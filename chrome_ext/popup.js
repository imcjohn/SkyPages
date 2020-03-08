document.addEventListener('DOMContentLoaded', function() {
    let checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {

            let url = window.location.href;
            // send message of url to background
            chrome.runtime.sendMessage({message: url}, (response) => {
                console.log(response.message);
                let skylink = response.message;
                document.getElementById("text").innerText=`Skylink: <a href=${skylink}>${skylink}</a>`;
            });
            /*let handleResult = function(result){
              let skylink = result.skylink;
              console.log("links");
              document.getElementById("text").innerText=`Skylink: <a href=${skylink}>${skylink}</a>`;
            };*/

        });
    }, false);
}, false);