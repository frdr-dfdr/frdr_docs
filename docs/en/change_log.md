This is a list of changes to FRDR, starting with the most recent:

**2021-08-28**:

* Improve navigation on the communities page.
* New interface for geographic metadata input.

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
* Improve performance of displaying files in large submissions.
* Added validated Canadian Research and Development Classification metadata fields during submissions, and send that metadata to Datacite for DOI population
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
* Fixed a problem adding multiple funders to a dataset during submission.
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
* Enforce 1-1-1 mapping between Funder name, award title and award name in submission
* FRDR policies have been moved to a new location [https://www.frdr-dfdr.ca/policies/](https://www.frdr-dfdr.ca/policies/) and all policies are now available in both French and English
* Map based search is now getting metadata from all repositories that FRDR harvests
* Fixed a bug where English keywords were missing for certain harvested repositories
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
* Fixed a bug on the edit profile page when a user did not have their primary institution set
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
* Fixed a problem with adding multiple funders to a submission
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
* Added permissions for sharing submissions with collaborators. Users can now specify if the collaborator can edit metadata, upload files and submit the dataset.
* The publication dashboard has been reformatted for large and small displays.
* Added new repositories to FRDR discovery: DataStream and UBC cIRcle BIRS Workshop Lecture Videos


**2020-05-27**:

* New feature: automated submission file format identification and per-format curation guides for curators.
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

* Added sharing of submissions with collaborators, allowing multiple people to work on the submission metadata and also upload files
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
* Fixed a bug preventing more than 100 files showing up in a folder
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
* Fixed an error that was preventing incomplete submissions from being deleted

**2018-06-15**:

* Improved the Harvester REST API to support data cache timeout
* Reindexed the discovery results to reflect some large changes in coverage from Open Data Canada
* Removed some options to make related identifier easier to understand
* Implemented automated checks for backups
* Increased maximum keyword tags per submission from 12 to 30
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

* Fixed a bug in the entry of Author data

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
* Added dataset DOIs on the list of in-progress submissions
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
