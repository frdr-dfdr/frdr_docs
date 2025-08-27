<h1>Preparing Your Data</h1>

Gather your data files, documentation, and any information necessary to reuse your dataset. You may choose to provide processed data, ‘raw’ unprocessed data, or both, as well as the scripts, code or software needed to generate or reanalyze your data.

<hr class="redesign"/>

## Organizing your data files

<div class="card-shadow mb-3">
    <div class="card-body">
        <div class="card-title">
            Choose which types of data to deposit
        </div>
        <div class="mb-3">
            Gather your data files, documentation, and any information necessary to reuse your dataset. You may choose to provide processed data, ‘raw’ unprocessed data, or both, as well as the scripts, code or software needed to generate or reanalyze your data.
        </div>
        <div>
            You may choose to upload a version of your analysis scripts alongside your data, but we recommend that you deposit models, source code or research software in purpose-built repositories such as GitHub, GitLab or Bitbucket. These can be preserved in the <a href="https://www.softwareheritage.org/save-and-reference-research-software/">Software Heritage Archive</a> or <a href="https://guides.github.com/activities/citable-code/">Zenodo</a>. You can link directly to these and other research outputs from your <a href="/docs/en/describing_your_data/#recommended-metadata">FRDR metadata</a> using the ‘related identifier’ field and reference them in your README <a href="/docs/txt/README.txt">template here</a>).
        </div>
    </div>
</div>


<div class="card-shadow mb-3">
    <div class="card-body">
        <div class="card-row">
            <div class="card-col-flex">
                <div class="card-title">Structure your files</div>
                <div class="mb-3">When you deposit your data in FRDR, your file structure (how you have arranged your data into directories or folders) is retained. Consider arranging your files by type of data, date collected, or analysis to make them easier to understand. For example:</div>
                <div class="mb-3">
                    Example a)
                </div>
                <div class="code-panel mb-3">
                    <div class="dark-header">
                        Code
                    </div>
                    <div class="code-body">
                        ├── Code </br>
                        │   ├── process_raw_data.r </br>
                        │   ├── analysis_1.r </br>
                        │   └── analysis_2.r </br>
                        ├── Data </br>
                        │   ├── Raw_data </br>
                        │   │   ├── file_a.raw </br>
                        │   │   └── file_b.raw </br>
                        │   └── Processed_data </br>
                        │       ├── file_a.csv </br>
                        │       └── file_b.csv </br>
                        ├── Outputs </br>
                        │   ├── Figures </br>
                        │   └── Models </br>
                        └── README.txt </br>
                    </div>
                </div>
                <div class="mb-3">
                    Example b)
                </div>
                <div class="code-panel mb-3">
                    <div class="code-header">
                        Code
                    </div>
                    <div class="code-body">
                        ├── Documentation </br>
                        │   ├── site_information.csv </br>
                        │   ├── site_1.shp </br>
                        │   └── site_2.shp </br>
                        ├── Data </br>
                        │   ├── year_01 </br>
                        │   │   ├── site_1.csv </br>
                        │   │   └── site_2.csv </br>
                        │   └── year_02 </br>
                        │       ├── site_1.csv </br>
                        │       └── site_2.csv </br>
                        └── README.txt </br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <div class="card-title">Tips for file naming</div>
        <div class="mb-3">
            Name your files in a logical and descriptive way, so that you and other researchers can understand them at a glance. Keep file names brief, and consider including information about the project, content, date or version number as part of the filename. Use alphanumeric characters, and avoid spaces or special characters (%^& * ’). Your naming convention should be described in your README.
        </div>
        <div class="mb-3">
            Example (a): StanleyPark_Temperatures_20200801.csv
        </div>
        <div class="mb-3">
            Example (b): AnalysisPoem_IV05_v03.txt
        </div>
        <div class="mb-3">
            For further advice, see <a href="https://researchdata.library.ubc.ca/plan/organize-your-data/">UBC’s File Naming Conventions</a>, <a href="https://www.uottawa.ca/library/research-data-management/data-management-plan/file-naming-organization-data">uOttawa’s File naming and organization of data</a>, or <a href="https://www.usherbrooke.ca/biblio/archives/boite-a-outils-archivistiques/nommage-des-fichiers-numeriques-et-abreviations">Université de Sherbrooke Nommage des fichiers numériques</a> (in French only).
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <div class="card-title">Choosing preservation-friendly file formats</div>
        <div class="mb-3">
            We recommend using open, non-proprietary file formats to support accessibility and long-term preservation. FRDR is able to accept and ensure bit-level preservation for a variety of file formats, including the following:
        </div>
        <div class="mb-3">
            <ul>
                <li>Comma-separated values (CSV) for tabular data</li>
                <li>Semi-structured plain text formats for non-tabular data</li>
                <li>Structured plain text (XML, JSON)</li>
                <li>Images: JPEG, PNG, TIFF, SVG, GIF, DICOM, NIfTI</li>
                <li>Audio: FLAC, AIFF, WAV, MP3, AAC</li>
                <li>Video: MOV, MPEG-4, MKV</li>
                <li>Compressed file archive formats: TAR.GZ, 7Z, ZIP</li>
                <li>Large structured datasets: HDF5, NetCDF</li>
                <li>Geospatial: GeoTIFF, SHP, KML, GeoJSON</li>
                <li>Mass spectrometry: mzML</li>
            </ul>
        </div>
        <div class="mb-3">
            If proprietary file formats or vendor-specific software is necessary for the analysis or reuse of your files, please be aware that access may be limited and the stability and interpretability of the data over time may be negatively impacted. Consider the following:
        </div>
        <div class="mb-3">
            <ul>
                <li>Was a specialized instrument or software used to generate or analyze your files? Do you have the option to export files in an open format (e.g., plain text)?</li>
                <li>What file formats are widely used in your field? Is it likely that other researchers will have access to the software necessary to open your files? Is it likely that you will have access to the necessary software in 5 years, or 10 years?</li>
                <li>If you transform your files into open formats for deposit, will any information (data, metadata, formatting, macros, etc.) be lost? Can that information be represented another way, for example, by adding an additional variable to a tabular file, or including the information in a separate plain text file or documentation file?</li>
                <li>If proprietary files are necessary or preferred, can you also upload the files in an open format? </li>
            </ul>
        </div>
        <div class="mb-3">
            For more information on preservation formats, see guidelines from <a href="https://numerique.banq.qc.ca/patrimoine/details/52327/4076856">Bibliothèque et Archives nationales du Québec</a>(in French only), <a href="https://www.ukdataservice.ac.uk/manage-data/format/recommended-formats">UK Data Service</a>, or <a href="https://www.ed.ac.uk/information-services/research-support/research-data-service/after/data-repository/choosing-file-formats">University of Edinburgh</a>.
        </div>
    </div>
</div>

<hr/>

## Documenting your submission

Data will only be useful (and beneficial) in the long-term if they are thoroughly described. To ensure your data are interpreted correctly, it is important to include a codebook and/or a README file with your data, and to document your data collection methods. For this reason, a FRDR curator will ask that a README file is provided with your submission. You are welcome to draft your own, or you may use the [FRDR README template](/docs/txt/README.txt) (adapted from Cornell), available in English or in French.

Tips for writing READMEs:

* Name your file README.txt, or similar.
* Include a point of contact in your README file.
* If your data is derived (in whole or in part) from external sources, provide detailed attribution to those sources in your README file. 
	* Your source data may have a recommended or required citation you can copy, otherwise, we recommend including: 
		* Title
		* Authors
		* Institution or repository that published the data
		* DOI if available, or another unique identifier
		* Link to the data landing page or metadata record if available online 
		* Date accessed and/or the version number since online resources can change.
* List any restrictions on secondary use of your data in the README file, including any restrictions on data derived from third-party sources.
* Define all variables and allowable values. When applicable, include units of measure, and define the code you used for missing or null values.
* Include a brief description of your study, the methods you used to collect your data, and any steps you took to process the data you are depositing.
* If you removed variables from your raw dataset to create a public use copy for archiving, consider including a list of the variables that were removed so the changes made to your raw dataset are transparent. You might also choose to provide summary statistics or frequency counts for any variable that was removed.
* The names of equipment or instruments used to collect data, and software or statistical packages that were used to process the data should be listed in the README. If possible, include the version of software you used.
* Consider adding information about associated papers, study protocols, or supplementary materials that will provide further context for your data.
* If your file formats are not plain text, consider including a recommendation for software that can be used to view or analyze the files.
* If you plan to deposit code or software, include a description of what the code does, information about the computing environment, required dependencies, required input, expected output, and any instructions necessary to install or run.

Further guidance is available in UBC’s ‘[Quick Guide: Creating a README for your dataset](https://doi.org/10.5281/zenodo.4058971)’ and Cornell University’s ‘[Guide to writing "readme" style metadata](https://data.research.cornell.edu/content/readme)’. 

<hr/>

## Verify your data

After you submit your data, a member of FRDR’s curation team will review your deposit. Curators will work with you to help ensure the quality of metadata in the repository, and may suggest changes to increase the findability and accessibility of your data. Below are a few things to consider before you submit your dataset:

* *Have you provided a README, codebook, or other necessary documentation?* Useful additional documentation may include a description of your methodology, information about study protocols, statistical analysis plans, a copy of your Data Management Plan, an unsigned copy of any consent forms you provided to study participants, or clinical study reports.
* *Is your dataset complete?* Have you included all of the files you intended to share, and removed those that cannot or should not be shared? Are all files (or file types) described in the README? 
* *Are your files complete?* Have you defined variables and allowable values, included units of measure, and described null values where appropriate?
* If your files are in a proprietary format, *have you included information about the instrument or software used to generate the files*, and recommendations for visualizing the content?
* *Have you credited any third-party sources* that provided data or code for your analyses? See [Secondary use of data or code](#secondary-use-of-data-or-code).
* *Have you confirmed that none of your files contain protected or restricted information?* See [Restricted data](#restricted-data).

<div class="card-shadow mb-3">
    <div class="card-body">
        <div class="card-title">Secondary use of data or code</div>
        <div class="mb-3">
            Have you obtained data or code from a third party who may hold copyright or intellectual property rights that would prevent you from re-distributing them? Does the original data source allow redistribution, but with certain restrictions?
        </div>
        <div class="mb-3">
            If you are redistributing data or code, or publishing data derived from a third-party source, you will need to confirm you have permission to publish these data in FRDR before your submission can be approved by a curator. Uncertain if you need permission? Data that were made freely available for research purposes are not necessarily ‘free.’ Ask yourself:
        </div>
        <div class="mb-3">
            <ul>
                <li>Were you required to log-in to a website to download the data?</li>
                <li>Did you agree to any specific terms of use, sign a data use agreement, or reach an understanding with the data provider that would prevent you from publishing these data in FRDR?</li>
            </ul>
        </div>
        <div class="mb-3">
            Please consult the license or terms of use that accompany the source data and confirm you have adhered to all terms. If you are allowed to redistribute data points or derived products, please choose a license in FRDR that is compatible with the original license.
        </div>
        <div class="mb-3">
            If the data or code is readily available from another source, and you have not manipulated or edited them for your research, please consider linking to the original source rather than re-publishing. You may do so using the ‘related identifier’ field when you deposit your data. Please also include full citations for any data or software you reused in your README file.
        </div>
        <div class="mb-3">
            If you have questions about a particular source, or if you would like help selecting a license, please contact <a href="(mailto:support@frdr-dfdr.ca">upport@frdr-dfdr.ca</a>.
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <div class="card-title">Restricted data</div>
        <div class="mb-3">
            Please be aware that we are unable to provide restricted access to data at this time. Although we can set an embargo to protect your data from download in the short-term, all data deposited into FRDR at this time will eventually be made publicly available. Please confirm that you can share your data, and that appropriate steps have been taken to process, aggregate, or anonymize that data where necessary. You may need to consult your research agreements, participant consent forms or other documentation to confirm that publishing data in FRDR will not violate the terms under which you collected your data.
        </div>
        <div class="mb-3">
            Some common types of restricted data:
        </div>
        <div class="mb-3">
            <ol>
                <li>
                    <div><b>Human Participant Data</b></div>
                    <div>
                        If your research involves human participants or contains human biological material, confirm you have consent to share your data for new research purposes, in a public repository. Please prepare your data in compliance with any applicable legal or ethical guidelines. As you review your consent form, the Alliance Sensitive Data Expert Group’s <a href="https://doi.org/10.5281/zenodo.4060460">Research Data Management Language for Informed Consent</a> and ICPSR’s <a href="https://www.icpsr.umich.edu/web/pages/datamanagement/confidentiality/conf-language.html">Recommended Informed Consent Language for Data Sharing</a> may help you identify language that would preclude data sharing. If you have not received consent to share data, please review the Tri-Agency <a href="https://ethics.gc.ca/eng/depositing_depots.html">Guidance on Depositing Existing Data in Public Repositories</a>, and consult with your REB.
                    </div>
                    <div>
                        Learn more about potential restrictions and advice for processing human participant data for sharing in this helpful guide: <a href="https://doi.org/10.5281/zenodo.4041660">Can I Share My Data?</a> If you need to anonymize or de-identify your data for deposit, please see the following <a href="https://doi.org/10.5281/zenodo.4042022">e-identification Guidance</a>.
                    </div>
                    <div>
                        If you would like us to review your consent form ahead of submission, please contact <a href="mailto:support@frdr-dfdr.ca">support@frdr-dfdr.ca</a>. At this time the FRDR curation team cannot help you de-identify your data.
                    </div>
                </li>
                <li>
                    <div><b>Indigenous-owned Data</b></div>
                    <div>
                        Indigenous community leaders are in the best position to assess the benefits and risks of sharing Indigenous knowledge, data collected from their community members, and data collected on their lands, water, and ice. These data can only be shared in FRDR if community leaders have agreed that sharing data publicly, in FRDR or a similar general-purpose data repository, is appropriate. If you have questions, please consult with the Indigenous communities you worked with, and your institution’s Office of Indigenous Relations or Research Ethics Board. For more information, see:
                    </div>
                    <ul>
                        <li>The First Nations Principles of <a href="https://fnigc.ca/ocap-training/">Ownership, Control, Access and Possession (OCAP®)</a></li>
                        <li>Inuit Tapiriiti Kanatami (ITK) and Nunavut Research Institute <a href="https://www.itk.ca/wp-content/uploads/2016/07/Negotitiating-Research-Relationships-Researchers-Guide_0.pdf">Negotiating Research Relationships with Inuit Communities: A Guide for Researchers</a></li>
                        <li>ITK’s <a href="https://www.itk.ca/wp-content/uploads/2018/04/ITK_NISR-Report_English_low_res.pdf">National Inuit Strategy on Research</a></li>
                        <li>National Aboriginal Health Organization’s <a href="https://fnim.sehc.com/getmedia/bd0ef9fd-a05d-4b01-9cbd-6a7ca93f4f22/PrinciplesofEthicalMetisResearch-descriptive_001.pdf.aspx?ext=.pdf">Principles of Ethical Métis Research</a> and <a href="https://fnim.sehc.com/getmedia/ebbbb9b6-35bf-451e-9c48-48e7e62e454f/Metis-Research-Fact-Sheet.pdf.aspx?ext=.pdf">What Researchers Need from Métis Communities</a></li>
                        <li>Global Indigenous Data <a href="https://www.gida-global.org/care">CARE Principles for Indigenous Data Governance</a></li>
                    </ul>
                </li>
                <li>
                    <div><b>Location information</b></div>
                    <div>
                        You may need to remove or coarsen location information in your dataset. Consider doing so if you need to protect the confidentiality of study participants, or if your data were collected from field sites in protected areas, sensitive archaeological sites, or private property where consent to reveal location was not obtained or could devalue property or cause stigmatization. You may also need to remove or coarsen occurrence data of vulnerable species. For more information, the following resources may be helpful:
                    </div>
                    <div>
                        <ul>
                            <li>The UK Statistics Authority <a href="https://uksa.statisticsauthority.gov.uk/publication/ethical-considerations-in-the-use-of-geospatial-data-for-research-and-statistics/">Ethical considerations in the use of geospatial data for research and statistics</a> </li>
                            <li>The IUCN <a href="https://www.iucnredlist.org/">Red List of Threatened Species</a> for species status and known risks and threats to the species.</li>
                            <li>The Global Biodiversity Information Facility’s <a href="https://docs.gbif.org/sensitive-species-best-practices/master/en/">Guide to Best Practices for Generalising Sensitive Species-Occurrence Data</a>. This resource includes a matrix for assessing risk of harm and guidance for generalizing spatial information.</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div><b>Industry data</b></div>
                    <div>
                        If your data were collected with an industry partner, there may be restrictions on what data you can share, or when you can share your data. Please review any research contracts or other agreements you may have signed, and confirm you have permission to publish data in FRDR before you deposit. 
                    </div>
                </li>
            </ol>
        </div>
    </div>
</div>




