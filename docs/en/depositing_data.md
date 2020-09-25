
## Dashboard
Upon logging into FRDR, you are presented with the Data Publication Dashboard. It shows the status of your dataset submissions: In Progress; Submitted; and Complete. For those datasets that are In Progress, you have the options to Resume, View, or Remove the submission. Those datasets that have been Submitted are waiting for curation. Those that are Complete have been accepted into FRDR and are discoverable through search.

A new submission can be initiated at any time.

## Overview of Depositing
Steps involved in making a submission in FRDR:

* [Choose a storage group for submission](#storage-groups-in-frdr)
* [Select a data publication license](#data-usage-licenses)
* [Add Collaborators to contribute to submission](#add-collaborators)
* [Enter metadata for your data](#entering-metadata)
* [Specify an embargo period (if appropriate)](#specifying-an-embargo-period)
* [Transfer dataset to FRDR](#transferring-the-dataset)
* [Review and finalize the submission](#finalizing-the-submission)

You can stop the submission process, save your work, and resume your submission at any time. A [Digital Object Identifier (DOI)](https://www.doi.org/) is assigned as soon as you start a dataset deposit. The DOIs for all in-progress deposits will be shown in your list of incomplete deposits. This will enable you to share a DOI for your dataset with a funder or publisher immediately. Please note that the links for the DOIs will not work until after a data deposit is approved by a curator. 
Once submitted, you will not be able to make changes to the data or metadata. Any change to data or metadata after submitting will need to be done by contacting a curator at [curators@frdr.ca](mailto:curators@frdr.ca).

## Storage Groups in FRDR
Datasets deposited into FRDR are stored on Canadian servers and in general will be deposited into the Default Storage Group. The default group will be preselected upon initiating a data deposit.

There is also an option to create Special Storage Groups. Institutions, research groups, or special projects may want to do so in order to create a personalized deposit template which could, for example, pre-fill metadata elements or make use of metadata standards other than the default Dublin Core/DataCite standards. Special Storage Groups will only be visible to users who are authorized for depositing to them. If you would like a Special Storage Group, or believe you should have access to an existing Special Storage Group, please contact [support@frdr-dfdr.ca](mailto:support@frdr-dfdr.ca).

## Data usage licenses
Users submitting a dataset will have a choice of licensing terms regarding the use of their data by others. The license terms will be displayed on the landing page of FRDR datasets and included in the metadata record.

Submitters will be required to choose a license. The following are the default options:

* [Creative Commons Public Domain Dedication (CC0 1.0)](https://creativecommons.org/publicdomain/zero/1.0/) 
* [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)

The following additional licenses may also be selected from the "Advanced" tab:

* [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/)
* [Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/)
* [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
* [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 (CC BY-NC-ND 4.0)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

Note that a Curator may ask why you are unable to make use of the default licenses. For other licensing terms not found here, or for customized data use licenses, contact [support@frdr-dfdr.ca](mailto:support@frdr-dfdr.ca).

## Add Collaborators
Adding collaborators is a great way for multiple people to enter metadata and upload files for a submission. You can only invite someone to contribute to a submission if they have logged into FRDR at least once. You will need the email address they used to register with FRDR, which they can find on their profile page.

<a href="/docs/img/screenshots/depositing_data/ProfilePage.png" class="screenshot-lightbox">
    <img src="/docs/img/screenshots/depositing_data/ProfilePage.png" alt="Screenshot showing Profile page under Account at top of page and where email is on the profile page" class="screenshot"/>
</a>

To add a collaborator, start or resume a submission from the Data Publication Dashboard. Navigate to the Collaborate step, enter their email address, and click on the "Invite" button. They will receive an email notification with a link to accept your invitation.

By default they will be able to edit metadata and upload files. You can change their permissions by changing the check boxes below their email address.

<a href="/docs/img/screenshots/depositing_data/InviteAdd.png" class="screenshot-lightbox">
    <img src="/docs/img/screenshots/depositing_data/InviteAdd.png" alt="Screenshot" class="screenshot"/>
</a>

Collaborators can also accept your invitation from their own Data Publication Dashboard by logging in and clicking "Accept" next to the dataset title. You will receive an email when your invitation has been accepted or rejected.

<a href="/docs/img/screenshots/depositing_data/InviteAccept.png" class="screenshot-lightbox">
    <img src="/docs/img/screenshots/depositing_data/InviteAccept.png" alt="Screenshot" class="screenshot"/>
</a>

After accepting the invitation, collaborators will be able to resume the submission from the Data Publication Dashboard and edit the submission. Although multiple collaborators can work on the same submission, **only one person should add or edit metadata at a time**. The last person to save will overwrite any metadata changes made by others.

You can invite additional collaborators or remove collaborators at any point during the submission process. To do so, click on the "Collaborate" button at the top of the page after resuming an in-progress submission. Please note that collaborators cannot invite additional people to collaborate, only the original submission creator can add and remove people via the Collaborate tab.

<a href="/docs/img/screenshots/depositing_data/InviteReturn.png" class="screenshot-lightbox">
    <img src="/docs/img/screenshots/depositing_data/InviteReturn.png" alt="Screenshot" class="screenshot"/>
</a>

## Contact Information
A contact name and email address for the dataset administrator is required for every submission.  This information is **not** shown publicly.  It is used for two purposes:

* A curator, a system administrator, and/or the service manager may use this information to contact someone directly about the submission.
* A web form is displayed to the public that allows them to send comments into the dataset administrator. When people fill in this form, their comments will be forwarded by the system to the supplied email address.

You may optionally supply instructions on when or why people should use the public contact form.

## Entering metadata
Metadata, such as title, authors and their affiliations, keywords, dates, and description, are used to describe your dataset. Metadata helps others to discover and reuse the data. A metadata submission form is provided and fields marked with an asterisk are required. The more metadata that you provide, the easier it will be for someone else to discover and reuse the data. By hovering your mouse pointer over the label for any metadata field, you can view more information about the field.

It is possible to upload a file containing some or all of the metadata for your dataset submissions instead of entering it manually. This is an easy way to populate the fields that might be common (e.g., publisher or authors) to a number of datasets, while entering the unique fields by hand (e.g., title). The file containing your metadata could be created with an editor or a script could be written to generate the metadata file. For more information see [Metadata Uploading](advanced.md#metadata-uploading) in the Advanced section.

## Specifying an embargo period
If a dataset needs to be protected for a period of time, perhaps due to restrictions from a publisher or funding agency, you can set an embargo and specify the date on which the data will automatically become accessible. An embargo request needs to be approved by a curator.

Submitters will receive a notification one month before the embargo expires. This includes an option to request an extension. Failure to respond results in the automatic release of the embargoed dataset.

Submitters can choose whether the metadata record is:

1. Discoverable in FRDR and other web search results (this is the default option)
2. Not discoverable in search results and viewable only if you have the link
3. Viewable only by the submitter

Note: DOIs are reserved at the beginning of a submission and may be shared with journal publishers or research offices at any point.

## Transferring the dataset
### Using Browser Upload (Small datasets)
This section covers the following activities:

* How to upload files using your web browser
* How to delete files

#### How to upload files using your web browser
##### Upload with File Browser
* Click on the button "Click to choose files" and use the file navigator to find the file you want to upload.
* Click on the open button to start uploading the file
* You can choose more than one file by clicking on the first file, holding the shift key and clicking on the last file you want to upload. If you need to upload several different files, skipping ones in between, hold the ctrl key on Windows or the command key on Mac and click on the files you wish to upload.

<a href="/docs/img/screenshots/depositing_data/ClickToUpload.png" class="screenshot-lightbox">
    <img src="/docs/img/screenshots/depositing_data/ClickToUpload.png" alt="Screenshot" style="max-width: 160px"/>
</a>

* There will first be a progress bar for the upload. This may be very fast if the file is small.

<a href="/docs/img/screenshots/depositing_data/Uploading.png" class="screenshot-lightbox">
    <img src="/docs/img/screenshots/depositing_data/Uploading.png" alt="Screenshot" class="screenshot"/>
</a>

* Then there will be a spinning icon if the file has been uploaded successfully and the system is now processing the file.

<a href="/docs/img/screenshots/depositing_data/UploadProcessing.png" class="screenshot-lightbox">
    <img src="/docs/img/screenshots/depositing_data/UploadProcessing.png" alt="Screenshot" class="screenshot"/>
</a>

* The spinning icon will disappear and then a delete icon will be showing after the file name when the file has been completely uploaded. 

<a href="/docs/img/screenshots/depositing_data/UploadFinished.png" class="screenshot-lightbox">
    <img src="/docs/img/screenshots/depositing_data/UploadFinished.png" alt="Screenshot" class="screenshot"/>
</a>

* If all files have been uploaded you will be able to move onto the next step.
##### Uploading folders or many files using drag and drop
* To upload a folder open your file navigator.
* Find the files or folders that you wish to upload.

* Drag them onto your web browser into the dotted area with the text "Drag and drop files here" to begin uploading them.

<a href="/docs/img/screenshots/depositing_data/DragAndDrop.png" class="screenshot-lightbox">
    <img src="/docs/img/screenshots/depositing_data/DragAndDrop.png" alt="Screenshot" class="screenshot"/>
</a>

* There will first be a progress bar for the uploading of each file. This may be very fast if the file is small.

<a href="/docs/img/screenshots/depositing_data/Uploading.png" class="screenshot-lightbox">
    <img src="/docs/img/screenshots/depositing_data/Uploading.png" alt="Screenshot" class="screenshot"/>
</a>

* Then there will be a spinning icon if the file has been uploaded successfully and the system is now processing the file.

<a href="/docs/img/screenshots/depositing_data/UploadProcessing.png" class="screenshot-lightbox">
    <img src="/docs/img/screenshots/depositing_data/UploadProcessing.png" alt="Screenshot" class="screenshot"/>
</a>

* The spinning icon will disappear and then a delete icon will be showing after the file name when the file has been completely uploaded. 

<a href="/docs/img/screenshots/depositing_data/UploadFinished.png" class="screenshot-lightbox">
    <img src="/docs/img/screenshots/depositing_data/UploadFinished.png" alt="Screenshot" class="screenshot"/>
</a>

* If all files have been uploaded you will be able to move onto the next step.

### Using Globus to Upload Dataset

<p style="text-align: center;"><iframe src="https://www.youtube.com/embed/U4Qaia4KZAU/" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>

This section covers the following activities:

* How to transfer files using Globus
* Check status of transfer
* Canceling an in-progress transfer
* Deleting a file that has already been transferred

If you have a very large dataset (greater than a few Gigabytes) or many files (several thousand files) we would recommend using [Globus Connect](https://www.globus.org/globus-connect) to efficiently and reliably manage these larger datasets.

***Note: If you are transferring from your notebook or desktop you will need to install [Globus Connect Personal](https://www.globus.org/globus-connect-personal). Ensure that Globus Connect Personal is running so that you will have access to your data.***

Globus moves files and directories between two endpoints: the **source endpoint** running at your end and FRDR, the **destination endpoint**.

* Choose your files and initiate the transfer
* After initiating the transfer, you can close the window and return to FRDR
* Globus will email you when the transfer is complete; very large datasets could take hours to transfer

#### How to transfer files using Globus

1. On the "Transfer Data" tab, click "Globus File Transfer" button to access the Globus file transfer page<br/> <a href="/docs/img/screenshots/depositing_data/GlobusFileTransferButton.png" class="screenshot-lightbox"> <img src="/docs/img/screenshots/depositing_data/GlobusFileTransferButton.png" alt="Screenshot" class="screenshot"/> </a>

2. Click on the "Transfer or Sync to" link on the right side of the screen. <br/> <a href="/docs/img/screenshots/depositing_data/TransferToButton.png" class="screenshot-lightbox"> <img src="/docs/img/screenshots/depositing_data/TransferToButton.png" alt="Screenshot" class="screenshot"/> </a>

3. FRDR is on the left, we need to choose a source for files on the right. Click on the top right textbox by the magnifying glass to search for an endpoint to find files. <br/> <a href="/docs/img/screenshots/depositing_data/ChooseEndpointTextbox.png" class="screenshot-lightbox"> <img src="/docs/img/screenshots/depositing_data/ChooseEndpointTextbox.png" alt="Screenshot" class="screenshot"/> </a>

4. Start typing the name of the Globus endpoint containing your files. This could be the name you gave your notebook or desktop, a Compute Canada hosting site (e.g. Cedar, Graham, Niagra or Beluga) or another Globus endpoint location (e.g. a lab or institutional server)<br/> <a href="/docs/img/screenshots/depositing_data/ChooseEndpoint.png" class="screenshot-lightbox"> <img src="/docs/img/screenshots/depositing_data/ChooseEndpoint.png" alt="Screenshot" class="screenshot"/> </a>

5. Find and select the files necessary for your dataset. You can Shift-click or Ctrl-click to build your selection of files.<br/><img src="/docs/img/screenshots/depositing_data/FileHighlighted.png" alt="Screenshot" class="screenshot"/>

6. Click on the Transfer and Sync Options button at the bottom middle of the screen.<br/> <a href="/docs/img/screenshots/depositing_data/TransferAndSyncButton.png" class="screenshot-lightbox"> <img src="/docs/img/screenshots/depositing_data/TransferAndSyncButton.png" alt="Screenshot" class="screenshot"/> </a>

7. Label this Transfer: enter a name for the transfer activity that will make it easy to identify.<br/> <a href="/docs/img/screenshots/depositing_data/TransferAndSync.png" class="screenshot-lightbox"> <img src="/docs/img/screenshots/depositing_data/TransferAndSync.png" alt="Screenshot" class="screenshot"/> </a>

8. Select Transfer Settings: provides various options to control file checking and security. In many cases, the default settings will be appropriate. Contact [support@frdr-dfdr.ca](mailto:support@frdr-dfdr.ca) if you require assistance understanding which additional transfer settings may be needed for your dataset.

9.  Initiate the transfer by clicking on the blue start button at the bottom of the page. You can initiate as many transfers as needed during a single session. This may be required if, for example, you want to transfer files that live in different folders or source endpoints. <br/> <a href="/docs/img/screenshots/depositing_data/StartTransfer.png" class="screenshot-lightbox"> <img src="/docs/img/screenshots/depositing_data/StartTransfer.png" alt="Screenshot" class="screenshot"/> </a>

10. The status of the transfer will be indicated on the left hand side under activity, but the transfer will proceed independently and you can close that window and return to FRDR to verify and complete your submission. <br/> <a href="/docs/img/screenshots/depositing_data/Activity.png" class="screenshot-lightbox"> <img src="/docs/img/screenshots/depositing_data/Activity.png" alt="Screenshot" class="screenshot"/> </a>

#### Check status of transfer
1. Go to the [Activity page](https://globus.frdr.ca/activity?locale=en-us).
2. Click on the transfer in the list (its title will be the label if you gave it one).
3. This page will give you the current status of the transfer (i.e., the number of files transferred, how much data has been transferred, or whether an error has occurred ).
4. For a timeline click on the "Event Log" tab.<br/> <a href="/docs/img/screenshots/depositing_data/EventLog.png" class="screenshot-lightbox"> <img src="/docs/img/screenshots/depositing_data/EventLog.png" alt="Screenshot" class="screenshot"/> </a>

#### Canceling an in-progress transfer

1. Go to the [Activity page](https://globus.frdr.ca/activity?locale=en-us).
2. In the list of transfers, find the correct transfer based on the label
3. Click on the X button <br/> <a href="/docs/img/screenshots/depositing_data/CancelTransfer.png" class="screenshot-lightbox"> <img src="/docs/img/screenshots/depositing_data/CancelTransfer.png" alt="Screenshot" class="screenshot"/> </a>
4. Click on the red terminate transfer button.

#### Deleting a file that has already been transferred
1. Navigate to the dataset submission, located in the "In Progress" tab of the <a href="/repo/PublishDashboard" target="_blank">Data Publication Dashboard</a>. Click "Resume" to get into the submission.
2. Click on the "Transfer Data" tab (if not already on it.)
3. Click the "Transfer Dataset" button to open the transfer window.
4. Locate the file or directory that you want to delete. Click once on the file or directory to highlight it.
5. Click the “Delete Selected” button on the right hand side of the screen (or middle if both the source and destination are open) and confirm it by clicking on the delete button on the resulting screen.  <br/> <a href="/docs/img/screenshots/depositing_data/DeleteSelected.png" class="screenshot-lightbox"> <img src="/docs/img/screenshots/depositing_data/DeleteSelected.png" alt="Screenshot" class="screenshot"/> </a>
6. Repeat as needed until all of the files or folders have been deleted.

Submitting a dataset is not an instantaneous process. Several of the steps can take a significant amount of time:

* Transferring a really large dataset might take hours or longer;
* A curator will be assigned to review and decide whether to approve your submission;
* After approval, it will take up to 24 hours for the submission to be indexed and discoverable in FRDR's Search.

If possible, it is a good idea to retain a copy of your data after submitting. While FRDR does automatically create backups for all datasets, this process may take up to 24 hours to complete.

## Finalizing the Submission
After the transfer is complete, you have an opportunity to review the submission metadata before submitting the dataset for publication. You can also review the list of files in the dataset. Simply return to any of the previous tabs if you want to make changes to the metadata or data files. 

This is your last chance to alter the metadata or the data files. Once you finalize the submission, changes to metadata must be done with a curator. 

Your final step for submitting a dataset is to click to finalize the submission. This will schedule your submission to be reviewed by a curator. You will be notified via email when the curator has finished the review, or you can monitor the status in your Publication Dashboard.
