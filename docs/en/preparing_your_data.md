## Organizing your data files

### Choose which types of data to deposit
Gather your data files, documentation, and any information necessary to reuse your dataset. You may choose to provide processed data, ‘raw’ unprocessed data or both, as well as the scripts, code or software needed to reanalyze your data.

You may choose to upload a version of your analysis scripts alongside your data, but we recommend that you deposit source code or software in purpose-built repositories such as GitHub, GitLab or Bitbucket. You can link directly to these other outputs from your FRDR metadata and reference them in your README.

### Structure your files
When you deposit your data in FRDR, your file structure (how you have arranged your data into directories or folders) is retained. Consider arranging these files by type, date, or analysis to make them easier to understand. For example:

**Example a)**

	├── Code
	│   ├── process_raw_data.r
	│   ├── analysis_1.r
	│   └── analysis_2.r
	├── Data
	│   ├── Raw_data
	│   │   ├── file_a.raw
	│   │   └── file_b.raw
	│   └── Processed_data
	│       ├── file_a.csv
	│       └── file_b.csv
	├── Outputs
	│   ├── Figures
	│   └── Models
	└── README.txt

**Example b)**

	├── Documentation
	│   ├── site_information.csv
	│   ├── site_1.shp
	│   └── site_2.shp
	├── Data
	│   ├── year_01
	│   │   ├── site_1.csv
	│   │   └── site_2.csv
	│   └── year_02
	│       ├── site_1.csv
	│       └── site_2.csv
	└── README.txt

### Tips for file naming
Name your files in a logical and descriptive way, so that you and other researchers can understand them at a glance. Keep file names brief, and consider including information about the project, content, date or version number as part of the filename. Use alphanumeric characters, and avoid spaces or special characters (%^& * ’). Your naming convention should be described in your README.

_Example:_ StanleyPark_Temperatures_20200801.csv

_Example:_ AnalysisPoem_IV05_v03.txt

For further advice, see [UBC’s File Naming Conventions.](https://researchdata.library.ubc.ca/plan/organize-your-data/)

### Choosing preservation-friendly file formats
Open, non-proprietary file formats are preferred for long-term preservation, but sometimes sharing proprietary file formats is necessary for the reuse of data. Consider the needs of the future researcher when deciding what types of files to deposit: 

* What file formats are widely used in your field? Is it likely that other researchers will have access to the software necessary to open your files?

* If you transform your files into open formats for deposit, will any information be lost?

FRDR is able to accept and ensure bit-level preservation for a variety of file formats, and will work with you to retain your data in the most appropriate format. However, we highly recommend the following preservation-friendly file formats:

* Comma-separated values (CSV) for tabular data
* Semi-structured plain text formats for non-tabular data
* Structured plain text (XML, JSON)
* Images: PDF, JPEG, PNG, TIFF, SVG, GIF, HEIF
* Audio: FLAC, AIFF, WAV, MP3, OGG, AAC
* Video: MOV, MPEG-4, MKV
* Compressed file archive formats: TAR.GZ, 7Z, ZIP

For more information on preservation formats, see guidelines from [UK Data Service](https://www.ukdataservice.ac.uk/manage-data/format/recommended-formats), [Cornell](https://guides.library.cornell.edu/ecommons/formats), [University of Edinburgh](https://www.ed.ac.uk/information-services/research-support/research-data-service/after/data-repository/choosing-file-formats).

## Documenting your submission

Data will only be useful (and beneficial) in the long-term if they are thoroughly described. To ensure your data are interpreted correctly, it is important to include a codebook and/or a README file with your data, and to document your data collection methods. For this reason, a FRDR curator will ask that a README file be provided with your submission. You may use the [FRDR README template](/docs/txt/README.txt). 

Tips for writing READMEs:

* Name your file README.txt.
* Include a point of contact in your README file.
* List any restrictions on secondary use of your data in the README file.
* For quantitative datasets, define all variables and allowable values. When applicable, include units of measure, and define the code you used for missing or null values.
* Include a brief description of your study, the methods you used to collect your data, and any steps you took to process the data you are depositing.
* If you removed variables from your raw dataset to create a public use copy for archiving, consider including a list of the variables that were removed so the changes made to your raw dataset are transparent. You might also choose to provide summary statistics or frequency counts for any variable that was removed. 
* The names of equipment or instruments used to collect data, and software or statistical packages that were used to process the data should be listed in the README. If possible, include the version of software you used. 
* If your data files were derived from external sources, provide attribution to those sources in your README file.
* Consider adding information about associated papers, study protocols, or supplementary materials that will provide further context for your data.
* If your file formats are not plain text, consider including a recommendation for software that can be used to view or analyze the files. 

Further guidance is available in UBC’s ‘[Quick Guide: Creating a README for your dataset](https://researchdata-06oct2014.sites.olt.ubc.ca/files/2020/04/QuickGuide_UBC_readme_v1.0_20200427.pdf)’ and Cornell University’s ‘[Guide to writing "readme" style metadata](https://data.research.cornell.edu/content/readme)’. 


## Reviewing your data
Please look your dataset over before you submit it for review. Some things you may wish to consider:

* *Have you provided a README, codebook, or other necessary documentation?* Useful additional documentation may include a copy of your Data Management Plan, an unsigned copy of any consent forms you provided to study participants, or information about study protocols, clinical study reports, or statistical analysis plans.
* *Is your dataset complete?* Have you included all of the files you intended to share? Have you removed extraneous files or files you did not intend to share? Are the files you describe in your README included in the dataset, and are the files in your dataset described in your README?
* *Are your files complete?* Have you defined variables and allowable values, included units of measure, and described null values where appropriate? 
* If your files are in a proprietary format, *have you included information about the software used to generate the files,* and recommendations for visualizing the content?  
* *Have you credited any third-party sources* that provided you data or code for your analyses? See [Secondary use of data or code](#secondary-use-of-data-or-code).
* *Have you confirmed that none of your files contain protected or restricted information?* See [Restricted data](#restricted-data).

FRDR curators will work with you to review your data at the time of submission to help ensure the quality of the metadata in the repository and to improve the findability and accessibility of your data. Curators are typically librarians employed by research institutions around the country. They may also be data managers embedded within research groups who have agreed to work with CARL Portage, and have been granted special permissions in the FRDR system.

### Secondary use of data or code
Have you obtained data or code from a third party who may hold copyright or intellectual property rights that would prevent you from re-distributing them?

If you used secondary data in your research, you will need to confirm you have permission to re-publish these data in FRDR before your submission can be approved by a curator. Uncertain if you need permission? Data that were made freely available for research purposes are not necessarily ‘free.’ Ask yourself:

* Were you required to log-in to a website to download the data?

* Did you agree to any specific terms of use, sign a data use agreement, or reach an understanding with the data provider that would prevent you from publishing these data in FRDR?

If the data are readily available from another source and you have not manipulated or edited the datasets for your research, please consider linking to the original source rather than re-publishing. You may do so using the ‘related identifier’ field when you deposit your data. Please also include full citations for any data or software you reused for your study in your README file.

### Restricted data
Please be aware that we are unable to provide restricted access to data at this time. Although we can set an embargo to protect your data from download in the short-term, all data deposited into FRDR under current terms will eventually be made publicly available. Please confirm that you can share your data, and that appropriate steps have been taken to process and anonymize that data where necessary. You may need to consult your participant consent forms or other documentation to confirm that publishing data in FRDR will not violate the terms under which you collected your data.

Some common types of restricted data are:

#### Human Participant Data

If your research involves human participants or contains human biological material, please confirm that you have consent to share your data, and prepare your data in compliance with any applicable legal or ethical guidelines. Learn more about potential restrictions and advice for processing human participant data for sharing in this helpful guide: [Can I Share My Data?](https://doi.org/10.5281/zenodo.4041660) If you need to anonymize or de-identify your data for deposit, please see the following [De-identification Guidance.](https://doi.org/10.5281/zenodo.4042022)

#### Indigenous-owned Data

Indigenous community leaders are in the best position to assess the benefits and risks of sharing Indigenous knowledge, as well as data collected from Indigenous people, Indigenous lands, water, and ice. These data can only be shared in FRDR if community leaders have agreed that sharing is appropriate. Please consult with your Research Ethics Board or for more information, see:

* The First Nations Principles of [Ownership, Control, Access and Possession (OCAP™)](https://fnigc.ca/ocap)

* First Nations Information Governance Centre (FNIGC). [A First Nations Data Governance Strategy](https://fnigc.inlibro.net/cgi-bin/koha/opac-retrieve-file.pl?id=9c677f3dcf8adbf18fcda96c6244c459). March 30, 2020.

* Inuit Tapiriiti Kanatami (ITK) and Nunavut Research Institute [Negotiating Research Relationships with Inuit Communities: A Guide for Researchers](https://www.itk.ca/wp-content/uploads/2016/07/Negotitiating-Research-Relationships-Researchers-Guide_0.pdf)

* ITK’s [National Inuit Strategy on Research](https://www.itk.ca/wp-content/uploads/2018/04/ITK_NISR-Report_English_low_res.pdf)

* National Aboriginal Health Organization’s [Principles of Ethical Métis Research](https://fnim.sehc.com/getmedia/bd0ef9fd-a05d-4b01-9cbd-6a7ca93f4f22/PrinciplesofEthicalMetisResearch-descriptive_001.pdf.aspx?ext=.pdf)

* Global Indigenous Data [CARE Principles for Indigenous Data Governance](https://www.gida-global.org/care)

#### Location information

You may need to remove or coarsen location information if your data were collected from field sites in protected areas, sensitive archaeological sites, or private property where consent to reveal location was not obtained or could devalue property or cause stigmatization. You may also need to remove or coarsen occurrence data of vulnerable species. Please consult the IUCN [Red List of Threatened Species](https://www.iucnredlist.org/) for species status and known risks and threats to the species. The Global Biodiversity Information Facility’s [Guide to Best Practices for Generalising Sensitive Species-Occurrence Data](https://doi.org/10.15468/doc-5jp4-5g10) includes a matrix for assessing risk of harm and guidance for generalizing spatial information.
