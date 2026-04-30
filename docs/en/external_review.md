# External Dataset Review

This feature allows depositors to share their datasets with an external reviewer, such as a journal editor, or a colleague, before the dataset is publicly available. All datasets submitted to FRDR undergo an internal review process called curation before they are approved for publication. If you would like to share your dataset with an external reviewer, you can opt in by selecting “yes” to the Dataset Review option on the Access tab in the submission interface. Your dataset will be placed under embargo after the curation process is complete, at which time you can invite external reviewers to access your submission. External reviewers do not require accounts in FRDR.

<hr />

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="for-depositors">For Depositors</h2>

        <h3 id="how-to-invite-reviewers">How to invite reviewers</h2>

        <div class="mb-3">After your dataset is approved for publication, it will be placed under embargo. At this stage, you can invite colleagues or reviewers to access your dataset by entering their name and email address. To send invitations, log in to FRDR and find the dataset in the "Under Embargo" tab on your FRDR publication dashboard. Click "Manage Reviewers'', fill out the invitation form and click the "Invite" button. FRDR will send an email to the reviewer with a link to access your dataset.</div>

        <div class="mb-3">If your data are associated with a manuscript under review, we suggest sending a few invitations to your managing editor, who can distribute the access link(s) to peer-reviewers.</div>

        <div class="mb-3">FRDR’s external review feature is designed with the understanding that, in most cases, submitters do not and should not know the identities of their reviewers. Hence, all reviews initiated through FRDR blind the dataset submitter to the identities of the reviewers. In addition, FRDR also optionally supports double-blind reviews, where author/submitter information can be similarly masked from reviewers and submitters do not receive status updates on the review links.</div>

        <div class="mb-3">If the manuscript review process is double-blinded so the reviewers are unaware of the authors’ identities, select “Anonymous Review” to mask author information in the dataset.</div>

        <div class="mb-3">
            <a href="/docs/en/img/screenshots/external_review/inviting.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/en/img/screenshots/external_review/inviting.png" alt="Screenshot showing external dataset review invitation form" class="screenshot"/>
            </a>
        </div>

        <div class="mb-3">Here are the three scenarios where this feature can be used:</div>

        <div class="mb-3">
            <ol>
                <li>
                    <div><b>When you have the journal editor information</b></div>
                    <div class="mb-3">In this instance, enter the journal’s name in the reviewer field and journal managing editor’s email address in the email address field. If you only have the journal's general contact information and not a specific editor’s email, you can use the journal’s email address in the Reviewer email field. In either case, be sure to send multiple invitations by adjusting the quantity option so the managing editor can distribute the review links to the peer reviewer(s). If the managing editor does not wish to manage multiple review links, you can share one link and instruct the editor to communicate to the reviewers not to mark the dataset review as complete in FRDR until everyone has finished their review. Marking the review complete deactivates the link, so reviewers should only do this once the entire review process is fully finished.</div>
                    <div class="mb-3">
                        <a href="/docs/en/img/screenshots/external_review/invite-reviewers.png" class="screenshot-lightbox">
                            <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                            <img src="/docs/en/img/screenshots/external_review/invite-reviewers.png" alt="Screenshot of inviting reviewers" class="screenshot"/>
                        </a>
                    </div>
                </li>
                <li>
                    <div><b>When you don’t have information regarding the journal reviewers</b></div>
                    <div>
                        If you don’t have specific details about the journal or its reviewers or if the journal’s editors prefer not to receive emails from third party systems, you can send the review links to yourself. Enter the journal’s name and your email address in the appropriate fields and specify the number of review links you expect to need. FRDR will email the review links to you, which you can then include in your manuscript submission to be distributed to reviewers. Using the journal’s name helps you remember with whom you have shared the dataset. If you are sending one link, include instructions with the link for the reviewers to not mark the dataset as complete on the review page, or the link will be deactivated for other reviewers.
                    </div>
                </li>
                <li>
                    <div><b>When you want to share with colleagues</b></div>
                    <div>
                        In this scenario, simply fill out the reviewer form with the names and email addresses of every colleague you want to invite. If you are sharing with a lab, you can use the Lab name and a central email address for the contact information, and increase the quantity of reviewer links.
                    </div>
                </li>
            </ol>
        </div>

        <div class="mb-3">You will be notified via email when a reviewer accepts or rejects your invitation, and you can monitor the status of all invitations on the Invite Reviewers page. Reviewers who have yet to respond to invitations will be under Pending Invitations, reviewers who are reviewing the dataset will be under Current Reviewers, and reviewers who have completed reviews will be found under Inactive Reviewers. The name used to create the link is used for status tracking here. For reviews that are not anonymous, you will also be able to track the activity (time stamps of activities involved in the review, including: accepting the review, downloading the dataset, completing the review) of the review process.</div>

        <h3 id="anonymous-review">Anonymous Review</h2>
        <div class="mb-3">On the invitation form there is a checkbox for Anonymous Review. If this is selected, a new part of the form will open. You will be asked to provide a manuscript title and manuscript number, which will allow your managing editor to match your dataset to your associated manuscript. You will also see a list of metadata fields that can be hidden from the reviewer.</div>

        <div class="mb-3">
            <a href="/docs/en/img/screenshots/external_review/anonymous.png" class="screenshot-lightbox">
                <div class="fake-browser"><span class="fake-controls"><i class="fas fa-circle mac-close"></i><i class="fas fa-circle mac-minimize"></i><i class="fas fa-circle mac-maximize"></i></span></div>
                <img src="/docs/en/img/screenshots/external_review/anonymous.png" alt="Screenshot showing anonymous review metadata selection" class="screenshot"/>
            </a>
        </div>

        <div class="mb-3">Certain metadata fields will be hidden by default, such as author names and affiliations, and you may choose to hide other fields that may be identifying, such as funder award number. You may also need to remove identifying information from your README or data files while your dataset is under review. Note that the metadata available on the public landing page for this dataset is restricted to the title while the dataset is under embargo.</div>

        <div class="mb-3">Please note that the review links shared during the external review process are temporary and intended solely for accessing the dataset under embargo while it is being reviewed by external reviewers. These links should not be confused with DOI links—they will be deactivated once the review is complete. Your submission will receive a registered DOI at the time of deposit; however, the DOI will only become active and resolvable after the dataset is published.</div>

        <h3 id="how-to-edit-your-dataset-post-journal-review">How to edit your dataset post journal review</h2>

        <div class="mb-3">After the review process is completed, if you need to update or modify the dataset, you must reach out to the FRDR support team to make the changes. To do so, please log in, your datasets in review will be listed in the “Under Embargo” tab on your FRDR publication dashboard. Click the “Revise” button next to the dataset title, and indicate what type of change you require. You can request to extend or lift the embargo, and you can request updates to the metadata record or the data files, for example to add the DOI of an associated publication, or to update files that were revised during the review process. You will have the option to add notes about your requested changes for the FRDR curation team. Once you have submitted the form, a member of the curation team will work with you to make the requested changes.</div>

        <h3 id="finalizing-your-submission-and-embargo-changes">Finalizing your submission and embargo changes</h2>

        <div class="mb-3">Once the review process is completed and any required updates are in place, you can request to lift the embargo to publicly release the dataset. To lift an embargo before its scheduled end date, please log in, locate your dataset in the “Under Embargo” tab, and click the "Revise" button to request the removal of the embargo. After receiving your request, the FRDR curation team will make the embargo change for your dataset. When the embargo is removed, the dataset metadata record will be publicly available and your data files will be available for download.</div>

    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <div class="card-title"></div>
        <h2 id="for-journal-reviewers">For Journal Reviewers</h2>

        <div class="mb-3">FRDR provides an external review option to facilitate secure access to datasets under embargo during the manuscript review process. All reviews initiated through FRDR are single-blinded by default, that is, your identity as a reviewer is not disclosed to the dataset author. This approach is designed to align with standard journal practices where reviewers remain anonymous to submitters. For instances requiring stricter anonymity, FRDR also supports double-blind reviews. In this mode, author and submitter information is masked from reviewers, ensuring full confidentiality on both sides.</div>

        <div class="mb-3">If you have been invited to review a dataset in FRDR, you will receive a FRDR invitation email with the reviewer link to access the dataset, possibly from your managing editor. To proceed with the review, you must agree to FRDR’s <a href="/policies/en/terms_of_use/">Terms of Use</a> and accept the invitation. You don’t need to have a FRDR account to access the dataset. As a reviewer, you will have access to the full set of data files and a subset of the dataset metadata record. Your reviewer link will remain active until it's revoked by the dataset author, you mark the review as completed, or until the dataset's embargo end date arrives, in which case the dataset will be publicly available. Please note: The reviewer links are not DOI links and will expire once the review is complete.</div>

        <div class="mb-3">After accepting the invitation to review, you will be redirected to the dataset review page where you will be able to view a subset of the dataset’s metadata and full set of data files. Note that if the dataset author has opted for anonymous review, some of the identifying metadata fields will be hidden to ensure confidentiality.</div>

        <h3 id="downloading-data-files">Downloading Data Files</h3>

        <div class="mb-3">You can choose to download either the entire dataset or a specific subset of data files. If you select a directory, all files and sub-directories within that directory will be included. The files you choose will be compressed into a zip archive, and you will be notified via email when the zip file is ready to download. You will have the option to provide an email address that receives the notification before you generate the zip file. This email address is only used internally by the system to send this notification, and is at no time shared with the dataset submitter. The download will occur over a web browser and download speeds will be dictated by your local connection. For large datasets, we recommend selecting and downloading a subset of files to begin.</div>

        <div class="mb-3">You can only download one zip file at a time. If you need to split your data into multiple downloads, please wait for each download to finish before starting the next. While one zip file is in progress, you cannot initiate another download. Additionally, if you need to generate a new zip file, you must first remove the existing zip archive before creating a new one.</div>

        <div class="mb-3">The zip file you generate will be available for download for 14 days. After 14 days, the file will be removed from FRDR's servers and will no longer be available to download.</div>

        <h3 id="completing-the-review">Completing the Review</h3>

        <div class="mb-3">During your review, you will need to directly communicate feedback and suggestions to the dataset's author outside of the FRDR platform, for example by sharing feedback with the managing editor who sent you the review link. When your review of the dataset is complete, you have the option to click the 'Complete Review' button, at which time you will lose access to the dataset, and the dataset author will receive a notification that the review process has ended.</div>

        <div class="mb-3">For <b>non-anonymous</b> review, dataset authors will receive limited notifications of review activities conducted by journal reviewers. Specifically, status of the review invitation; accepted/rejected, and when a review is completed. However, no other details regarding the review or reviewer actions are relayed to the authors. For <b>anonymous review</b>, no information regarding the review activity is communicated to the dataset authors.</div>
    </div>
</div>
