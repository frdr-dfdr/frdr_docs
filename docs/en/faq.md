### 1. Who can use FRDR?
Anyone may use FRDR to search for and download datasets.

Principal Investigators (PIs) from any research discipline may submit content to FRDR. PIs must be faculty at an eligible Canadian academic institution. PIs can sponsor designates to submit content on their behalf. Examples of designates include external collaborators, graduate and undergraduate students, data managers, non-research staff, postdoctoral fellows, and research assistants. Requests for deposit from other types of Canadian researchers (e.g. researchers affiliated with government or NGOs) who are not sponsored by a PI will be considered on a case-by-case basis.

Please refer to the Data Submission Policy for more information.

### 2. After I submit my dataset, when will it be searchable?
After you submit your dataset, the following steps must be completed before it will be searchable:

* The transfer of your data files to FRDR must be complete. This can take some time for large datasets.
* After submission, Curators are informed that they need to review and approve your submission. You can expect to be contacted by a Curator within 2 business days of data submission.
* You will receive an email confirming the approval of your dataset.
* Once a dataset has been approved, the metadata for your dataset needs to be indexed. This might take up to 20 minutes.

### 3. How can I measure the impact of my datasets?
Various statistics are available for data submitted to FRDR, including the number of views and file downloads. To access these stats, navigate to the dataset landing page and click the “View item statistics” button at the bottom of the record.

### 4. How can I change the metadata for a dataset after I submit?
To request changes to submitted metadata, send an email to [support@frdr-dfdr.ca](mailto:support@frdr-dfdr.ca) and your message will be forwarded to an appropriate curator. 

### 5. How can I add or change a data file after I submit?
A feature of FRDR is assurance of the provenance of the data in the repository—that the data remains as submitted by the researcher. Only authorized FRDR curators can make changes to submitted data.

To request any change to data you submitted, send an email to [support@frdr-dfdr.ca](mailto:support@frdr-dfdr.ca) and your message will be forwarded to an appropriate curator. A change to the data may require a new DOI for the dataset.

### 6. Can I deposit data to FRDR and have it stored in my province/institution?
Yes, a design feature of FRDR is that data storage locations can be “federated.” An institution can apply to host a storage group that will be added to FRDR. The institution does not need to be running FRDR, just a Globus endpoint. If you are a representative of an institution and would like to apply to host a storage group, please contact [support@frdr-dfdr.ca](mailto:support@frdr-dfdr.ca).

### 7. How much storage do I get by default?
You will have access to 1 TB of curated storage by default. If you think you will need additional storage, please contact [support@frdr-dfdr.ca](mailto:support@frdr-dfdr.ca).

### 8. What happens when I reach my storage limit?
When a user reaches their quota in a collection, the following will happen:

* All items that they have permission to deposit to in this collection will have their Globus permissions changed to remove their write access (including their own in progress items, and items on which they are a collaborator).
* All incoming Globus transfers to items in this collection for this user will be paused.
* HTTPS file upload will be disabled for items in this collection for this user, although any uploads that are currently in progress will not be interrupted.
* An email may be sent to the user and to the curators (as defined in the quota policy), explaining that the user has reached their quota and also showing the total amount of collection quota remaining.

### 9. How can I request more storage?
If you have reached your quota limit, or believe an extension on quota is required for a collection, please contact [support@frdr-dfdr.ca](mailto:support@frdr-dfdr.ca).

### 10. What preservation capabilities are offered (automatic archiving of data submitted)?
Currently, we can process submissions smaller than 25 TB. If you need a larger dataset preserved please contact us at [support@frdr-dfdr.ca](mailto:support@frdr-dfdr.ca).

### 11. Why can't I download a file via my web browser (using HTTP)?
It might be for a few reasons:
* A browser cannot download a folder or hierarchy via HTTP.
* We have a maximum file size of 10 GB for HTTP download.

### 12. Can I get a DOI before my dataset is deposited?
Once you have started the process to deposit your dataset, the DOI for your in-progress deposit will be shown in the list of incomplete deposits on the Data Publication Dashboard. To navigate to the Data Publication Dashboard from an in-progress submission, click “Save & Exit.” Please note that the DOI will not be resolvable until your deposit is approved for publication.

### 13. How can I link my dataset to a related publication, dataset, or other research output(s)?
If you have a publication, dataset, or other research output that relates to your dataset, we encourage you to link to these related outputs when you submit your data to FRDR.

To link related research outputs, use the Related Identifier metadata field to add the DOIs of related items. For each item, enter the DOI and select the type of relation from
the dropdown menu. Further information on the Related Identifier field is in the [Depositing data documentation](https://www.frdr-dfdr.ca/docs/en/depositing_data/).

If you are submitting multiple related datasets to FRDR,, note that DOIs are reserved as soon as you start a dataset deposit. Therefore, you will have DOIs available to use as Related Identifiers for concurrent submissions.

To add Related Identifiers after your dataset has been submitted, please contact a Curator at [support@frdr-dfdr.ca](mailto:support@frdr-dfdr.ca).

### 14. What tool can I use to calculate checksums?
There is a free tool to calculate SHA-256 checksums here: https://quickhash-gui.org/

### 15. How long do I have to complete a deposit?
You will be logged out of FRDR after 60 minutes of inactivity. This means that as long as you navigate to the next screen in under 60 minutes, you will remain signed in. If you need to take longer than that, please save your progress and come back to it after you have your text ready to copy and paste.

### 16. What datasets can I search for in Geodisy?
Geodisy provides map search functionality to supplement the FRDR discovery service. The map search is currently in beta and indexes a subset of the datasets available through FRDR’s main search. Geodisy includes datasets with valid bounding box metadata from all repositories harvested by FRDR. Dataverse repository datasets harvested by FRDR that have location metadata and/or geospatial files are also included if the location metadata meets Geodisy’s criteria for inclusion and/or the geospatial file can be interpreted by Geodisy’s software. FRDR is actively working toward expanding the full location metadata and geospatial file interpretation capabilities to all other indexed repositories beyond just Dataverse. More FAQ information about Geodisy is available [here](https://github.com/ubc-library/geodisy/blob/master/Documentation/userguides/FAQ.md).

### 17. Is it possible to upload a metadata file instead of typing into the submission form?
Yes. If you have a large number of datasets to upload to FRDR, you may submit metadata for each in a JSON file for a curator for upload. The file containing your metadata could be created with an editor, or a script could be written to generate the metadata file.

Please contact a curator at [support@frdr-dfdr.ca](mailto:support@frdr-dfdr.ca) for information on the format required for metadata upload.
