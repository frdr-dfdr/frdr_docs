<h1>Downloading Datasets</h1>

<h2 id="finding-datasets">Finding Datasets</h2>
If you do not have a direct link to a FRDR-hosted dataset you can browse through available datasets using the <a href="/repo/search">FRDR Discovery</a>.

<hr />

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="finding-the-file-listing-for-a-dataset-and-downloading-with-a-web-browser">Finding the File Listing for a Dataset and Downloading with a Web Browser</h2>

        <div class="mb-3">
            The file browsing widget for each dataset is located near the bottom of the data landing page.
        </div>

        <a href="/docs/img/screenshots/downloading_data/WebDownload.png" class="screenshot-lightbox">
            <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
            <img src="/docs/img/screenshots/downloading_data/WebDownload.png" alt="Screenshot showing file browsing widget on FRDR item landing page." class="screenshot"/>
        </a>

        <div class="mb-3">
            To download data through a web browser, you can either click on the file name to download a specific file to your device, or you can use the ‘Download as Zip’ function to create a Zip file with the data you want to access.
        </div>

        <div class="mb-3">
            If you need to create a stable download link for an individual file, for example, to include in a publication or in a script, please see <a href="#creating-individual-download-links">Creating individual download links</a> below.
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h3 id="downloading-datasets-as-zip">Downloading Datasets as Zip</h3>

        <div class="mb-3">
            To download the full dataset, or a subset of files and folders, via your web browser, you can request that FRDR Zip the contents for you. No FRDR account or registration is required, but if you are not signed in to an existing FRDR account, you will be asked to provide a valid email address so FRDR can send you a link to access the data.
        </div>

        <h4>To get started:</h4>

        <div class="mb-3">
            To get started, click the “Download as Zip” button below the file listing. If you are signed into your FRDR account, we will use the email we have on file, and you will be directed to the download request form. If you are not signed in to FRDR, please provide an email address and click “Request”. Check your email for a message from FRDR support, and click the link provided to open the download request form.
        </div>

        <h4>Download Request Form / Create your Zip file:</h4>

        <div class="mb-3">
            Select the files and folders you want to download. If you choose a folder, FRDR will automatically include all of the contents (files and sub-folders) in your Zip archive. You can navigate into any folder to select or deselect items as necessary. FRDR will automatically include the dataset LICENSE, a recommended citation, a README file from the top-level directory, and the names and checksums of all files in the dataset, for your reference.
        </div>

        <div class="mb-3">
            We have set a 20 GB limit per download request. As you select files and folders, FRDR will calculate the approximate size of your request and display it next to the “Create Zip File” button. If you need to download more than 20 GB, we recommend splitting your request into multiple Zip files or using Globus Transfer to download the dataset.
        </div>

        <div class="mb-3">
            When you have completed your selection, click “Create Zip File”. If your request was submitted successfully, you will see a message with next steps. If you receive an error message or encounter another issue, please contact <a href="mailto:support@frdr-dfdr.ca">support@frdr-dfdr.ca</a> for assistance.
        </div>

        <h4> Download your Zip file:<h4>

        <div class="mb-3">
            When it is ready to download, FRDR will send you an email with a link to access your Zip file, or you can click “Return to Download Request Form” and refresh/reload the page to check the status of your request (requested, processing, or complete). Processing time will vary based on the number and size of files selected.
        </div>

        <div class="mb-3">
            When your Zip file is ready to download, the file name will be hyperlinked under “Current Zip files for this dataset”. The Zip file you requested will remain accessible for 14 days at the link FRDR provided, after which it will be removed from our system.
        </div>

        <div class="mb-3">
            To request another Zip file for the same dataset, you must first delete any active/current Zip file.
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h3>Creating individual download links</h3>

        <div class="mb-3">
            FRDR mirrors data on multiple servers. In order to generate a stable download link for an individual file, which will work regardless of which server we are pointing to, right-click on the file name (control-click on a Mac), select “Copy Link Address” and paste the result. The file name will have a path similar to this: https://www.frdr-dfdr.ca/repo/files/1/published/publication_NNN/submitted_data where “NNN” will be replaced by a publication number unique to the dataset in FRDR.
        </div>

        <div class="mb-3">
            While these links are relatively stable, they are not intended to replace the dataset DOI. The DOI is a unique, persistent identifier, which will always lead to a record of your dataset. If you plan to include a download link in a publication, a script file, or on your website, we recommend that you also reference the dataset DOI. If you have questions, or if you need to generate stable download links for a large number of files in a dataset, please contact the FRDR support desk for assistance <a href="(mailto:support@frdr-dfdr.ca">upport@frdr-dfdr.ca</a>.
        </div>
    </div>
</div>

<hr />

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="downloading-datasets-with-globus-transfer">Downloading Datasets with Globus Transfer</h2>

        <div class="mb-3">
            Globus is a free software that allows for reliable, high-speed file transfers. It is the best method for downloading large amounts of data from FRDR. To use Globus, you either need access to a server with Globus pre-installed, such as most Digital Research Alliance of Canada <a href="https://alliancecan.ca/en/services/advanced-research-computing/federation/national-host-sites">national host sites</a>, or you will need to set up your own Globus account and install <a href="https://www.globus.org/globus-connect-personal">Globus Connect Personal</a> on your device.
        </div>

        <div class="mb-3">
            The video below goes through the detailed steps to get a working Globus Transfer endpoint:
        </div>


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
</div>
</div>
