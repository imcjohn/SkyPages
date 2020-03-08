# SkyPages
A simple tool to upload webpages to Siacoin's Skynet, done as a part of MIT's 2020 Bitcoin Expo Hackathon.

### How it works:

If we are uploading a github page to Skynet, we first must download the page itself and all of its related resources. We turn that into a virtual zip file, so that we can treat it identically to our zip folder process.

Once we have a zip file, we upload all of the resources to Skynet simulatenously through skynet.net. 

Once all of the files have been uploaded, we replace the original references with skylink references.
We keep the references relative still, though, so that if we can access the webpage at `<WEBPORTAL>/<SKYLINK>`, all of the resources will be available at `<WEBPORTAL>/<RESOURCE1>`. As an example, we can see 2048 available at [Siasky](https://siasky.net/CAAl5W2XQYN3qlQRvIq5G8iz1Jf5jHDwstyWx_Rwd6CmLQ) and at [SiaCDN](https://siacdn.com/CAAl5W2XQYN3qlQRvIq5G8iz1Jf5jHDwstyWx_Rwd6CmLQ).

### Why it's cool

While Sia, especially through the Skynet webportals, has always been an extremely powerful tool to share decentralized files in an efficent manner, there was evidently more room to improve in the relm of decentralized websites. Before our tool, uploading your website to Skynet would be an arduous process, as you whould have to upload files one-by-one, rewriting links as you go. Now, we have made the website upload as simple as a single button click, with all of the difficult work abstracted away by our Javascript libraries. 

In order to demonstrate the capability of our tool, we have create several proof of concept websites, including a copy of SkyPages uploaded to the Skynet network!

### Examples
#### Basic Demo:
Original Page: https://imcjohn.github.io/SkyPages/demos/simple_demo/ \\
Siasky Link: https://siasky.net/AACaBCKg29AIXVDyci0YUAoChdI0niYUwx3SkbnUH6yBdA

#### 2048:
Original Page: https://hczhcz.github.io/2048/20ez/ \\
Siasky Link: https://siasky.net/CAAl5W2XQYN3qlQRvIq5G8iz1Jf5jHDwstyWx_Rwd6CmLQ\

#### SkyPages:
Original Page: https://imcjohn.github.io/SkyPages/frontend/ \\
Siasky Link: https://siasky.net/CABMLShr4jkikvB15sd9cIP8LrfrmVePO24NzZE7lM5VTQ
