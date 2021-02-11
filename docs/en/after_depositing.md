Once you submit your dataset, your submission will be queued for review by a curator. The length of time required to complete the curation process will depend on a number of factors, including the size of the submission, the organization of the content and the completeness of the metadata and documentation. You can expect to be contacted by a curator within 2 business days. 
When your submission has been approved, you will receive a confirmation email, your DOI will be registered, and your dataset will be queued for preservation processing. 

## Curation
All data deposited in FRDR will undergo review by a member of our curation team. Curators work with depositors to enhance the overall findability, accessibility, interoperability and reusability (or [FAIR](https://doi.org/10.1038/sdata.2016.18)ness) of their datasets. Our curation team uses the Data Curation Network's [CURATED](https://datacurationnetwork.org/outputs/workflows/) steps as a framework for reviewing new deposits.

Submitters are expected to work with curators during the review process to:

* Ensure there is appropriate documentation.
* Edit metadata to correct typographical errors or to add additional helpful metadata such as keywords or a more thorough description. Curators may also provide advice regarding interpretation or usage of metadata fields and keywords.
* Review and revise data files as needed to ensure that they can be understood and reused by other researchers. 
* Replace any files with technical issues (e.g. files flagged by a malware scan or corrupted files).
* Address any potential issues curators might flag related to intellectual property rights and secondary use of data, or potential sensitivities in the data related to privacy, Indigenous ownership, or location information.

Curators may return a submission if they decide it needs additional preparation or does not meet the criteria for publication in FRDR as outlined above and in the FRDR [Terms of Use](/policies/en/terms_of_use/). If curators do return a submission, they will provide comments indicating their reasons and suggest what a submitter can do to revise the dataset before resubmitting. 

Note: Curator suggested changes are only implemented with the approval of the submitter.

## Preservation

Preservation comprises a series of actions meant to ensure the long-term accessibility of data. Actions carried out as part of FRDR’s preservation processing workflow include: file identification, validation, characterization, and normalization. All datasets submitted to FRDR may be selected for preservation processing.

After a dataset is approved by a curator, [checksums](https://en.wikipedia.org/wiki/Checksum) are calculated for each file in the dataset and recorded in a text file along with the name of each file and information about the type of file. This text file is appended to the dataset (frdr-checksums-and-filetypes.md), and is available to download on FRDR so researchers who wish to reuse the dataset can independently validate the integrity of the datafiles. Checksums are calculated using the [SHA-256](https://en.wikipedia.org/wiki/SHA-2) algorithm. We recommend using [QuickHash GUI](https://www.quickhash-gui.org/) for validation of that algorithm.

Data submissions also undergo preservation processing using [Archivematica](https://www.archivematica.org) software. One aspect of this processing includes checking to see if files conform with their declared file format specification. Researchers may be contacted by a FRDR curator about any discrepancies between files and their format specifications since they may pose a problem for future access to that file. Non-conforming files will still be preserved if they cannot be replaced, with information recorded about the issue.

All of the files comprising the dataset, as well as the related metadata gathered from the FRDR submission interface, are bundled together into an Archival Information Package (AIP). This package is stored with a Preservation Pipeline partner, where it will undergo fixity checking and further processing, if necessary. 

An AIP typically contains copies of the original data files as they were submitted as well as copies of files that have been normalized into preservation-friendly file formats, where necessary. For example, proprietary files might be re-saved in an open format, or compressed image files may be migrated into an uncompressed format. These normalization actions are based on widely-accepted recommendations in the preservation community, and are designed to ensure that the files remain accessible and usable well into the future. However, please be advised that not all proprietary files can be normalized without any data loss (e.g., some embedded metadata or formatting). For this reason, we strongly recommend that you submit your data in open, preservation-friendly formats. If not, we can archive it in its current format, but we cannot guarantee its stability or interpretability over time.

For a more detailed discussion on the role of FRDR in research data preservation in Canada, please see this [report](https://portagenetwork.ca/wp-content/uploads/2018/05/Portage-PEG-WhitePaper-EN.pdf) published by Portage’s Preservation Expert Group.
