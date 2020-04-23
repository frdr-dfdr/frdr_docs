After submitting a dataset, the submission is queued for review by a Curator. You can expect to be contacted by a Curator within 48 hours. The length of time required for curating a submission will depend on the organization of the content and the completeness of the metadata. Once approved, the submission is queued for preservation processing.

## Curation
To help ensure the quality of the metadata in the repository and to improve the discovery and reuse of data, submissions to FRDR are reviewed and approved by a Curator. Curators are typically librarians employed by research institutions around the country. They may also be data managers embedded within research groups who have agreed to work with CARL Portage, and have been granted special permissions in the FRDR system. 

Submitters are expected to work with Curators to:

* Edit metadata to correct typographical errors or to add additional helpful metadata such as keywords. Curators may also provide advice regarding interpretation or usage of metadata fields and keywords.
* Review and revise data files as needed to ensure that they can be understood and reused by other researchers.
* Move a dataset to a more appropriate storage group in FRDR.
* Reject a submission if they decide it needs additional preparation or doesn’t meet FRDR’s criteria. If Curators reject a submission, they will provide comments indicating their reasons and suggest what a submitter can do to improve the submission.  If you receive an email that your submission was rejected, please work with the curator to resolve the issue, then re-submit it for review.

Note: Curator suggested changes are only implemented with the approval of the Submitter.


## Preservation

After Curator approval, FRDR automatically queues data submissions for preservation processing using [Archivematica](https://www.archivematica.org) software. The preservation version contains all of the original files and may include copies that have been normalized into  preservation-friendly file formats. For example, proprietary files might be altered to an open format or compressed image files may be altered to uncompressed format. The format conversions are informed by preservation experts in Canada (e.g., [Portage’s Preservation Expert Group](https://portagenetwork.ca/working-with-portage/network-of-expertise/portage-preservation-expert-group/) and around the world.

As per our Preservation Policy, all of the files comprising the dataset as well as the related metadata are bundled together into an Archival Information Package (AIP). Direct access to the AIPs will be limited to FRDR administrators and Curators, or delivered to researchers upon request. For a more detailed discussion on the role of FRDR in research data preservation in Canada, please see this [report](https://portagenetwork.ca/wp-content/uploads/2018/05/Portage-PEG-WhitePaper-EN.pdf) published by Portage’s Preservation Expert Group.

## Data Validation
After a dataset is approved by a curator, [checksums](https://en.wikipedia.org/wiki/Checksum) are calculated for each file in the dataset and those checksums are recorded in a file that is saved with the submission. The file is named with the form "publication_1-2017-08-22-22:08:58-sha256-sums.txt";  the unique number for this dataset and the date and time the checksums were calculated, will vary. The file is a text file and includes the name of each file in the submission together with a checksum and information about the type of file.

Checksums are calculated using the [SHA-256](https://en.wikipedia.org/wiki/SHA-2) algorithm. The Submitter may validate the integrity of their datafiles using [QuickHash GUI](http://quickhash-gui.org/) which is an application using the SHA-256 algorithm.
