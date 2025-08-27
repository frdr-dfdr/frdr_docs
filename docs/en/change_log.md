This is a list of changes to FRDR, starting with the most recent:

**2025-08-27**:

* Fixed resolution of external subpath links to: frdr.ca, dfdr.ca and frdr-dfdr.ca domains.
* Added link to OAI-PMH endpoint in documentation.
* Re-added file format metrics dashboard with link on front page.
* Fixed bug preventing collaborators from editing datasets.
* Update language and translations for French version of sensitive dataset workflows
* Remove filetypes from frdr checksum files

**2025-07-30**:

* Fixed pdf layout for Senstive Data documents

**2025-06-25**:

* Added collection access request fields to new user application process

**2025-05-28**:

* Stopped auto updating email address from Google, Orcid and other sources where we don’t get email updates
* Fix issue with encoding of French-language example README.txt in documents.
* Fix issue where some file listings for new submissions were not showing the license and citation files.
* Don’t show version table if only a single version


**2025-04-30**:

* New feature: Automatic updating of email address. If you change your email address in your Globus profile, this will be updated in FRDR as well.


**2025-03-26**:

* New feature: Routine Fixity Checking. We have deployed a new process to verify the checksum of file contents for every file in every dataset published in FRDR on a routine schedule.
* Added a form to make it easier for users to request a quota increase.
* Added IsNewVersionOf and IsPreviousVersionOf Datacite metadata automatically to new versions of datasets.

**2025-02-26**:

* Created a report for curators to find datasets missing ROR metadata for research organizations within author affiliations and funders.

**2025-01-29**:

* Fixed the link to the French metrics inside collection home pages.

**2024-11-27**:

* New feature: Dataset Versioning. Submitters may now create a new version of a published dataset from their dashboard. Please see the [dataset versioning instructions](/docs/en/create_new_version/).
* Site Metrics dashboard now shows collection-faceted metrics, a map view of dataset views and downloads, download and view metrics for individual submissions.


**2024-10-30**:

* The FRDR sensitive data deposit pilot has started, which is part of the Alliance [Controlled Access Management for Research Data Initiative](https://alliancecan.ca/en/funding-opportunities/controlled-access-management-research-data)

**2024-08-28**:

* The depositor dashboard has been redesigned as part of FRDR ongoing alignment to Alliance branding
* Download limit has been removed for web download links; users may now choose to download any files they wish through their browser, however we still encourage the use of Globus Transfer for large files

**2024-07-31**:

* Quota usage will now be displayed as zero instead of blank when users have not started their first deposit
* A point was added to the FAQ regarding logging into FRDR using institutional credentials
* The failed login page wording was updated to be clear when users must contact support to have their accounts activated
* Fixed a problem with the file listing “load more” button not working in some cases
* Updated ROR data to release 1.50

**2024-05-29**:

* Updated the FRDR user interface to meet the WCAG Level AA accessibility requirements as part of ongoing accessibility review.
* Updated ROR data to schema version 2

**2024-04-24**:

* Improved the user interface for selecting files during Zip download

**2024-03-27**:

* Updated the Data Submission Policy to indicate that in-progress datasets will be deleted after one year of inactivity.
* Improved file format metrics with greater visibility into compressed and archival file formats.
* Added a new feature: download dataset files as a Zip

**2024-02-28**:

* Improved the “contact dataset administrator” form so that it no longer marks some types of wording as spam
* Fixed the display of funder information on dataset landing pages when the funder ROR ID is not available
* Change display of ‘total size deposited’ statistic to only include published datasets

**2024-01-31**:

* File sizes are now calculated using SI units (1000 B = 1 kB, 1000 kB = 1 MB, etc.) everywhere
* Provenance metadata no longer has a language attached to it
* The limit for empty metadata fields in deposit process has been removed
* Funder name is required if award information is provided in deposit process
* A new report has been created for curators to view datasets that are in progress
* Quota management has been improved for curators
* The welcome email has been changed to include a link to the <a href="https://groups.google.com/u/1/a/frdr-dfdr.ca/g/frdr-dfdr-info">FRDR Users Google Group</a>

**2023-12-13**:

* Fixed a problem in displaying file sizes for unpublished dataset files
* The email sent to new users on account approval was updated

**2023-11-29**:

* Automatically remove junk filesystem metadata files from submissions
* Convert units for total deposit size on front page to match other metrics displays
* Added a link to accessibility statement in the site footer
* Fixed an error that happened when deleting CRDC metadata
* Funder information will now show up on dataset landing pages when funder metadata has been supplied

**2023-10-25**:

* Further improvements have been made to dataset file listings, with better performance for datasets with a large number of files
* Free text search is disabled for Funder field in Advanced Search

**2023-09-27**:

* Deposits to FRDR can now be pushed to your ORCID profile in the works section, please see <a href="/docs/en/dashboard/#orcid">dashboard documentation for ORCID</a> for details
* Fixed an issue with the display of curation scan jobs
* Fixed an issue preventing some users from being able to start new deposits

**2023-08-30**:

* Added External Dataset Review feature
* File download links have been changed to permanent URLs that are hosted on FRDR, with redirects to wherever the files are currently located
* Minor formatting changes were done on the citation section of dataset landing pages

**2023-07-26**:

* Updated the site icon with new branding
* Fixed a problem where multiple copies of a dataset would appear to be published when more than one collaborator was working on it
* Fixed a problem when searching for datasets that have been withdrawn


**2023-06-28**:

* Home page list of recent datasets will no longer show datasets that are still under embargo
* Improved the web accessibility of many internal pages
* Removed the metadata harvesting policy (this has moved to Lunaris)

**2023-05-03**:

* Fixed web accessibility issues on a few public facing pages
* Updated some French translations of the word "dataset" to keep it consistent across the site
* Replaced most tool tips with links to documentation for an improved experience and better accessibility
* Added an option of "unsure" when asking depositors about the suitability of their dataset for long term preservation
* Fixed the list of recent datasets on the home page to include author names
* Fixed a problem with case sensitivity when searching for datasets

**2023-03-29**:

* The home page has been redesigned and new branding has been applied to all FRDR web pages
* FRDR discovery interface has been retired and all FRDR datasets can be discovered through [Lunaris](https://www.lunaris.ca)
* Internal dataset search has been improved
* Metrics dashboards have been redesigned and discovery-related dashboards have been removed
* Documentation has been updated in both English and French
* Style guide has been updated

**2023-02-22**:

* Additional notices will be sent when a dataset embargo end date is approaching (60 days, 30 days and 5 days)
* Improved file tree and file cache generation so large datasets are ready for display sooner
* Added CSV export tool for administrators

**2022-10-26**:

* Fixed a problem when editing the ORCID ids and Author Affiliations in datasets with more than two authors
* Grouped associated metadata together in the curator view of item metadata

**2022-09-28**:

* Added discovery metrics to site statistics page

**2022-08-31**:

* Fixed a problem with location of generated checksum files
* Fixed a problem with non-ROR metadata display in Author Affiliation and Funder Name metadata fields
* Improved tracking of account application process status
* Added file format statistics to Site Metrics


**2022-07-27**:

* Links to dataset files are no longer forced to be downloaded, many file types will now display within the web browser
* Fixed a problem where multiple non-ROR affiliations could not be added to an author

**2022-06-29**:

* Added interactive Site Metrics dashboards available to the public
* Dataset contact information has been moved to the Access tab
* Dataset contact email address will be verified once a dataset is finished
* User Profile has been changed to User Settings
* Users may now sign into ORCID from their settings page instead of needing to copy and paste their ORCID iD
* Enhanced automatic scanning of datasets for corrupt and non-standard files has been added
* Scholars Portal has been renamed to Borealis, and all associated collections have been updated
* Concordia University of Edmonton Dataverse has been added to FRDR discovery

**2022-05-25**:

* Updated the About page to reflect the change from Compute Canada to Digital Research Alliance of Canada
* Fixed the display of embargo related metadata on the Verify step of deposit

**2022-04-27**:

* Changed the new user agreement button text to be inclusive of Terms of Use and Privacy Policy for clarity
* When entering geographic metadata, country is now required to be selected before city and province/state can be entered
* Updated web page footer to align with branding for Digital Research Alliance of Canada (The Alliance)
* Added data repository Columbia Basin Water Hub to FRDR Discovery
* Updated data repository Canadian Watershed Information Network (CanWIN)
* Fixed a problem with links to ORCID IDs on item landing pages

**2022-03-30**:

* First name is now no longer required for authors, so single name authors can be added to datasets
* Funder organization lookup is now based on the Research Organization Registry (ROR)

**2022-01-26**:

* Published the [Preservation Policy](https://www.frdr-dfdr.ca/policies/en/preservation/)

**2021-12-15**:

* Fixed authors not being displayed in some discovery search results
* Fixed collaboration icon missing in publication dashboard
* Fixed an issue that was casuing a delay in being able to approve new accounts

**2021-11-24**:

* Added new repositories to FRDR discovery: University of Winnipeg Dataverse, Dataverse de l'Université du Québec à Montréal, and Dataverse de l'Université du Québec en Outaouais

**2021-10-27**:

* Added Creative Commons Attribution-NoDerivatives 4.0 (CC BY-ND 4.0) license to the list of available licenses
* Fixed an issue that could cause multiple emails to submitters when an item is coming out of embargo
* Author institution affiliation is now matched to the Research Organization Registry (ROR) [https://ror.org/about/](https://ror.org/about/)
* Added Keyword facet to discovery interface and removed Subject
* Consolidated site assets and libraries to improve page loading times

**2021-09-28**:

* Added new repositories to FRDR discovery: Canadian Space Agency Open Data / Agence spatiale canadienne données ouvertes
* Added question about long-term preservation to ingest forms
* Add support for dataset notes and multiple lines in description
* Improved quality of records discoverable using FRDR Map Search

**2021-08-28**:

* Improve navigation on the communities page
* New interface for geographic metadata input

**2021-07-28**:

* Added temporal coverage field to Recommended Metadata
* Fixed an issue with Safari not filtering out dropdown choices when specifying the CRDC metadata

**2021-06-30**:

* Added new repositories to FRDR discovery: Dryad (filtered on datasets from Canadian researchers), Nordicana D
* Added new funders: BC Oil and Gas Research and Innovation Society (BC OGRIS), Leading Edge Endowment Fund (LEEF), Mount Royal University (MRU)
* Added buttons in curation tools to redo virus scan or file format identification scan
* FRDR Map Search now includes OpenDataSoft datasets
* Language improvements for French version of Map Search 

**2021-05-26**:

* Added new repositories to FRDR discovery: Yukon Open Data, Open Ottawa / Ottawa Ouverte, Saint Mary’s University Dataverse
* Added the Szechtman Lab Collection  https://www.frdr-dfdr.ca/repo/collection/szechtmanlab 
* Improve performance of displaying files in large datasets.
* Added validated Canadian Research and Development Classification metadata fields during datasets, and send that metadata to Datacite for DOI population
* Removed repository SFU Radar records from FRDR search

**2021-04-28**:

* Added new repositories to FRDR discovery: Dataverse de l'Université de Saint-Boniface
* Added Research Field to dataset metadata using the [Canadian Research and Development Classification standard](https://www.statcan.gc.ca/eng/subjects/standard/crdc/2020v1/index)
* Curators are now required to add a comment when rejecting a dataset
* Improved dataset virus/malware scanning
* Curators can now sort user profiles by date joined
* Added French localization to Geodisy (FRDR geographic search)
* Updated the website footer to include NDRIO logo and links
* Users can now switch between French and English language while in the middle of a deposit without losing track of which tab they were on
* Users can now enter their ORCID on their profile page
* Additional options were added to the list of related identifiers to indicate where datasets compile or continue other datasets
* A monthly backup verification process was put in place
* Fixed a problem with searching for datasets by phrase
* Fixed a problem with ordering of search results by title

**2021-03-31**:

* Added new repositories to FRDR discovery: Royal Roads University Dataverse and MacEwan University Dataverse
* Fixed a problem in deleting files that were uploaded through drag and drop
* Improved the wording at the top of item landing pages around embargo date and restrictions
* Fixed a problem adding multiple funders to a dataset.
* Reconfigured the connection to DataCite so that FRDR can now maintain DOIs for items that were moved into it from another repository
* Depositors are now warned if they specify metadata restrictions without supplying an embargo date
* Fixed the display of some related identifier labels
* Metadata dates are clearer around when a dataset becomes available taking into account embargo and embargo changes
* Removed Google Analytics
* Improved Geodisy pipeline to include processing geofiles from CKAN, Socrata, and FRDR-OAI repositories

**2021-02-24**:

* Advanced search for title, keyword or description will now search both French and English metadata fields
* Improved the French wording for many emails to users
* Allow checksums and filetypes file to be re-generated
* Terms of Use and Privacy Policy must now be reviewed and explicitly accepted by new users before they are allowed to deposit
* New “contact us” form was added to the top menu bar
* Added an email notification to depositors when items are 30 days away from embargo date
* Added CKAN and Socrata geofile processing to map-search pipeline, increasing number of previewable geospatial files
* Curators are able to update user application status
* Improved bulk metadata export and import for curators
* Added the following metadata elements to FRDR OAI feed:
    * datacite.creator.nameIdentifier
    * datacite.fundingReference.funderName
    * datacite.fundingReference.awardNumber
    * datacite.fundingReference.awardTitle
    * datacite.contributor.*
    * datacite.relationtype.*

**2021-01-27**:

* Installed and configured equipment at two hosting institutions: Simon Fraser and University of Waterloo
* Quota enforcement is now in place; the default allocation for new users is 1 TB
* Fixed a problem with Google Dataset search indexing for datasets with custom licenses
* Enforce 1-1-1 mapping between Funder name, award title and award name in dataset editing
* FRDR policies have been moved to a new location [https://www.frdr-dfdr.ca/policies/](https://www.frdr-dfdr.ca/policies/) and all policies are now available in both French and English
* Map based search is now getting metadata from all repositories that FRDR harvests
* Fixed a problem where English keywords were missing for certain harvested repositories
* Added a 30 day warning email to depositers for datasets coming out of embargo
* Updated the list of metadata contributor types
* Updated the list of metadata relation types
* Added a "Contact Us" form
* Added a form for existing users to fill out their profile details
* Curators can now view datasets before claiming them
* Curators can now view other curator's tasks
* Improved French and English wording and translations across the entire service, including user notification emails
* Update detailed view in search results: Renamed Category to Subject, Added new GeoSpatial fields, Added DateCollected field, Added list of contributors

**2020-12-16**:

* Added preferred language option to new user form and user profile

**2020-11-25**:

* Allow custom licenses for datasets, available by contacting a FRDR curator and explaining the use case
* Fixed a problem on the edit profile page when a user did not have their primary institution set
* Added French keywords to the discovery detailed metadata view
* Added keywords as a selection to the advanced search page
* Fixed access to dataset during curation process
* Add searchable and sortable user profiles page
* Improved GUI user accessibility functionality on public-facing pages, including improved colour contrasts
* Modified the item landing page citation format to align with Datacite suggested citation format

**2020-10-28**:

* Allow submitters to see the list of files for datasets that are published but still under embargo
* Added more descriptive labels to the deposit progress bar for "required metadata", "recommended metadata" and "geographic metadata"
* Improved navigation in documentation
* Continued work on accessibility compliance for public facing web pages
* Improved the messaging shown to users when FRDR is under maintenance
* Re-enabled statistics for files downloaded via Globus (HTTPS downloads are not yet counted in these stats)
* Add user dismissable notifications to dashboard and profile pages

**2020-09-30**:

* Item landing pages by default will now use the item UUID instead of the item DOI text.  Existing links that use item DOI text will continue to work and DOIs will continue to resolve properly.
* Fixed a problem with adding multiple funders to a dataset
* Changed the default cutoff to 50 items per directory for dataset file listing, so that web browsers won't timeout trying to display item landing pages for large datasets
* A file containing the selected dataset license will be placed within the dataset after publication
* Improvements to accessibility and mobile usability have been made to multiple areas of the site, and will continue into the next update

**2020-08-26**:

* Implemented a quota tracking and enforcement system.
* Added new repositories to FRDR discovery: Brandon University Dataverse.
* New user form for applying to deposit.

**2020-07-29**:

* Truncated the listing of files for datasets with very large numbers of files or folders.
* Added new repositories to FRDR discovery: Canadian Integrated Ocean Observing System (CIOOS), Cape Breton University Dataverse, Dalhousie University Dataverse, École nationale d'administration publique Dataverse, HEC Montréal Dataverse, Institut national de la recherche scientifique Dataverse, Université TÉLUQ Dataverse, University of Northern British Columbia Dataverse

**2020-06-24**:

* Updated the display of DOIs in multiple areas to make it uniform.
* Added permissions for sharing datasets with collaborators. Users can now specify if the collaborator can edit metadata, upload files and submit the dataset.
* The publication dashboard has been reformatted for large and small displays.
* Added new repositories to FRDR discovery: DataStream and UBC cIRcle BIRS Workshop Lecture Videos

**2020-05-27**:

* New feature: automated dataset file format identification and per-format curation guides for curators.
* Received new hardware for one hosting site (SFU)
* Fixed metadata for some items where multiple metadata values were not properly delimited
* Moved map search over to the bilingual domain geo.frdr-dfdr.ca
* Added FRDR logo to map search page
* Improved FRDR infrastructure monitoring to give the support team better insight into potential problems

**2020-04-29**:

* Added Globus metadata to OAI endpoint FRDR schema
* Split dataset license information into dc.rights and dc.rights.uri
* Funder name is now required if either award number or award title are supplied
* Map search beta link has been added to the FRDR home page
* Added user documentation and updated user interface for map search
* Added new repositories to FRDR discovery: Data Ontario, Concordia University Dataverse, Memorial University Dataverse, Royal Military College Dataverse, Université du Québec à Trois-Rivières Dataverse

**2020-03-25**:

* Added sharing of datasets with collaborators, allowing multiple people to work on the dataset metadata and also upload files
* Additional controls were added to prevent users from starting uploads just before a maintenance period
* Added an icon for ORCID iD when author ORCID iD is supplied
* Curation workflow is now on one page; automated curation tasks start at item submission

**2020-02-26**:

* Embargo date must now be in the future
* If an embargo date is supplied then embargo reason is required
* Tag input delimiter changed from comma to seminolon to support location metadata like "Vancouver, BC"
* FRDR domain has been moved frdr-dfdr.ca - all existing DOI links are being redirected

**2019-12-20**:

* All uploaded files are now scanned for malware before being sent to a curator
* Files may now be deleted from the https upload page
* Fixed a problem preventing more than 100 files showing up in a folder
* File listings will no longer be shown for items that are under embargo

**2019-10-30**:

* Increased the allowed length of the reason for embargo
* Various user interface improvements based on feedback from users and the User Experience group
* Service alerts can now have start and end dates
* Added datacite field "publication year" to comply with Datacite DOI requirements

**2019-08-30**:

* Bilingual service alerts can now be easily published and updated by the FRDR service manager as needed
* Added these repositories to FRDR discovery: University of Regina, Université de Montréal, Université Laval, Polytechnique Montréal, UBC Brain Circuits

**2019-07-30**:

* Added English and French service alerts to FRDR home page and the main deposit page

**2019-05-30**:

* Fixed upload of files showing as not finished when it has actually finished
* Added (FRDR) to the end of collection names to make them easier to find in the discovery interface
* Added the FRDR style guide to documentation
* Improved caching so that the file list on item landing pages will now list files faster
* Implemented a new monitoring system to better understand FRDR usage and growth

**2019-04-30**:

* Fixed the link to statistics on collection home pages
* Added a link to collection home page from relevant item pages
* New feature: storage usage is now shown on the submitter's dashboard

**2019-03-30**:

* Drag and drop upload is faster at preparing files (especially if there are many files)
* Added a privacy disclaimer to the bottom of the comments form
* Disabled continue/back/save buttons when HTTPS uploads are active
* Clarified wording on the preservation limits for FRDR
* Added the [Water Institute](https://www.frdr-dfdr.ca/go/waterinstitute) collection
* Added the [Mountain Legacy Project](https://www.frdr-dfdr.ca/go/mountainlegacy) collection

**2019-02-30**:

* The Deposit Data button on home page will now take users to a documentation page when they are not logged in
* Globus Search Platform was updated to handle larger volumes of ingested data from harvested repositories
* On the item landing page, related identifiers will be collapsed when there are more than 10
* The list of files and folders for each deposit is now cached so that viewing item landing pages is faster
* Updated the privacy information in the site footer

**2019-01-28**:

* Added a page to documentation that explains FRDR support for FAIR principles
* Hid the Globus Transfers panel when only drag-and-drop upload is being used
* Condensed the dataset landing page file listings
* Created the infrastructure for FRDR production monitoring stack
* Completed routine security audit (2 issues noted for resolution)
* Fixed the Harvester deletion routine
* Re-crawled Open Data Canada repository following a change in their feed schema
* Added privacy information to the footer of all pages

**2018-12-06**:

* Added these repositories to FRDR discovery: City of Ottawa, Province of Alberta, City of Surrey, Donneés Québec
* Improvements to the drag and drop file upload interface
* Removed a button on the license acceptance page to reduce clutter
* FRDR infrastructure was moved from one data centre (West Cloud) to another (Arbutus Cloud) within Compute Canada
* Backup and recovery procedures were verified

**2018-11-09**:

* New feature: secure upload of files and folders via drag-and-drop
* Added user documentation for drag-and-drop file upload
* Fixed an error that happened when using an apostrophe in the search query
* Fixed highlighting in search results for some cases
* Added JSON-LD to item landing pages for Google Dataset search
* Changed the harvester to retain dataset author order in search results
* When an item is sent back for revision, the date and acting curator are recorded in the item provenance record
* Discovery results links now open in a new window

**2018-09-28**:

* Added these repositories to FRDR Discovery: City of Calgary, City of Edmonton, Province of Nova Scotia, SLGO
* Users are now taken back to their submitted item list after depositing a dataset
* Fixed an error that showed up in the Curator dashboard after session timeout
* Fixed the metadata entry screens so that tab key navigation works as expected
* Fixed a problem with the RIS export data

**2018-08-31**:

* Simplified licensing options and added instructions for custom licensing
* Added University of Alberta to list of sources for discovery

**2018-07-31**:

* Updated documentation thanks to extensive work from the Portage expert group
* Improved French language user interface in a few places
* Added award/grant metadata to funder information
* Fixed a problem where the enter key wasn't working in multiline text boxes

**2018-07-19**:

* New feature: private contact information metadata for each dataset (never displayed on item landing pages)
* New feature: added a public contact form to item landing pages (only visible when dataset contact information is supplied)
* Changed related identifiers so they now show up on the default item landing page

**2018-07-05**:

* Updated location statistics to use GeoLite2 service
* Fixed an error that was being displayed when curators edited item metadata
* Added instructions on how to request new repositories be added to FRDR
* Fixed an error that was preventing incomplete datasets from being deleted

**2018-06-15**:

* Improved the Harvester REST API to support data cache timeout
* Reindexed the discovery results to reflect some large changes in coverage from Open Data Canada
* Removed some options to make related identifier easier to understand
* Implemented automated checks for backups
* Increased maximum keyword tags per dataset from 12 to 30
* Added a form tip on how to easily create tags
* Added a new Creative Commons license BY-NC-ND
* Removed the generic hosting institution, in favour of the per-author affiliated institutions
* Fixed file permissions when an item is rejected so that the submitter can make changes before resubmitting
* Fixed missing curation tasks
* Author metadata is now grouped together in the curator dashboard
* Updated both the English and French versions of the About FRDR page
* Improved harvester parsing of geolocation data
* Clicking on filename on landing page now downloads files directly
* Clarified language regarding data submitted to FRDR on About page

**2018-05-18**:

* Redesigned the item landing page to make it easier to understand how to download dataset files
* Moved the "About" link from a menu item to a top level navigation item
* Updated the French About page

**2018-04-18**:

* Added Author as a search facet in Discovery interface
* Changed tag input behaviour to allow adding tags by using Tab key
* Updated the harvester database design to improve scalability
* Developed a REST API for the harvester
* Added the list of source repositories to the discovery results page
* User entered tags will no longer be added to the dictionary until approved by a curator
* Improvements to deposited items showing up in Google
* Text on finalize button for both English and French shortened to fit properly on button
* Moved the Add button to make metadata entry more consistent
* Made it easier to understand how to delete unwanted metadata fields
* Redundant empty metadata fields are no longer added by default

**2018-03-28**:

* Fixed a problem in the entry of Author data

**2018-03-19**:

* Curation dashboard now asks to confirm approval of datasets
* Curator edit metadata now has a cancel button to return to Curation Dashboard
* Save and exit when curating metadata takes you back to same page as when you started curation process
* Added tag style input to Hosting Institution
* Improved advanced documentation for item deposit
* Affiliated institution and author ORCID is now shown beside author name on the item landing page

**2018-02-12**:

* New feature: "tag style" input for some metadata elements
* Updated documentation to indicate when DOIs are created
* Changed the "reply to" email address so that when users reply to curation-related email the reply will reach the curation group directly
* Removed all provenance metadata from the publicly viewable metadata files
* Improved wording on buttons in curator workflow

**2018-01-15**:

* Added documentation on cancelling file transfers and for deleting files that have already been transferred
* Added individual file download stats
* Added dataset DOIs on the list of in-progress datasets
* Changed embargo options: users can now choose to embargo data only leaving the landing page available, embargo data and hide the landing page from search results, and embargo the metadata as well as the data.
* Changed embargo visibility: users can now view their own datasets that are under embargo
* Datasets that are under embargo now have a warning at the top of their page showing when the embargo will expire as well as their metadata availability status

**2017-12-19**:

* Added an icon in search results to indicate when access to data is restricted
* Fixed a problem in the REST API when depositing as a standard user account
* Fixed transfer box alignment for Internet Explorer and Edge web browsers

**2017-12-15**:

* Updated French translations throughout the entire site (Thank you Shahira Khair and Danny Letourneau)
* Made tool tips wider to accommodate long tips
* Implemented Google Analytics for site statistics
* Added metadata field for author ORCID
* Added metadata field for author funding institution

**2017-11-23**:

* Improved Archivematica handling of large datasets (new limits are 25,000 files and/or 300 GB)
* Updated documentation to reflect new limits

**2017-10-19**:

* Implemented a "please wait" spinner on pages that take a long time to load
* REST API now returns the dataset DOI immediately on deposit

**2017-9-25**:

* Changed the upload dataset icon on the home page and the site favicon
* Updated the message to users who do not yet have permission to deposit
* Implemented per-item license selection

**2017-9-18**:

* Initial release
