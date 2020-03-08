document.addEventListener('DOMContentLoaded', function() {
    let checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {
            let url = window.location.href;
            let site_zip = get_pages(url); // ian function
            let handleResult = function(result){
              let skylink = result.skylink;
              document.getElementById("text").innerText=`Skylink: <a href=${skylink}>${skylink}</a>`;
            };
            site_zip.then(function(zip){
                let promResult = handle_zip(zip);
                promResult.then(handleResult); // seb function
            });
        });
    }, false);
}, false);