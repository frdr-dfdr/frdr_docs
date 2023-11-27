The Federated Research Data Repository (FRDR) utilizes [Tableau software](https://www.tableau.com/why-tableau/what-is-tableau) to consolidate and present platform statistics. These statistics are primarily open to the public and can be accessed by navigating to 'Site Metrics' located in the website's header. 

To access metrics for an individual item, use the “View items statistics” button at the bottom of each data landing page. 

## Available Metric

FRDR currently records the following key metrics:
1. **Approved Accounts:** This metric represents the total count of approved user accounts in FRDR, excluding FRDR staff.
2. **Collections:** The total number of non-empty collections hosted by FRDR.
3. **Datasets Published:** This metric represents the total number of datasets published within the FRDR platform.
4. **Data Deposited (TB):** The total storage space consumed by all published datasets in FRDR, measured in terabytes.
5. **Dataset Views:** Total dataset views refer to the aggregate number of times published datasets in FRDR have been accessed or viewed by users.
6. **Files Downloaded:** Total files downloaded represent the cumulative count of times individual data files from published datasets in FRDR have been retrieved or copied by users.

## Data Updates

The dashboards are updated on a monthly basis as part of the monthly production release, occurring after the last Wednesday of each month.

## Downloading Data

Users can easily access the data presented on the dashboards by following these steps:
1. Click on the ![Alt](/docs/img/screenshots/user_metrics/DownloadIcon.png "Download Icon") icon located just below the dashboard. 

<a href="/docs/img/screenshots/user_metrics/MenuBar.png" class="screenshot-lightbox">
    <img src="/docs/img/screenshots/user_metrics/MenuBar.png" alt="Screenshot showing where to find the download icon." class="screenshot"/>
</a>

2. Select your preferred file format for downloading, which includes options such as image, data, PDF, PowerPoint and more.

## Interacting with Graphs

Users can interact with the provided graphs to gain deeper insights. For instance, you can refine the 'Published by Collection' graph to a specific year, or you can customize your view by excluding specific data points or categories.

To revert graphs to their default settings, click the ![Alt](/docs/img/screenshots/user_metrics/RevertIcon.png "Revert Icon") icon just below the dashboard. If you encounter any issues while using our metric dashboards or would like to share feedback or request new metrics, please contact us at [support@frdr-dfdr.ca](mailto:support@frdr-dfdr.ca).


Anyone may use FRDR to search for and download data, but a FRDR account is required to deposit data. You will also need to install and configure Globus connect software if you are sharing or downloading large data files. This section will cover the following topics: [1) Who can deposit in FRDR](before_depositing.md#1-who-can-deposit-in-frdr), [2) Getting a FRDR (and Globus) Account](before_depositing.md#2-getting-a-frdr-and-globus-account), [3) Getting authorization to submit data](before_depositing.md#3-getting-authorization-to-submit), and [4) Getting Globus Connect Software](before_depositing.md#4-getting-globus-connect-software).

## 1. Who can deposit in FRDR?

Faculty members, librarians, and researchers affiliated with Canadian post-secondary institutions and organizations eligible to receive Tri-Agency funds may deposit data in FRDR. Faculty can sponsor 	designates, for example, external collaborators, graduate students, non-research staff, postdoctoral fellows, research assistants, undergraduate students, and visiting faculty, to submit data. Requests for deposit from other Canadian researchers (e.g., government or NGOs) who are not sponsored by a faculty member will be considered on a case-by-case basis.

Please refer to our [Data Submission Policy](/policies/en/data_submission/) for more information. If you are unsure whether you are eligible to deposit in FRDR, please contact [support@frdr-dfdr.ca](mailto:support@frdr-dfdr.ca).

## 2. Getting a FRDR (and Globus) Account

FRDR uses [Globus](https://www.globus.org/data-transfer) to facilitate data transfers and Globus Groups to manage which collection an individual has permission to deposit data into. When you create your FRDR account, you will also create a Globus account.

<div class="video-wrap">
<a href="https://www.youtube.com/watch?v=Amj-RpT_y2c&list=PLX9EpizS4A0suoSV2N0nn9parl96xHPkz&cc_lang_pref=en&cc_load_policy=1" target="_blank">
  <div class="video-play-btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" viewbox="0 0 150 150" version="1.1">
        <path stroke="#cccccc" stroke-width="2px" d="M150,0A150,150,0,1,0,300,150,150,150,0,0,0,150,0Zm0,290A140,140,0,1,1,290,150,140,140,0,0,1,150,290Z" transform="matrix(0.5,0,0,0.5,0,0)"></path>
        <polygon stroke="#cccccc" stroke-width="2px" points="225 150 110 80 110 225 225 150" transform="matrix(0.5,0,0,0.5,0,0)"></polygon>
    </svg>
  </div>
  <img class="video-placeholder" src="/docs/img/video_placeholders/en/get_globus_account.png" alt="Video preview: Get a Globus Account">
</a>
</div>

[Click here](/repo/PublishDashboard) to log in with an existing account or create a new account, and select your institution or Compute Canada from the drop down list. If your institution is not listed, we recommend you sign in with your ORCiD ID.

If the above options do not work for you, [click here to create an account](https://www.globusid.org/create) directly with Globus using your institutional email address, and return to the FRDR [login](/repo/PublishDashboard) page when you have an account.

## 3. Getting Authorization to Submit

The first time you log in to FRDR, you will be asked to provide information about your department (optional), your role within your organization, and your faculty Sponsor (if applicable). This will help us confirm you are eligible to deposit data in FRDR. Once your application is submitted, your account will be verified by FRDR staff. This process may take up to two business days. If you are approved, you will receive an invitation from Globus to deposit. Please accept this invitation (you may need to check your spam folder) and [log in](/repo) to get started. 

## 4. Getting Globus Connect Software

Small datasets can be uploaded directly through the submission interface, but datasets with large files, or a large number of files, must be transferred into FRDR via Globus. This will require [Globus Connect software](https://www.globus.org/globus-connect).

<div class="video-wrap">
<a href="https://www.youtube.com/watch?v=NJYTl3yhRl4&list=PLX9EpizS4A0suoSV2N0nn9parl96xHPkz&cc_lang_pref=en&cc_load_policy=1" target="_blank">
  <div class="video-play-btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" viewbox="0 0 150 150" version="1.1">
        <path stroke="#cccccc" stroke-width="2px" d="M150,0A150,150,0,1,0,300,150,150,150,0,0,0,150,0Zm0,290A140,140,0,1,1,290,150,140,140,0,0,1,150,290Z" transform="matrix(0.5,0,0,0.5,0,0)"></path>
        <polygon stroke="#cccccc" stroke-width="2px" points="225 150 110 80 110 225 225 150" transform="matrix(0.5,0,0,0.5,0,0)"></polygon>
    </svg>
  </div>
  <img class="video-placeholder" src="/docs/img/video_placeholders/en/install_globus.png" alt="Video preview: Install Globus Connect Personal">
</a>
</div>

If your data is on a computer or an external hard drive, follow the steps provided on the [Globus website](https://www.globus.org/globus-connect-personal) to download, install, and configure Globus Connect Personal on your machine.

If your data is on an institutional or laboratory server, contact your network or system administrators to obtain the Globus Endpoint name for the server you are using. A Globus Connect Endpoint is the physical location where your files currently reside. If your institution or laboratory does not have a Globus Endpoint installed on their server, have them contact [support@frdr-dfdr.ca](mailto:support@frdr-dfdr.ca).

For help configuring Globus, please see our [FAQ](faq.md) or contact [support@frdr-dfdr.ca](mailto:support@frdr-dfdr.ca).
