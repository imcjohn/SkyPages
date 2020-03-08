const allWithHref = ['a','area','base','link'];
const allWithSrc = ['audio','embed','iframe','img','input','script','source','track','video'];
let domparser = new DOMParser();

function toDom(htmlString){
    let dom = domparser.parseFromString(htmlString,'text/html');
    return dom;
}

/**
 * Traverse a github page tree, turning it into zip folders along the way
 * @param url root of git pages
 * @returns promise of a zip something something
 */

function get_pages(url){
    let zip = new JSZip();
    if (url[url.length-1] != '/')
        url = url + '/'; // always end with fwd slash
    return fetch(url, {
        method: "GET"
    }).then(response => response.text())
        .then(response => multiFetch(url,zip,parseTraverse(url,toDom(response)))).then(() => zip);
}

/**
 * Parse all html links from webpage
 * @param htmlString string of html from website
 * @returns list of links in webpage
 */
function parseTraverse(url,doc){
    let urls = [];
    for (let href of allWithHref){
        let elements = doc.getElementsByTagName(href);
        for (let element of elements){
            let link = element.getAttribute('href');
            if (link && link.indexOf('http') == -1){
                urls.push(link);
            }
        }
    }

    for (let src of allWithSrc){
        let elements = doc.getElementsByTagName(src);
        for (let element of elements){
            let link = element.getAttribute('src');
            if (link && link.indexOf('http') == -1){
                urls.push(link);
            }
        }
    }
    urls.push('');
    return urls;
}

function multiFetch(rootUrl,zip,urls){
    return Promise.all(urls.map(function(url) {
        let filename = url;
        if (filename == '')
            filename = 'index.html';
        return fetch(rootUrl + url, {
            method: "GET"
        }).then(response => response.blob()).then(
            blob => zip.file(filename,blob))
    }
    ));
}