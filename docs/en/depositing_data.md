<h1>Depositing Data</h1>

Upon logging into FRDR, you are presented with the Data Publication Dashboard. It shows the status of your dataset submissions: In Progress; In Curation; Under Embargo and Published. For those datasets that are In Progress, you have the options to Edit or Delete the dataset. Those datasets that have been Submitted are waiting for curation. Those that are Complete have been accepted into FRDR and are discoverable through search. A new submission can be initiated at any time.

Steps involved in submitting a dataset to FRDR:

* [Selecting a storage group](#selecting-a-storage-group)
* [Select a data publication license](#data-usage-licenses)
* [Add Collaborators to contribute to submission](#add-collaborators)
* [Enter metadata for your data](#entering-metadata)
* [Specify if External Review is needed](#external-dataset-review)
* [Specify an embargo period (if appropriate)](#specifying-an-embargo-period)
* [Transfer dataset to FRDR](#transferring-the-dataset)
* [Review and finalize the submission](#finalizing-the-submission)

You can stop the submission process, save your work, and resume your submission at any time. A [Digital Object Identifier (DOI)](https://www.doi.org/) is assigned as soon as you start a dataset deposit. The DOIs for all in-progress deposits will be shown in your list of incomplete deposits. This will enable you to share a DOI for your dataset with a funder or publisher immediately. Please note that the links for the DOIs will not work until after a data deposit is approved by a curator. 
Once submitted, you will not be able to make changes to the data or metadata. Any change to data or metadata after submitting will need to be done by contacting a curator at [curators@frdr-dfdr.ca](mailto:curators@frdr-dfdr.ca).

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="selecting-a-storage-group">Selecting a Storage Group</h2>

        <div class="mb-3">
            Datasets in FRDR are organized in collections, known as Storage Groups. There are two types of Storage Groups: the Default Storage Group and Special Storage Groups. The default group, <strong>General / Général</strong>, will be preselected upon initiating a data deposit.
        </div>

        <div class="mb-3">
            Special Storage Groups allow institutions, research groups, or special projects to create a collection for their datasets in FRDR. Each Special Storage Group will appear as a repository in the list of <a href="https://www.frdr-dfdr.ca/repo/community/frdr-dfdr">Canadian Research Data Repositories</a> indexed by FRDR. Special Storage Groups may be able to use a personalized deposit template which could, for example, pre-fill metadata elements or make use of additional metadata fields other than the default Dublin Core/DataCite elements. The option to deposit to Special Storage Groups will be limited to authorized users. If you would like a Special Storage Group, or believe you should have access to an existing Special Storage Group, please contact <a href="mailto:support@frdr-dfdr.ca">support@frdr-dfdr.ca</a>.
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="data-usage-licenses">Data usage licenses</h2>

        <div class="mb-3">
            Users submitting a dataset will have a choice of licensing terms regarding the use of their data by others. The license terms will be displayed on the landing page of FRDR datasets and included in the metadata record.
        </div>

        <div class="mb-3">
            Submitters will be required to choose a license. The following are the default options:
        </div>

        <div class="mb-3">
            <ul>
                <li><a href="https://creativecommons.org/publicdomain/zero/1.0/">Creative Commons Public Domain Dedication (CC0 1.0)</a></li>
                <li><a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International (CC BY 4.0)</a></li>
            </ul>
        </div>

        <div class="mb-3">
            The following additional licenses may also be selected from the "Advanced" section:
        </div>

        <div class="mb-3">
            <ul>
                <li><a href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)</a></li>
                <li><a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC 4.0)</a></li>
                <li><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 (CC BY-NC-SA 4.0)</a></li>
                <li><a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 CC BY-NC-ND 4.0</a></li>
            </ul>
        </div>

        <div class="mb-3">
            Note that a Curator may ask why you are unable to make use of the default licenses. For other licensing terms not found here, or for customized data use licenses, contact <a href="mailto:support@frdr-dfdr.ca">support@frdr-dfdr.ca</a> .
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="add-collaborators">Add Collaborators</h2>

        <div class="mb-3">
            Adding collaborators is a great way for multiple people to enter metadata and upload files for a submission. You can only invite someone to contribute to a submission if they have logged into FRDR at least once. You will need the email address they used to register with FRDR, which they can find on their profile page.
        </div>

        <div class="mb-3">
            <a href="/docs/img/screenshots/depositing_data/ProfilePage.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/depositing_data/ProfilePage.png" alt="Screenshot showing Profile page under Account at top of page and where email is on the profile page" class="screenshot"/>
            </a>
        </div>

        <div class="mb-3">
            To add a collaborator, start or resume a submission from the Data Publication Dashboard. Navigate to the Collaborate step, enter their email address, and click on the "Invite" button. They will receive an email notification with a link to accept your invitation.
        </div>

        <div class="mb-3">
            By default they will be able to edit metadata and upload files. You can change their permissions by changing the check boxes below their email address.
        </div>

        <div class="mb-3">
            <a href="/docs/img/screenshots/depositing_data/InviteAdd.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/depositing_data/InviteAdd.png" alt="Screenshot highlighting where to add collaborators" class="screenshot"/>
            </a>
        </div>

        <div class="mb-3">
            Collaborators can also accept your invitation from their own Data Publication Dashboard by logging in and clicking "Accept" next to the dataset title. You will receive an email when your invitation has been accepted or rejected.
        </div>

        <div class="mb-3">
            <a href="/docs/img/screenshots/depositing_data/InviteAccept.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/depositing_data/InviteAccept.png" alt="Screenshot showing accept button on publication dashboard that will accept an invite" class="screenshot"/>
            </a>
        </div>

        <div class="mb-3">
            After accepting the invitation, collaborators will be able to resume the submission from the Data Publication Dashboard and edit the submission. Although multiple collaborators can work on the same submission, <strong>only one person should add or edit metadata at a time</strong>. The last person to save will overwrite any metadata changes made by others.
        </div>

        <div class="mb-3">
            You can invite additional collaborators or remove collaborators at any point during the submission process. To do so, click on the "Collaborate" button at the top of the page after resuming an in-progress submission. Please note that collaborators cannot invite additional people to collaborate, only the original submission creator can add and remove people via the Collaborate tab.
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="entering-metadata">Entering metadata</h2>

        <div class="mb-3">
            Metadata, such as title, authors and their affiliations, keywords, dates, and description, are used to describe your dataset. Metadata helps others to discover and reuse the data. The more metadata that you provide, the easier it will be for someone else to discover and reuse the data. 
        </div>

        <div class="mb-3">
            A metadata submission form is provided to guide you through the process of entering metadata. Please refer to the section <a href="/docs/en/describing_your_data/">Describing your data</a> for detailed information on how to fill out the contents of each field. While working in the submission form, you can view more information about each metadata field by hovering your mouse pointer over the label.
        </div>

        <div class="mb-3">
            You can navigate forward and backwards through the metadata submission form by using the buttons at the bottom or top of the page. When you navigate to another screen within the metadata submission form, the metadata from your current page will be automatically saved.
        </div>

        <div class="mb-3">
            <a href="/docs/img/screenshots/depositing_data/Navbar.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/depositing_data/Navbar.png" alt="Screenshot showing menu bar at top of submitting that lets you save metadata when switching to different tabs" class="screenshot"/>
            </a>
        </div>

        <div class="mb-3">
            <a href="/docs/img/screenshots/depositing_data/PrevSaveNext.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/depositing_data/PrevSaveNext.png" alt="Screenshot buttons at bottom of submitting that lets you save metadata" class="screenshot"/>
            </a>
        </div>

        <div class="mb-3">
            <strong>Required fields</strong> are marked with an asterisk.
        </div>

        <div class="mb-3">
            Some metadata fields are <strong>repeatable</strong>. For these fields, you can add additional entries by clicking “Add More” and remove entries by clicking “Remove Entry”.
        </div>

        <div class="mb-3">
            <a href="/docs/img/screenshots/depositing_data/RepeatableMetadata.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/depositing_data/RepeatableMetadata.png" alt="Screenshot showing Contributors field that lets you add more contributors with add more button" class="screenshot"/>
            </a>
        </div>

        <div class="mb-3">
            Other fields will allow you to add multiple values within the field by entering a semicolon (;) or pressing the Enter key. For example, you can add multiple author affiliations for the same author:
        </div>

        <div class="mb-3">
            <a href="/docs/img/screenshots/depositing_data/Tags.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/depositing_data/Tags.png" alt="Screenshot with author affiliations tag that can have none, one or multiple entries" class="screenshot"/>
            </a>
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="external-dataset-review">External Dataset Review</h2>
        <div class="mb-3">
            All datasets submitted to FRDR undergo an internal review process called curation before they are approved for publication. Optionally, you may choose to share your dataset with an external reviewer, such as a journal editor or a colleague, before it is made publicly available. 
        </div>

        <div class="mb-3">
            To opt in for external review, on the “Access” tab of the submission interface, select “Yes” at the question "Will this dataset need a review period?" You will be required to add an "embargo date" and an "embargo reason", for example, “Dataset will be shared for external review”. The embargo will protect your data files from public access throughout the review process, but you may provide select access to your data by inviting reviewers.
        </div>

        <div class="mb-3">
            <a href="/docs/img/screenshots/depositing_data/ExternalReview.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/img/screenshots/depositing_data/ExternalReview.png" alt="Screenshot of the external review question" class="screenshot"/>
            </a>
        </div>

        <div class="mb-3">
            Your dataset will be placed under embargo after the curation process is completed, at which time you can invite external reviewers to access your submission. External reviewers do not require accounts in FRDR. For information on how to invite reviewers, please see <a href="/docs/en/external_review">External Dataset Review</a> documentation.
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="specifying-an-embargo-period">Specifying an embargo period</h2>

        <div class="mb-3">
            If a dataset needs to be protected for a period of time, perhaps due to restrictions from a publisher or funding agency, you can set an embargo and specify the date on which the data will automatically become accessible. During the embargo period, your data files will not be visible or available for download.
        </div>

        <div class="mb-3">
            An embargo will always protect your data files from view and download, but you can choose whether the metadata that describes your dataset (title, authors, description, etc.) is publicly accessible or not. Under Advanced → Metadata Access, you can choose whether the metadata is:
        </div>

        <div class="mb-3">
            <ul>
                <li><i>Searchable and Viewable</i>: Your dataset will be discoverable in FRDR and other web search results. Your DOI will lead to your data landing page, and the metadata that describes your dataset will be visible. Your data files will not be visible or downloadable. This is the default option.</li>
                <li><i>Viewable with a link</i>: Your dataset will not be discoverable in search results. Your data landing page and the metadata that describe your dataset can only be accessed by using the DOI or landing page URL.  Your data files will not be visible or downloadable.</li>
                <li><i>Viewable only to me</i>: Your dataset will not be discoverable in search results. Your data landing page and the metadata that describes your dataset are not public and can only be viewed by you and your collaborators when you log in to FRDR. Your data files will not be visible or downloadable.</li>
            </ul>
        </div>

        <div class="mb-3">
            Submitters will receive a notification one month before the embargo expires. This includes an option to request an extension. Failure to respond results in the automatic release of the embargoed dataset on the specified date.
        </div>

        <div class="mb-3">
            FRDR allows embargoes of up to one year. All other embargo requests must be approved by FRDR’s service manager. Please contact <a href="mailto:support@frdr-dfdr.ca">support@frdr-dfdr.ca</a> if you need to request an extended embargo.
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="requesting-long-term-preservation">Requesting Long-Term Preservation</h2>

        <div class="mb-3">
            In order to ensure all datasets submitted to FRDR are preserved where appropriate, FRDR has implemented an appraisal process to ensure long-term access is managed responsibly and sustainably. All datasets deposited with FRDR will be considered for long-term preservation.
        </div>

        <div class="mb-3">
            As the depositor, you may participate in the appraisal process by answering the optional preservation question during the submission process: "Do you intend for this dataset to be preserved longer than 10 years?" (Y/N). You may also leave a comment describing, for example, your dataset’s potential ongoing social, scientific, or historical value.
        </div>

        <div class="mb-3">
            If you are uncertain about the long-term value of your dataset, you may skip this question. Please be assured that your dataset will still be appraised for long-term preservation independently by the FRDR curation team in consultation with FRDR’s Preservation Coordinator. You are welcome to reach out to <a href="mailto:support@frdr-dfdr.ca">support@frdr-dfdr.ca</a> if you have any questions about this process.
        </div>
    </div>
</div>

<h2 id="transferring-the-dataset">Transferring the dataset</h2>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h3>Using Browser Upload (Small datasets)</h3>

        <div class="mb-3">
            This section covers the following activities:
        </div>

        <ul>
            <li>How to upload files using your web browser</li>
            <li>How to delete files</li>
        </ul>

        <h4>How to upload files using your web browser</h4>

        <h5>Upload with File Browser</h5>

        <ul>
            <li>Click on the button "Click to choose files" and use the file navigator to find the file you want to upload.</li>
            <li>Click on the open button to start uploading the file</li>
            <li>You can choose more than one file by clicking on the first file, holding the shift key and clicking on the last file you want to upload. If you need to upload several different files, skipping ones in between, hold the ctrl key on Windows or the command key on Mac and click on the files you wish to upload.</li>
        </ul>

        <a href="/docs/img/screenshots/depositing_data/ClickToUpload.png" class="screenshot-lightbox">
            <img src="/docs/img/screenshots/depositing_data/ClickToUpload.png" alt="Screenshot of button to click on to upload files" style="max-width: 160px"/>
        </a>

        <ul>
            <li>There will first be a progress bar for the upload. This may be very fast if the file is small.</li>
        </ul>

        <a href="/docs/img/screenshots/depositing_data/Uploading.png" class="screenshot-lightbox">
            <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
            <img src="/docs/img/screenshots/depositing_data/Uploading.png" alt="Screenshot showing progress bar of file still being uploaded" class="screenshot"/>
        </a>

        <ul>
            <li>Then there will be a spinning icon if the file has been uploaded successfully and the system is now processing the file.</li>
        </ul>

        <a href="/docs/img/screenshots/depositing_data/UploadProcessing.png" class="screenshot-lightbox">
            <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
            <img src="/docs/img/screenshots/depositing_data/UploadProcessing.png" alt="Screenshot of file being processed after upload" class="screenshot"/>
        </a>

        <ul>
            <li>The spinning icon will disappear and then a delete icon will be showing after the file name when the file has been completely uploaded. </li>
        </ul>

        <a href="/docs/img/screenshots/depositing_data/UploadFinished.png" class="screenshot-lightbox">
            <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
            <img src="/docs/img/screenshots/depositing_data/UploadFinished.png" alt="Screenshot of file finished uploading and processing" class="screenshot"/>
        </a>

        <ul>
            <li>If all files have been uploaded you will be able to move onto the next step.</li>
        </ul>

        <h5>Uploading folders or many files using drag and drop</h5>

        <ul>
            <li>To upload a folder open your file navigator.</li>
            <li>Find the files or folders that you wish to upload.</li>
            <li>Drag them onto your web browser into the dotted area with the text "Drag and drop files here" to begin uploading them.</li>
        </ul>

        <a href="/docs/img/screenshots/depositing_data/DragAndDrop.png" class="screenshot-lightbox">
            <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
            <img src="/docs/img/screenshots/depositing_data/DragAndDrop.png" alt="Screenshot of drag and drop area for uploading files" class="screenshot"/>
        </a>

        <ul>
            <li>There will first be a progress bar for the uploading of each file. This may be very fast if the file is small.</li>
        </ul>

        <a href="/docs/img/screenshots/depositing_data/Uploading.png" class="screenshot-lightbox">
            <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
            <img src="/docs/img/screenshots/depositing_data/Uploading.png" alt="Screenshot progress bar after file drag and drop" class="screenshot"/>
        </a>

        <ul>
            <li>Then there will be a spinning icon if the file has been uploaded successfully and the system is now processing the file.</li>
        </ul>

        <a href="/docs/img/screenshots/depositing_data/UploadProcessing.png" class="screenshot-lightbox">
            <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
            <img src="/docs/img/screenshots/depositing_data/UploadProcessing.png" alt="Screenshot showing processing status of file after drag and drop" class="screenshot"/>
        </a>

        <ul>
            <li>The spinning icon will disappear and then a delete icon will be showing after the file name when the file has been completely uploaded. </li>
        </ul>

        <a href="/docs/img/screenshots/depositing_data/UploadFinished.png" class="screenshot-lightbox">
            <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
            <img src="/docs/img/screenshots/depositing_data/UploadFinished.png" alt="Screenshot of file being finished uploading" class="screenshot"/>
        </a>

        <ul>
            <li>If all files have been uploaded you will be able to move onto the next step.</li>
        </ul>
    </div>
</div>

<hr />

<div class="card-shadow mb-3">
    <div class="card-body">
        <h3 id="using-globus-to-upload-dataset">Using Globus to Upload Dataset</h3>

        <div class="mb-3">
            <div class="video-wrap">
                <a href="https://www.youtube.com/watch?v=U4Qaia4KZAU&list=PLX9EpizS4A0suoSV2N0nn9parl96xHPkz&cc_lang_pref=en&cc_load_policy=1" target="_blank">
                  <div class="video-play-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" viewbox="0 0 150 150" version="1.1">
                        <path stroke="#cccccc" stroke-width="2px" d="M150,0A150,150,0,1,0,300,150,150,150,0,0,0,150,0Zm0,290A140,140,0,1,1,290,150,140,140,0,0,1,150,290Z" transform="matrix(0.5,0,0,0.5,0,0)"></path>
                        <polygon stroke="#cccccc" stroke-width="2px" points="225 150 110 80 110 225 225 150" transform="matrix(0.5,0,0,0.5,0,0)"></polygon>
                    </svg>
                  </div>
                  <img class="video-placeholder" src="/docs/img/video_placeholders/en/upload_dataset.png" alt="Video preview: Upload a dataset">
                </a>
            </div>
        </div>

        <div class="mb-3">
            This section covers the following activities:
        </div>

        <ul>
            <li>How to transfer files using Globus</li>
            <li>Check status of transfer</li>
            <li>Canceling an in-progress transfer</li>
            <li>Deleting a file that has already been transferred</li>
        </ul>

        <div class="mb-3">
            If you have a very large dataset (greater than a few Gigabytes) or many files (several thousand files) we would recommend using <a href="https://www.globus.org/globus-connect">Globus Connect</a> to efficiently and reliably manage these larger datasets.
        </div>

        <div class="mb-3">
            <i><strong>Note: If you are transferring from your notebook or desktop you will need to install <a href="https://www.globus.org/globus-connect-personal">Globus Connect Personal</a>. Ensure that Globus Connect Personal is running so that you will have access to your data.</strong></i>
        </div>

        <div class="mb-3">
            Globus moves files and directories between two endpoints: the <strong>source endpoint</strong> running at your end and FRDR, the <strong>destination endpoint</strong>.
        </div>

        <ul>
            <li>Choose your files and initiate the transfer</li>
            <li>After initiating the transfer, you can close the window and return to FRDR</li>
            <li>Globus will email you when the transfer is complete; very large datasets could take hours to transfer</li>
        </ul>

        <h4>How to transfer files using Globus</h4>

        <ol>
            <li>On the "Transfer Data" tab, click "Globus File Transfer" button to access the Globus file transfer page<br/>
                <a href="/docs/img/screenshots/depositing_data/GlobusFileTransferButton.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                    <img src="/docs/img/screenshots/depositing_data/GlobusFileTransferButton.png" alt="Screenshot of highlighting Globus File Transfer button on Transfer Data tab" class="screenshot"/>
                </a>
            </li>
            <li>Click on the "Transfer or Sync to" link on the right side of the screen. <br/>
                <a href="/docs/img/screenshots/depositing_data/TransferToButton.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                    <img src="/docs/img/screenshots/depositing_data/TransferToButton.png" alt="Screenshot Globus Web UI with Transfer or Sync to button highlighted" class="screenshot"/>
                </a>
            </li>
            <li>FRDR is on the left, we need to choose a source for files on the right. Click on the top right textbox by the magnifying glass to search for an endpoint to find files. <br/>
                <a href="/docs/img/screenshots/depositing_data/ChooseEndpointTextbox.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                    <img src="/docs/img/screenshots/depositing_data/ChooseEndpointTextbox.png" alt="Screenshot of Globus Web UI showing Collection Search text field in top right" class="screenshot"/>
                </a>
            </li>
            <li>Start typing the name of the Globus endpoint containing your files. This could be the name you gave your notebook or desktop, a Compute Canada hosting site (e.g. Cedar, Graham, Niagra or Beluga) or another Globus endpoint location (e.g. a lab or institutional server)<br/>
                <a href="/docs/img/screenshots/depositing_data/ChooseEndpoint.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                    <img src="/docs/img/screenshots/depositing_data/ChooseEndpoint.png" alt="Screenshot of Globus Web UI showing results of search for collection" class="screenshot"/>
                </a>
            </li>
            <li>Find and select the files necessary for your dataset. You can Shift-click or Ctrl-click to build your selection of files.<br/>
                <a href="/docs/img/screenshots/depositing_data/ProfilePage.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                    <img src="/docs/img/screenshots/depositing_data/FileHighlighted.png" alt="Screenshot of Globus Web UI showing files highlighted and ready for transfer" class="screenshot"/>
                </a>
            </li>
            <li>Click on the Transfer and Sync Options button at the bottom middle of the screen.<br/>
                <a href="/docs/img/screenshots/depositing_data/TransferAndSyncButton.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                    <img src="/docs/img/screenshots/depositing_data/TransferAndSyncButton.png" alt="Screenshot of Globus Web UI with Transfer & Sync Options highlighted at bottom of screen" class="screenshot"/>
                </a>
            </li>
            <li>Label this Transfer: enter a name for the transfer activity that will make it easy to identify.<br/>
                <a href="/docs/img/screenshots/depositing_data/TransferAndSync.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                    <img src="/docs/img/screenshots/depositing_data/TransferAndSync.png" alt="Screenshot of Globus Web UI showing Transfer & Sync options at the bottom of the screen" class="screenshot"/>
                </a>
            </li>
            <li>Select Transfer Settings: provides various options to control file checking and security. In many cases, the default settings will be appropriate. Contact <a href="mailto:support@frdr-dfdr.ca">support@frdr-dfdr.ca</a> if you require assistance understanding which additional transfer settings may be needed for your dataset.</li>
             <li>Initiate the transfer by clicking on the blue start button at the bottom of the page. You can initiate as many transfers as needed during a single session. This may be required if, for example, you want to transfer files that live in different folders or source endpoints. <br/> 
                 <a href="/docs/img/screenshots/depositing_data/StartTransfer.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                     <img src="/docs/img/screenshots/depositing_data/StartTransfer.png" alt="Screenshot of Globus Web UI with Start button highlighted in bottom right" class="screenshot"/>
                 </a>
             </li>
            <li>The status of the transfer will be indicated on the left hand side under activity, but the transfer will proceed independently and you can close that window and return to FRDR to verify and complete your submission. <br/>
                <a href="/docs/img/screenshots/depositing_data/Activity.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                    <img src="/docs/img/screenshots/depositing_data/Activity.png" alt="Screenshot of Globus Web UI with Activity button highlighted on left hand side" class="screenshot"/>
                </a>
            </li>
        </ol>

        <h4>Check status of transfer</h4>
        <ol>
            <li>Go to the <a href="https://globus.frdr.ca/activity?locale=en-us">Activity page</a> .</li>
            <li>Click on the transfer in the list (its title will be the label if you gave it one).</li>
            <li>This page will give you the current status of the transfer (i.e., the number of files transferred, how much data has been transferred, or whether an error has occurred ).</li>
            <li>For a timeline click on the "Event Log" tab.<br/>
                <a href="/docs/img/screenshots/depositing_data/EventLog.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                    <img src="/docs/img/screenshots/depositing_data/EventLog.png" alt="Screenshot of Globus Web UI showing the details of a transfer in the Event Log" class="screenshot"/>
                </a>
            </li>
        </ol>

        <h4>Canceling an in-progress transfer</h4>

        <ol>
            <li>Go to the <a href="https://globus.frdr.ca/activity?locale=en-us">Activity page</a>.</li>
            <li>In the list of transfers, find the correct transfer based on the label</li>
            <li>Click on the X button <br/>
                <a href="/docs/img/screenshots/depositing_data/CancelTransfer.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                    <img src="/docs/img/screenshots/depositing_data/CancelTransfer.png" alt="Screenshot of Globus Web UI list of transfers with a X button highlighted on right hand side to cancel transfer" class="screenshot"/>
                </a>
            </li>
            <li>Click on the red terminate transfer button.</li>
        </ol>

        <h4>Deleting a file that has already been transferred</h4>

        <ol>
            <li>Navigate to the dataset submission, located in the "In Progress" tab of the <a href="/repo/PublishDashboard" target="_blank">Data Publication Dashboard</a>. Click "Resume" to get into the submission.</li>
            <li>Click on the "Transfer Data" tab (if not already on it.)</li>
            <li>Click the "Transfer Dataset" button to open the transfer window.</li>
            <li>Locate the file or directory that you want to delete. Click once on the file or directory to highlight it.</li>
            <li>Click the “Delete Selected” button on the right hand side of the screen (or middle if both the source and destination are open) and confirm it by clicking on the delete button on the resulting screen.  <br/>
                <a href="/docs/img/screenshots/depositing_data/DeleteSelected.png" class="screenshot-lightbox">
                    <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                    <img src="/docs/img/screenshots/depositing_data/DeleteSelected.png" alt="Screenshot of Globus Web UI with button Delete Selected highlighted in the middle of the screen" class="screenshot"/>
                </a>
            </li>
            <li>Repeat as needed until all of the files or folders have been deleted.</li>
        </ol>

        <div class="mb-3">
            Submitting a dataset is not an instantaneous process. Several of the steps can take a significant amount of time:
        </div>

        <ul>
            <li>Transferring a really large dataset might take hours or longer;</li>
            <li>A curator will be assigned to review and decide whether to approve your submission;</li>
            <li>After approval, it will take up to 24 hours for the submission to be indexed and discoverable in FRDR's Search.</li>
        </ul>

        <div class="mb-3">
            If possible, it is a good idea to retain a copy of your data after submitting. While FRDR does automatically create backups for all datasets, this process may take up to 24 hours to complete.
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="finalizing-the-submission">Finalizing the Submission</h2>
        <div class="mb-3">
            After the data transfer is complete, you have an opportunity to review the metadata and list of files before submitting the dataset for publication. Return to any of the previous tabs if you want to make changes to the metadata or data files. Once you finalize the submission, changes to metadata and files can only be done by a curator.
        </div>
        <div class="mb-3">
            To submit the dataset, click the “Finish” button. Your submission will be reviewed by a curator before it is published in FRDR. Once a curator has finished reviewing your submission, you will be notified by email and the status will update to ‘Complete’ in your Publication Dashboard.
        </div>
        <div class="mb-3">
            We recommend that any publication or reference to your dataset includes the DOI.
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="dois">DOIs</h2>
        <div class="mb-3">
            DOIs are reserved at the beginning of the submission process. You may share your DOI with journal publishers or research offices at any point; however, the DOI will not be a registered, active link until your dataset is reviewed by FRDR curators and approved for publication.
        </div>
    </div>
</div>
