# SkyPages
A simple tool to upload webpages to Siacoin's Skynet, done as a part of MIT's 2020 Bitcoin Expo Hackathon.

### How it works:

If we are uploading a github page to Skynet, we first must download the page itself and all of its related resources. We turn that into a virtual zip file, so that we can treat it identically to our zip folder process.

Once we have a zip file, we upload all of the resources to Skynet simulatenously through skynet.net. 

Once all of the files have been uploaded, we replace the original references with skylink references.
We keep the references relative still, though, so that if we can access the webpage at `<WEBPORTAL>/<SKYLINK>`, all of the resources will be available at `<WEBPORTAL>/<RESOURCE1>`. As an example, we can see 2048 available at [Siasky](https://siasky.net/CAAl5W2XQYN3qlQRvIq5G8iz1Jf5jHDwstyWx_Rwd6CmLQ) and at [SiaCDN](https://siacdn.com/CAAl5W2XQYN3qlQRvIq5G8iz1Jf5jHDwstyWx_Rwd6CmLQ).

### Why it's cool

TODO: 
Mention dogfooding with our service, get link to our thingy. Make some screenshots/gifs of it in action.