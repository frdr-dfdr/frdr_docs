<h1>Change Log</h1>
This is a list of changes to FRDR, starting with the most recent:

<strong>2025-10-29</strong>:
<ul>
    <li>Displayed versioned datasets separately and added version tags on public search page</li>
    <li>Fix quota display to show quotas for all users</li>
    <li>Show collection links in quota panel on publication dashboard</li>
    <li>Improved file cache generation to prevent double counting of previous version files in quota calculation.</li>
    <li>Readme file now required for submission</li>
    <li>Improved help text for adding collaborators</li>
    <li>Streamlined new user submitter email</li>
    <li>Updated and fixed issues related to sensitive data, including improved workflows, messaging, and email templates</li>
    <li>Applied redesigned UI to documentation, policy and about pages</li>
    <li>Added search functionality to documentation, policy and about pages</li>
</ul>

<strong>2025-09-24</strong>:
<ul>
    <li>Improve collection metrics and put them on their own page</li>
</ul>

<strong>2025-08-27</strong>:
<ul>
    <li>Fixed resolution of external subpath links to: frdr.ca, dfdr.ca and frdr-dfdr.ca domains.</li>
    <li>Added link to OAI-PMH endpoint in documentation.</li>
    <li>Re-added file format metrics dashboard with link on front page.</li>
    <li>Fixed bug preventing collaborators from editing datasets.</li>
    <li>Update language and translations for French version of sensitive dataset workflows</li>
    <li>Remove filetypes from frdr checksum files</li>
</ul>

<strong>2025-07-30</strong>:
<ul>
    <li>Fixed pdf layout for Sensitive Data documents</li>
</ul>

<strong>2025-06-25</strong>:
<ul>
    <li>Added collection access request fields to new user application process</li>
</ul>

<strong>2025-05-28</strong>:
<ul>
    <li>Stopped auto updating email address from Google, Orcid and other sources where we don’t get email updates</li>
    <li>Fix issue with encoding of French-language example README.txt in documents.</li>
    <li>Fix issue where some file listings for new submissions were not showing the license and citation files.</li>
    <li>Don’t show version table if only a single version</li>
</ul>


<strong>2025-04-30</strong>:
<ul>
    <li>New feature: Automatic updating of email address. If you change your email address in your Globus profile, this will be updated in FRDR as well.</li>
</ul>


<strong>2025-03-26</strong>:

<ul>
    <li>New feature: Routine Fixity Checking. We have deployed a new process to verify the checksum of file contents for every file in every dataset published in FRDR on a routine schedule.</li>
    <li>Added a form to make it easier for users to request a quota increase.</li>
    <li>Added IsNewVersionOf and IsPreviousVersionOf Datacite metadata automatically to new versions of datasets.</li>
</ul>

<strong>2025-02-26</strong>:

<ul>
    <li>Created a report for curators to find datasets missing ROR metadata for research organizations within author affiliations and funders.</li>
</ul>

<strong>2025-01-29</strong>:

<ul>
    <li>Fixed the link to the French metrics inside collection home pages.</li>
</ul>

<hr />

<div class="d-flex">
    <h2 class="flex-grow-1">2024</h2>
    <div class="flex-grow-0">
        <button type="button" data-toggle="collapse" data-target="#year2024" class="btn alliance-btn-secondary expand-all"><span class="fas fa-plus mr-1"></span>Expand</button>
    </div>
</div>

<div id="year2024" class="collapse collapsed">

    <strong>2024-11-27</strong>:

    <ul>
        <li>New feature: Dataset Versioning. Submitters may now create a new version of a published dataset from their dashboard. Please see the [dataset versioning instructions](/docs/en/create_new_version/).</li>
        <li>Site Metrics dashboard now shows collection-faceted metrics, a map view of dataset views and downloads, download and view metrics for individual submissions.</li>
    </ul>


    <strong>2024-10-30</strong>:

    <ul>
        <li>The FRDR sensitive data deposit pilot has started, which is part of the Alliance [Controlled Access Management for Research Data Initiative](https://alliancecan.ca/en/funding-opportunities/controlled-access-management-research-data)</li>
    </ul>

    <strong>2024-08-28</strong>:

    <ul>
        <li>The depositor dashboard has been redesigned as part of FRDR ongoing alignment to Alliance branding</li>
        <li>Download limit has been removed for web download links; users may now choose to download any files they wish through their browser, however we still encourage the use of Globus Transfer for large files</li>
    </ul>

    <strong>2024-07-31</strong>:

    <ul>
        <li>Quota usage will now be displayed as zero instead of blank when users have not started their first deposit</li>
        <li>A point was added to the FAQ regarding logging into FRDR using institutional credentials</li>
        <li>The failed login page wording was updated to be clear when users must contact support to have their accounts activated</li>
        <li>Fixed a problem with the file listing “load more” button not working in some cases</li>
        <li>Updated ROR data to release 1.50</li>
    </ul>

    <strong>2024-05-29</strong>:

    <ul>
        <li>Updated the FRDR user interface to meet the WCAG Level AA accessibility requirements as part of ongoing accessibility review.</li>
        <li>Updated ROR data to schema version 2</li>
    </ul>

    <strong>2024-04-24</strong>:

    <ul>
        <li>Improved the user interface for selecting files during Zip download</li>
    </ul>

    <strong>2024-03-27</strong>:

    <ul>
        <li>Updated the Data Submission Policy to indicate that in-progress datasets will be deleted after one year of inactivity.</li>
        <li>Improved file format metrics with greater visibility into compressed and archival file formats.</li>
        <li>Added a new feature: download dataset files as a Zip</li>
    </ul>

    <strong>2024-02-28</strong>:

    <ul>
        <li>Improved the “contact dataset administrator” form so that it no longer marks some types of wording as spam</li>
        <li>Fixed the display of funder information on dataset landing pages when the funder ROR ID is not available</li>
        <li>Change display of ‘total size deposited’ statistic to only include published datasets</li>
    </ul>

    <strong>2024-01-31</strong>:

    <ul>
        <li>File sizes are now calculated using SI units (1000 B = 1 kB, 1000 kB = 1 MB, etc.) everywhere</li>
        <li>Provenance metadata no longer has a language attached to it</li>
        <li>The limit for empty metadata fields in deposit process has been removed</li>
        <li>Funder name is required if award information is provided in deposit process</li>
        <li>A new report has been created for curators to view datasets that are in progress</li>
        <li>Quota management has been improved for curators</li>
        <li>The welcome email has been changed to include a link to the <a href="https://groups.google.com/u/1/a/frdr-dfdr.ca/g/frdr-dfdr-info">FRDR Users Google Group</a></li>
    </ul>

</div>

<hr />

<div class="d-flex">
    <h2 class="flex-grow-1">2023</h2>
    <div class="flex-grow-0">
        <button type="button" data-toggle="collapse" data-target="#year2023" class="btn alliance-btn-secondary expand-all"><span class="fas fa-plus mr-1"></span>Expand</button>
    </div>
</div>

<div id="year2023" class="collapse collapsed">
<strong>2023-12-13</strong>:

<ul>
    <li>Fixed a problem in displaying file sizes for unpublished dataset files</li>
    <li>The email sent to new users on account approval was updated</li>
</ul>

<strong>2023-11-29</strong>:

<ul>
    <li>Automatically remove junk filesystem metadata files from submissions</li>
    <li>Convert units for total deposit size on front page to match other metrics displays</li>
    <li>Added a link to accessibility statement in the site footer</li>
    <li>Fixed an error that happened when deleting CRDC metadata</li>
    <li>Funder information will now show up on dataset landing pages when funder metadata has been supplied</li>
</ul>

<strong>2023-10-25</strong>:

<ul>
    <li>Further improvements have been made to dataset file listings, with better performance for datasets with a large number of files</li>
    <li>Free text search is disabled for Funder field in Advanced Search</li>
</ul>

<strong>2023-09-27</strong>:

<ul>
    <li>Deposits to FRDR can now be pushed to your ORCID profile in the works section, please see <a href="/docs/en/dashboard/#orcid">dashboard documentation for ORCID</a> for details</li>
    <li>Fixed an issue with the display of curation scan jobs</li>
    <li>Fixed an issue preventing some users from being able to start new deposits</li>
</ul>

<strong>2023-08-30</strong>:

<ul>
    <li>Added External Dataset Review feature</li>
    <li>File download links have been changed to permanent URLs that are hosted on FRDR, with redirects to wherever the files are currently located</li>
    <li>Minor formatting changes were done on the citation section of dataset landing pages</li>
</ul>

<strong>2023-07-26</strong>:

<ul>
    <li>Updated the site icon with new branding</li>
    <li>Fixed a problem where multiple copies of a dataset would appear to be published when more than one collaborator was working on it</li>
    <li>Fixed a problem when searching for datasets that have been withdrawn</li>
</ul>


<strong>2023-06-28</strong>:

<ul>
    <li>Home page list of recent datasets will no longer show datasets that are still under embargo</li>
    <li>Improved the web accessibility of many internal pages</li>
    <li>Removed the metadata harvesting policy (this has moved to Lunaris)</li>
</ul>

<strong>2023-05-03</strong>:

<ul>
    <li>Fixed web accessibility issues on a few public facing pages</li>
    <li>Updated some French translations of the word "dataset" to keep it consistent across the site</li>
    <li>Replaced most tool tips with links to documentation for an improved experience and better accessibility</li>
    <li>Added an option of "unsure" when asking depositors about the suitability of their dataset for long term preservation</li>
    <li>Fixed the list of recent datasets on the home page to include author names</li>
    <li>Fixed a problem with case sensitivity when searching for datasets</li>
</ul>

<strong>2023-03-29</strong>:

<ul>
    <li>The home page has been redesigned and new branding has been applied to all FRDR web pages</li>
    <li>FRDR discovery interface has been retired and all FRDR datasets can be discovered through [Lunaris](https://www.lunaris.ca)</li>
    <li>Internal dataset search has been improved</li>
    <li>Metrics dashboards have been redesigned and discovery-related dashboards have been removed</li>
    <li>Documentation has been updated in both English and French</li>
    <li>Style guide has been updated</li>
</ul>

<strong>2023-02-22</strong>:

<ul>
    <li>Additional notices will be sent when a dataset embargo end date is approaching (60 days, 30 days and 5 days)</li>
    <li>Improved file tree and file cache generation so large datasets are ready for display sooner</li>
    <li>Added CSV export tool for administrators</li>
</ul>

</div>

<hr />

<div class="d-flex">
    <h2 class="flex-grow-1">Before 2023</h2>
    <div class="flex-grow-0">
        <button type="button" data-toggle="collapse" data-target="#before2023" class="btn alliance-btn-secondary expand-all"><span class="fas fa-plus mr-1"></span>Expand</button>
    </div>
</div>

<div id="before2023" class="collapse collapsed">
<strong>2022-10-26</strong>:

<ul>
    <li>Fixed a problem when editing the ORCID ids and Author Affiliations in datasets with more than two authors</li>
    <li>Grouped associated metadata together in the curator view of item metadata</li>
</ul>

<strong>2022-09-28</strong>:

<ul>
    <li>Added discovery metrics to site statistics page</li>
</ul>

<strong>2022-08-31</strong>:

<ul>
    <li>Fixed a problem with location of generated checksum files</li>
    <li>Fixed a problem with non-ROR metadata display in Author Affiliation and Funder Name metadata fields</li>
    <li>Improved tracking of account application process status</li>
    <li>Added file format statistics to Site Metrics</li>
</ul>


<strong>2022-07-27</strong>:

<ul>
    <li>Links to dataset files are no longer forced to be downloaded, many file types will now display within the web browser</li>
    <li>Fixed a problem where multiple non-ROR affiliations could not be added to an author</li>
</ul>

<strong>2022-06-29</strong>:

<ul>
    <li>Added interactive Site Metrics dashboards available to the public</li>
    <li>Dataset contact information has been moved to the Access tab</li>
    <li>Dataset contact email address will be verified once a dataset is finished</li>
    <li>User Profile has been changed to User Settings</li>
    <li>Users may now sign into ORCID from their settings page instead of needing to copy and paste their ORCID iD</li>
    <li>Enhanced automatic scanning of datasets for corrupt and non-standard files has been added</li>
    <li>Scholars Portal has been renamed to Borealis, and all associated collections have been updated</li>
    <li>Concordia University of Edmonton Dataverse has been added to FRDR discovery</li>
</ul>

<strong>2022-05-25</strong>:

<ul>
    <li>Updated the About page to reflect the change from Compute Canada to Digital Research Alliance of Canada</li>
    <li>Fixed the display of embargo related metadata on the Verify step of deposit</li>
</ul>

<strong>2022-04-27</strong>:

<ul>
    <li>Changed the new user agreement button text to be inclusive of Terms of Use and Privacy Policy for clarity</li>
    <li>When entering geographic metadata, country is now required to be selected before city and province/state can be entered</li>
    <li>Updated web page footer to align with branding for Digital Research Alliance of Canada (The Alliance)</li>
    <li>Added data repository Columbia Basin Water Hub to FRDR Discovery</li>
    <li>Updated data repository Canadian Watershed Information Network (CanWIN)</li>
    <li>Fixed a problem with links to ORCID IDs on item landing pages</li>
</ul>

<strong>2022-03-30</strong>:

<ul>
    <li>First name is now no longer required for authors, so single name authors can be added to datasets</li>
    <li>Funder organization lookup is now based on the Research Organization Registry (ROR)</li>
</ul>

<strong>2022-01-26</strong>:

<ul>
    <li>Published the [Preservation Policy](https://www.frdr-dfdr.ca/policies/en/preservation/)</li>
</ul>

<strong>2021-12-15</strong>:

<ul>
    <li>Fixed authors not being displayed in some discovery search results</li>
    <li>Fixed collaboration icon missing in publication dashboard</li>
    <li>Fixed an issue that was casuing a delay in being able to approve new accounts</li>
</ul>

<strong>2021-11-24</strong>:

<ul>
    <li>Added new repositories to FRDR discovery: University of Winnipeg Dataverse, Dataverse de l'Université du Québec à Montréal, and Dataverse de l'Université du Québec en Outaouais</li>
</ul>

<strong>2021-10-27</strong>:

<ul>
    <li>Added Creative Commons Attribution-NoDerivatives 4.0 (CC BY-ND 4.0) license to the list of available licenses</li>
    <li>Fixed an issue that could cause multiple emails to submitters when an item is coming out of embargo</li>
    <li>Author institution affiliation is now matched to the Research Organization Registry (ROR) [https://ror.org/about/](https://ror.org/about/)</li>
    <li>Added Keyword facet to discovery interface and removed Subject</li>
    <li>Consolidated site assets and libraries to improve page loading times</li>
</ul>

<strong>2021-09-28</strong>:

<ul>
    <li>Added new repositories to FRDR discovery: Canadian Space Agency Open Data / Agence spatiale canadienne données ouvertes</li>
    <li>Added question about long-term preservation to ingest forms</li>
    <li>Add support for dataset notes and multiple lines in description</li>
    <li>Improved quality of records discoverable using FRDR Map Search</li>
</ul>

<strong>2021-08-28</strong>:

<ul>
    <li>Improve navigation on the communities page</li>
    <li>New interface for geographic metadata input</li>
</ul>

<strong>2021-07-28</strong>:

<ul>
    <li>Added temporal coverage field to Recommended Metadata</li>
    <li>Fixed an issue with Safari not filtering out dropdown choices when specifying the CRDC metadata</li>
</ul>

<strong>2021-06-30</strong>:

<ul>
    <li>Added new repositories to FRDR discovery: Dryad (filtered on datasets from Canadian researchers), Nordicana D</li>
    <li>Added new funders: BC Oil and Gas Research and Innovation Society (BC OGRIS), Leading Edge Endowment Fund (LEEF), Mount Royal University (MRU)</li>
    <li>Added buttons in curation tools to redo virus scan or file format identification scan</li>
    <li>FRDR Map Search now includes OpenDataSoft datasets</li>
    <li>Language improvements for French version of Map Search </li>
</ul>

<strong>2021-05-26</strong>:

<ul>
    <li>Added new repositories to FRDR discovery: Yukon Open Data, Open Ottawa / Ottawa Ouverte, Saint Mary’s University Dataverse</li>
    <li>Added the Szechtman Lab Collection  https://www.frdr-dfdr.ca/repo/collection/szechtmanlab </li>
    <li>Improve performance of displaying files in large datasets.</li>
    <li>Added validated Canadian Research and Development Classification metadata fields during datasets, and send that metadata to Datacite for DOI population</li>
    <li>Removed repository SFU Radar records from FRDR search</li>
</ul>

<strong>2021-04-28</strong>:

<ul>
    <li>Added new repositories to FRDR discovery: Dataverse de l'Université de Saint-Boniface</li>
    <li>Added Research Field to dataset metadata using the [Canadian Research and Development Classification standard](https://www.statcan.gc.ca/eng/subjects/standard/crdc/2020v1/index)</li>
    <li>Curators are now required to add a comment when rejecting a dataset</li>
    <li>Improved dataset virus/malware scanning</li>
    <li>Curators can now sort user profiles by date joined</li>
    <li>Added French localization to Geodisy (FRDR geographic search)</li>
    <li>Updated the website footer to include NDRIO logo and links</li>
    <li>Users can now switch between French and English language while in the middle of a deposit without losing track of which tab they were on</li>
    <li>Users can now enter their ORCID on their profile page</li>
    <li>Additional options were added to the list of related identifiers to indicate where datasets compile or continue other datasets</li>
    <li>A monthly backup verification process was put in place</li>
    <li>Fixed a problem with searching for datasets by phrase</li>
    <li>Fixed a problem with ordering of search results by title</li>
</ul>

<strong>2021-03-31</strong>:

<ul>
    <li>Added new repositories to FRDR discovery: Royal Roads University Dataverse and MacEwan University Dataverse</li>
    <li>Fixed a problem in deleting files that were uploaded through drag and drop</li>
    <li>Improved the wording at the top of item landing pages around embargo date and restrictions</li>
    <li>Fixed a problem adding multiple funders to a dataset.</li>
    <li>Reconfigured the connection to DataCite so that FRDR can now maintain DOIs for items that were moved into it from another repository</li>
    <li>Depositors are now warned if they specify metadata restrictions without supplying an embargo date</li>
    <li>Fixed the display of some related identifier labels</li>
    <li>Metadata dates are clearer around when a dataset becomes available taking into account embargo and embargo changes</li>
    <li>Removed Google Analytics</li>
    <li>Improved Geodisy pipeline to include processing geofiles from CKAN, Socrata, and FRDR-OAI repositories</li>
</ul>

<strong>2021-02-24</strong>:

<ul>
    <li>Advanced search for title, keyword or description will now search both French and English metadata fields</li>
    <li>Improved the French wording for many emails to users</li>
    <li>Allow checksums and filetypes file to be re-generated</li>
    <li>Terms of Use and Privacy Policy must now be reviewed and explicitly accepted by new users before they are allowed to deposit</li>
    <li>New “contact us” form was added to the top menu bar</li>
    <li>Added an email notification to depositors when items are 30 days away from embargo date</li>
    <li>Added CKAN and Socrata geofile processing to map-search pipeline, increasing number of previewable geospatial files</li>
    <li>Curators are able to update user application status</li>
    <li>Improved bulk metadata export and import for curators</li>
    <li>Added the following metadata elements to FRDR OAI feed:</li>
    <ul>
        <li>datacite.creator.nameIdentifier</li>
        <li>datacite.fundingReference.funderName</li>
        <li>datacite.fundingReference.awardNumber</li>
        <li>datacite.fundingReference.awardTitle</li>
        <li>datacite.contributor.*</li>
        <li>datacite.relationtype.*</li>
    </ul>
</ul>

<strong>2021-01-27</strong>:

<ul>
    <li>Installed and configured equipment at two hosting institutions: Simon Fraser and University of Waterloo</li>
    <li>Quota enforcement is now in place; the default allocation for new users is 1 TB</li>
    <li>Fixed a problem with Google Dataset search indexing for datasets with custom licenses</li>
    <li>Enforce 1-1-1 mapping between Funder name, award title and award name in dataset editing</li>
    <li>FRDR policies have been moved to a new location [https://www.frdr-dfdr.ca/policies/](https://www.frdr-dfdr.ca/policies/) and all policies are now available in both French and English</li>
    <li>Map based search is now getting metadata from all repositories that FRDR harvests</li>
    <li>Fixed a problem where English keywords were missing for certain harvested repositories</li>
    <li>Added a 30 day warning email to depositers for datasets coming out of embargo</li>
    <li>Updated the list of metadata contributor types</li>
    <li>Updated the list of metadata relation types</li>
    <li>Added a "Contact Us" form</li>
    <li>Added a form for existing users to fill out their profile details</li>
    <li>Curators can now view datasets before claiming them</li>
    <li>Curators can now view other curator's tasks</li>
    <li>Improved French and English wording and translations across the entire service, including user notification emails</li>
    <li>Update detailed view in search results: Renamed Category to Subject, Added new GeoSpatial fields, Added DateCollected field, Added list of contributors</li>
</ul>

<strong>2020-12-16</strong>:

<ul>
    <li>Added preferred language option to new user form and user profile</li>
</ul>

<strong>2020-11-25</strong>:

<ul>
    <li>Allow custom licenses for datasets, available by contacting a FRDR curator and explaining the use case</li>
    <li>Fixed a problem on the edit profile page when a user did not have their primary institution set</li>
    <li>Added French keywords to the discovery detailed metadata view</li>
    <li>Added keywords as a selection to the advanced search page</li>
    <li>Fixed access to dataset during curation process</li>
    <li>Add searchable and sortable user profiles page</li>
    <li>Improved GUI user accessibility functionality on public-facing pages, including improved colour contrasts</li>
    <li>Modified the item landing page citation format to align with Datacite suggested citation format</li>
</ul>

<strong>2020-10-28</strong>:

<ul>
    <li>Allow submitters to see the list of files for datasets that are published but still under embargo</li>
    <li>Added more descriptive labels to the deposit progress bar for "required metadata", "recommended metadata" and "geographic metadata"</li>
    <li>Improved navigation in documentation</li>
    <li>Continued work on accessibility compliance for public facing web pages</li>
    <li>Improved the messaging shown to users when FRDR is under maintenance</li>
    <li>Re-enabled statistics for files downloaded via Globus (HTTPS downloads are not yet counted in these stats)</li>
    <li>Add user dismissable notifications to dashboard and profile pages</li>
</ul>

<strong>2020-09-30</strong>:

<ul>
    <li>Item landing pages by default will now use the item UUID instead of the item DOI text.  Existing links that use item DOI text will continue to work and DOIs will continue to resolve properly.</li>
    <li>Fixed a problem with adding multiple funders to a dataset</li>
    <li>Changed the default cutoff to 50 items per directory for dataset file listing, so that web browsers won't timeout trying to display item landing pages for large datasets</li>
    <li>A file containing the selected dataset license will be placed within the dataset after publication</li>
    <li>Improvements to accessibility and mobile usability have been made to multiple areas of the site, and will continue into the next update</li>
</ul>

<strong>2020-08-26</strong>:

<ul>
    <li>Implemented a quota tracking and enforcement system.</li>
    <li>Added new repositories to FRDR discovery: Brandon University Dataverse.</li>
    <li>New user form for applying to deposit.</li>
</ul>

<strong>2020-07-29</strong>:

<ul>
    <li>Truncated the listing of files for datasets with very large numbers of files or folders.</li>
    <li>Added new repositories to FRDR discovery: Canadian Integrated Ocean Observing System (CIOOS), Cape Breton University Dataverse, Dalhousie University Dataverse, École nationale d'administration publique Dataverse, HEC Montréal Dataverse, Institut national de la recherche scientifique Dataverse, Université TÉLUQ Dataverse, University of Northern British Columbia Dataverse</li>
</ul>

<strong>2020-06-24</strong>:

<ul>
    <li>Updated the display of DOIs in multiple areas to make it uniform.</li>
    <li>Added permissions for sharing datasets with collaborators. Users can now specify if the collaborator can edit metadata, upload files and submit the dataset.</li>
    <li>The publication dashboard has been reformatted for large and small displays.</li>
    <li>Added new repositories to FRDR discovery: DataStream and UBC cIRcle BIRS Workshop Lecture Videos</li>
</ul>

<strong>2020-05-27</strong>:

<ul>
    <li>New feature: automated dataset file format identification and per-format curation guides for curators.</li>
    <li>Received new hardware for one hosting site (SFU)</li>
    <li>Fixed metadata for some items where multiple metadata values were not properly delimited</li>
    <li>Moved map search over to the bilingual domain geo.frdr-dfdr.ca</li>
    <li>Added FRDR logo to map search page</li>
    <li>Improved FRDR infrastructure monitoring to give the support team better insight into potential problems</li>
</ul>

<strong>2020-04-29</strong>:

<ul>
    <li>Added Globus metadata to OAI endpoint FRDR schema</li>
    <li>Split dataset license information into dc.rights and dc.rights.uri</li>
    <li>Funder name is now required if either award number or award title are supplied</li>
    <li>Map search beta link has been added to the FRDR home page</li>
    <li>Added user documentation and updated user interface for map search</li>
    <li>Added new repositories to FRDR discovery: Data Ontario, Concordia University Dataverse, Memorial University Dataverse, Royal Military College Dataverse, Université du Québec à Trois-Rivières Dataverse</li>
</ul>

<strong>2020-03-25</strong>:

<ul>
    <li>Added sharing of datasets with collaborators, allowing multiple people to work on the dataset metadata and also upload files</li>
    <li>Additional controls were added to prevent users from starting uploads just before a maintenance period</li>
    <li>Added an icon for ORCID iD when author ORCID iD is supplied</li>
    <li>Curation workflow is now on one page; automated curation tasks start at item submission</li>
</ul>

<strong>2020-02-26</strong>:

<ul>
    <li>Embargo date must now be in the future</li>
    <li>If an embargo date is supplied then embargo reason is required</li>
    <li>Tag input delimiter changed from comma to seminolon to support location metadata like "Vancouver, BC"</li>
    <li>FRDR domain has been moved frdr-dfdr.ca - all existing DOI links are being redirected</li>
</ul>

<strong>2019-12-20</strong>:

<ul>
    <li>All uploaded files are now scanned for malware before being sent to a curator</li>
    <li>Files may now be deleted from the https upload page</li>
    <li>Fixed a problem preventing more than 100 files showing up in a folder</li>
    <li>File listings will no longer be shown for items that are under embargo</li>
</ul>

<strong>2019-10-30</strong>:

<ul>
    <li>Increased the allowed length of the reason for embargo</li>
    <li>Various user interface improvements based on feedback from users and the User Experience group</li>
    <li>Service alerts can now have start and end dates</li>
    <li>Added datacite field "publication year" to comply with Datacite DOI requirements</li>
</ul>

<strong>2019-08-30</strong>:

<ul>
    <li>Bilingual service alerts can now be easily published and updated by the FRDR service manager as needed</li>
    <li>Added these repositories to FRDR discovery: University of Regina, Université de Montréal, Université Laval, Polytechnique Montréal, UBC Brain Circuits</li>
</ul>

<strong>2019-07-30</strong>:

<ul>
    <li>Added English and French service alerts to FRDR home page and the main deposit page</li>
</ul>

<strong>2019-05-30</strong>:

<ul>
    <li>Fixed upload of files showing as not finished when it has actually finished</li>
    <li>Added (FRDR) to the end of collection names to make them easier to find in the discovery interface</li>
    <li>Added the FRDR style guide to documentation</li>
    <li>Improved caching so that the file list on item landing pages will now list files faster</li>
    <li>Implemented a new monitoring system to better understand FRDR usage and growth</li>
</ul>

<strong>2019-04-30</strong>:

<ul>
    <li>Fixed the link to statistics on collection home pages</li>
    <li>Added a link to collection home page from relevant item pages</li>
    <li>New feature: storage usage is now shown on the submitter's dashboard</li>
</ul>

<strong>2019-03-30</strong>:

<ul>
    <li>Drag and drop upload is faster at preparing files (especially if there are many files)</li>
    <li>Added a privacy disclaimer to the bottom of the comments form</li>
    <li>Disabled continue/back/save buttons when HTTPS uploads are active</li>
    <li>Clarified wording on the preservation limits for FRDR</li>
    <li>Added the [Water Institute](https://www.frdr-dfdr.ca/go/waterinstitute) collection</li>
    <li>Added the [Mountain Legacy Project](https://www.frdr-dfdr.ca/go/mountainlegacy) collection</li>
</ul>

<strong>2019-02-30</strong>:

<ul>
    <li>The Deposit Data button on home page will now take users to a documentation page when they are not logged in</li>
    <li>Globus Search Platform was updated to handle larger volumes of ingested data from harvested repositories</li>
    <li>On the item landing page, related identifiers will be collapsed when there are more than 10</li>
    <li>The list of files and folders for each deposit is now cached so that viewing item landing pages is faster</li>
    <li>Updated the privacy information in the site footer</li>
</ul>

<strong>2019-01-28</strong>:

<ul>
    <li>Added a page to documentation that explains FRDR support for FAIR principles</li>
    <li>Hid the Globus Transfers panel when only drag-and-drop upload is being used</li>
    <li>Condensed the dataset landing page file listings</li>
    <li>Created the infrastructure for FRDR production monitoring stack</li>
    <li>Completed routine security audit (2 issues noted for resolution)</li>
    <li>Fixed the Harvester deletion routine</li>
    <li>Re-crawled Open Data Canada repository following a change in their feed schema</li>
    <li>Added privacy information to the footer of all pages</li>
</ul>

<strong>2018-12-06</strong>:

<ul>
    <li>Added these repositories to FRDR discovery: City of Ottawa, Province of Alberta, City of Surrey, Donneés Québec</li>
    <li>Improvements to the drag and drop file upload interface</li>
    <li>Removed a button on the license acceptance page to reduce clutter</li>
    <li>FRDR infrastructure was moved from one data centre (West Cloud) to another (Arbutus Cloud) within Compute Canada</li>
    <li>Backup and recovery procedures were verified</li>
</ul>

<strong>2018-11-09</strong>:

<ul>
    <li>New feature: secure upload of files and folders via drag-and-drop</li>
    <li>Added user documentation for drag-and-drop file upload</li>
    <li>Fixed an error that happened when using an apostrophe in the search query</li>
    <li>Fixed highlighting in search results for some cases</li>
    <li>Added JSON-LD to item landing pages for Google Dataset search</li>
    <li>Changed the harvester to retain dataset author order in search results</li>
    <li>When an item is sent back for revision, the date and acting curator are recorded in the item provenance record</li>
    <li>Discovery results links now open in a new window</li>
</ul>

<strong>2018-09-28</strong>:

<ul>
    <li>Added these repositories to FRDR Discovery: City of Calgary, City of Edmonton, Province of Nova Scotia, SLGO</li>
    <li>Users are now taken back to their submitted item list after depositing a dataset</li>
    <li>Fixed an error that showed up in the Curator dashboard after session timeout</li>
    <li>Fixed the metadata entry screens so that tab key navigation works as expected</li>
    <li>Fixed a problem with the RIS export data</li>
</ul>

<strong>2018-08-31</strong>:

<ul>
    <li>Simplified licensing options and added instructions for custom licensing</li>
    <li>Added University of Alberta to list of sources for discovery</li>
</ul>

<strong>2018-07-31</strong>:

<ul>
    <li>Updated documentation thanks to extensive work from the Portage expert group</li>
    <li>Improved French language user interface in a few places</li>
    <li>Added award/grant metadata to funder information</li>
    <li>Fixed a problem where the enter key wasn't working in multiline text boxes</li>
</ul>

<strong>2018-07-19</strong>:

<ul>
    <li>New feature: private contact information metadata for each dataset (never displayed on item landing pages)</li>
    <li>New feature: added a public contact form to item landing pages (only visible when dataset contact information is supplied)</li>
    <li>Changed related identifiers so they now show up on the default item landing page</li>
</ul>

<strong>2018-07-05</strong>:

<ul>
    <li>Updated location statistics to use GeoLite2 service</li>
    <li>Fixed an error that was being displayed when curators edited item metadata</li>
    <li>Added instructions on how to request new repositories be added to FRDR</li>
    <li>Fixed an error that was preventing incomplete datasets from being deleted</li>
</ul>

<strong>2018-06-15</strong>:

<ul>
    <li>Improved the Harvester REST API to support data cache timeout</li>
    <li>Reindexed the discovery results to reflect some large changes in coverage from Open Data Canada</li>
    <li>Removed some options to make related identifier easier to understand</li>
    <li>Implemented automated checks for backups</li>
    <li>Increased maximum keyword tags per dataset from 12 to 30</li>
    <li>Added a form tip on how to easily create tags</li>
    <li>Added a new Creative Commons license BY-NC-ND</li>
    <li>Removed the generic hosting institution, in favour of the per-author affiliated institutions</li>
    <li>Fixed file permissions when an item is rejected so that the submitter can make changes before resubmitting</li>
    <li>Fixed missing curation tasks</li>
    <li>Author metadata is now grouped together in the curator dashboard</li>
    <li>Updated both the English and French versions of the About FRDR page</li>
    <li>Improved harvester parsing of geolocation data</li>
    <li>Clicking on filename on landing page now downloads files directly</li>
    <li>Clarified language regarding data submitted to FRDR on About page</li>
</ul>

<strong>2018-05-18</strong>:

<ul>
    <li>Redesigned the item landing page to make it easier to understand how to download dataset files</li>
    <li>Moved the "About" link from a menu item to a top level navigation item</li>
    <li>Updated the French About page</li>
</ul>

<strong>2018-04-18</strong>:

<ul>
    <li>Added Author as a search facet in Discovery interface</li>
    <li>Changed tag input behaviour to allow adding tags by using Tab key</li>
    <li>Updated the harvester database design to improve scalability</li>
    <li>Developed a REST API for the harvester</li>
    <li>Added the list of source repositories to the discovery results page</li>
    <li>User entered tags will no longer be added to the dictionary until approved by a curator</li>
    <li>Improvements to deposited items showing up in Google</li>
    <li>Text on finalize button for both English and French shortened to fit properly on button</li>
    <li>Moved the Add button to make metadata entry more consistent</li>
    <li>Made it easier to understand how to delete unwanted metadata fields</li>
    <li>Redundant empty metadata fields are no longer added by default</li>
</ul>

<strong>2018-03-28</strong>:

<ul>
    <li>Fixed a problem in the entry of Author data</li>
</ul>

<strong>2018-03-19</strong>:

<ul>
    <li>Curation dashboard now asks to confirm approval of datasets</li>
    <li>Curator edit metadata now has a cancel button to return to Curation Dashboard</li>
    <li>Save and exit when curating metadata takes you back to same page as when you started curation process</li>
    <li>Added tag style input to Hosting Institution</li>
    <li>Improved advanced documentation for item deposit</li>
    <li>Affiliated institution and author ORCID is now shown beside author name on the item landing page</li>
</ul>

<strong>2018-02-12</strong>:

<ul>
    <li>New feature: "tag style" input for some metadata elements</li>
    <li>Updated documentation to indicate when DOIs are created</li>
    <li>Changed the "reply to" email address so that when users reply to curation-related email the reply will reach the curation group directly</li>
    <li>Removed all provenance metadata from the publicly viewable metadata files</li>
    <li>Improved wording on buttons in curator workflow</li>
</ul>

<strong>2018-01-15</strong>:

<ul>
    <li>Added documentation on cancelling file transfers and for deleting files that have already been transferred</li>
    <li>Added individual file download stats</li>
    <li>Added dataset DOIs on the list of in-progress datasets</li>
    <li>Changed embargo options: users can now choose to embargo data only leaving the landing page available, embargo data and hide the landing page from search results, and embargo the metadata as well as the data.</li>
    <li>Changed embargo visibility: users can now view their own datasets that are under embargo</li>
    <li>Datasets that are under embargo now have a warning at the top of their page showing when the embargo will expire as well as their metadata availability status</li>
</ul>

<strong>2017-12-19</strong>:

<ul>
    <li>Added an icon in search results to indicate when access to data is restricted</li>
    <li>Fixed a problem in the REST API when depositing as a standard user account</li>
    <li>Fixed transfer box alignment for Internet Explorer and Edge web browsers</li>
</ul>

<strong>2017-12-15</strong>:

<ul>
    <li>Updated French translations throughout the entire site (Thank you Shahira Khair and Danny Letourneau)</li>
    <li>Made tool tips wider to accommodate long tips</li>
    <li>Implemented Google Analytics for site statistics</li>
    <li>Added metadata field for author ORCID</li>
    <li>Added metadata field for author funding institution</li>
</ul>

<strong>2017-11-23</strong>:

<ul>
    <li>Improved Archivematica handling of large datasets (new limits are 25,000 files and/or 300 GB)</li>
    <li>Updated documentation to reflect new limits</li>
</ul>

<strong>2017-10-19</strong>:

<ul>
    <li>Implemented a "please wait" spinner on pages that take a long time to load</li>
    <li>REST API now returns the dataset DOI immediately on deposit</li>
</ul>

<strong>2017-9-25</strong>:

<ul>
    <li>Changed the upload dataset icon on the home page and the site favicon</li>
    <li>Updated the message to users who do not yet have permission to deposit</li>
    <li>Implemented per-item license selection</li>
</ul>

<strong>2017-9-18</strong>:

<ul>
    <li>Initial release</li>
</ul>
</div>
