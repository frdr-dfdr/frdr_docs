## Finding Datasets
If you do not have a direct link to a FRDR-hosted dataset you can browse through available datasets using the [FRDR Discovery](/repo/search).

## Finding the File Listing for a Dataset and Downloading with a Web Browser

The file browsing widget for each dataset is located near the bottom of the data landing page.

<a href="/docs/img/screenshots/downloading_data/WebDownload.png" class="screenshot-lightbox">
    <img src="/docs/img/screenshots/downloading_data/WebDownload.png" alt="Screenshot showing file browsing widget on FRDR item landing page." class="screenshot"/>
</a>

Downloading a dataset with a web browser works like downloading any other file from the web. Simply click on the name of the file in FRDR's file browsing widget to download it to your device. Keep in mind, there  are several limitations to using this method:

* Files must be downloaded individually.
* The speed and reliability of web transfers may not be as fast or effective as using Globus to transfer files to your local machine or other endpoint. Depending on your internet speed, we recommend using Globus to download files larger than 5GB and to download datasets with many files.
* Some directories may contain too many files to be listed efficiently in a web browser. The file browsing widget will indicate if the file list is truncated. In this case, click “Download Dataset” to open the Globus file manager screen to view all files in the dataset and the full directory listing.

## Downloading Datasets with Globus Transfer

Globus is a free software that allows for reliable, high-speed file transfers. It is the best method for downloading large amounts of data from FRDR. To use Globus, you either need access to a server with Globus pre-installed, such as most Digital Research Alliance of Canada [national host sites](https://alliancecan.ca/en/services/advanced-research-computing/federation/national-host-sites), or you will need to set up your own Globus account and install [Globus Connect Personal](https://www.globus.org/globus-connect-personal) on your device.

The video below goes through the detailed steps to get a working Globus Transfer endpoint:

<div class="video-wrap">
<a href="https://www.youtube.com/watch?v=PvmFxQyMPlQ&list=PLX9EpizS4A0suoSV2N0nn9parl96xHPkz&index=3&cc_lang_pref=en&cc_load_policy=1" target="_blank">
  <div class="video-play-btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" viewbox="0 0 150 150" version="1.1">
        <path stroke="#cccccc" stroke-width="2px" d="M150,0A150,150,0,1,0,300,150,150,150,0,0,0,150,0Zm0,290A140,140,0,1,1,290,150,140,140,0,0,1,150,290Z" transform="matrix(0.5,0,0,0.5,0,0)"></path>
        <polygon stroke="#cccccc" stroke-width="2px" points="225 150 110 80 110 225 225 150" transform="matrix(0.5,0,0,0.5,0,0)"></polygon>
    </svg>
  </div>
  <img class="video-placeholder" src="/docs/img/video_placeholders/en/download_dataset.png" alt="Video preview: How to download Datasets from FRDR.">
</a>
</div>
