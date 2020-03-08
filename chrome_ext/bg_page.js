
//receive url message

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        let url = request.message;
        let site_zip = get_pages(url); // ian function
        site_zip.then(function(zip){
            let promResult = handle_zip(zip);
            promResult.then(result => sendResponse({message: result.skylink})); // seb function
        });
    });
