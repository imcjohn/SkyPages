/**
 *
 * @param url {String} url to Github Page
 * @returns {Promise} of a JSZip zipfile
 */
function get_pages(url) {

}

/**
 *
 * @param element
 */
function get_zip(element) {
    if (element.files) {
        file = element.files[0]
        return JSZip().loadAsync(file)
    } else {
        return Promise.reject("No file uploaded")
    }

}

/**
 *
 * @param zip JSZip of all elements
 * @returns {Promise} of a Result
 */
function upload_zip(zip) {
    
}

/**
 *
 */
class Result {
    constructor(skylink, dependencies) {
        this.skylink = skylink;
        this.dependencies = dependencies;
    }
}

