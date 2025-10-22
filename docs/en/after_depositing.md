Once you submit your dataset, your deposit will be queued for review by a curator. The length of time required to complete the curation process will depend on a number of factors, including the size of the submission, the organization of the content and the completeness of the metadata and documentation. You can expect to be contacted by a curator within 2 business days. When your dataset has been approved for publication, you will receive a confirmation email, your DOI will be registered, and selected datasets may undergo additional processing for long-term preservation.

## Curation
All data deposited in FRDR will undergo review by a member of our curation team. Curators work with depositors to enhance the overall findability, accessibility, interoperability and reusability (or [FAIR](https://doi.org/10.1038/sdata.2016.18)ness) of their datasets. Our curation team uses the Data Curation Network's [CURATED](https://datacurationnetwork.org/outputs/workflows/) steps as a framework for reviewing new deposits.

Submitters are expected to work with curators during the review process to:

* Ensure there is appropriate documentation.
* Edit metadata to correct typographical errors or to add additional helpful metadata such as keywords or a more thorough description. Curators may also provide advice regarding interpretation or usage of metadata fields and keywords.
* Review and revise data files as needed to ensure that they can be understood and reused by other researchers. This may include providing open source, preservation-friendly alternatives to proprietary file formats where appropriate. 
* Replace any files with technical issues (e.g. files flagged by a malware scan or corrupted files).
* Address any potential issues curators might flag related to intellectual property rights and secondary use of data, or potential sensitivities in the data related to privacy, Indigenous ownership, or location information.

Curators may contact you or return a submission if it needs additional preparation or does not meet the criteria for publication in FRDR as outlined above and in the FRDR [Terms of Use](/policies/en/terms_of_use/). If curators do return a submission, they will provide comments indicating their reasons and suggest what you can do to revise the dataset before resubmitting.

Note: Curator suggested changes are only implemented with the approval of the depositor.

## Preservation

FRDR carries out a number of activities to support the long-term accessibility and usability of data, including file identification, validation, characterization, and normalization. These activities are collectively referred to as digital preservation. 

After a dataset is approved by a curator, [checksums](https://en.wikipedia.org/wiki/Checksum) are calculated for each file in the dataset and recorded in a text file (frdr-dfdr-checksums.txt) along with the file name. Researchers can download this information from the dataset page on FRDR and independently validate the integrity of the data files. Checksums are calculated using the [SHA-256](https://en.wikipedia.org/wiki/SHA-2) algorithm, which can be validated using [QuickHash GUI](https://www.quickhash-gui.org/).

FRDR supports bit-level preservation for deposited datasets. Datasets may undergo appraisal and selection for additional preservation processing using [Archivematica](https://www.archivematica.org)  software. Data files and metadata are bundled together into an [Archival Information Package (AIP)](https://www.archivematica.org/en/docs/archivematica-1.13/user-manual/archival-storage/aip-structure/#) which contains copies of the submitted data files along with any files that have been [normalized](https://www.archivematica.org/en/docs/archivematica-1.13/user-manual/ingest/ingest/#normalize) for preservation, FRDR metadata and other relevant documentation, checksums, and a METS file. These AIPs are then stored with a Preservation Service Provider ([SciNet / University of Toronto](https://www.scinethpc.ca/)), where they will undergo fixity checking and further processing if necessary. While the AIPs are transferred, the datasets are also retained on FRDR servers for access purposes.

To learn more about FRDR’s role in research data preservation in Canada, please see this 2018 [report](https://doi.org/10.14288/1.0371946) published by the Preservation Expert Group.
