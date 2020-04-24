FRDR provides powerful functionality to search for datasets that exist in Canadian research data repositories—both in FRDR itself or in numerous repositories from which FRDR harvests metadata.

A Search box is available on many of the web pages in FRDR. Search by typing terms into the search box and clicking on the search icon. Search results open in a page showing relevant datasets as well as available facets to refine the results.

You can filter and refine results by:

* Date range
* Subject
* Source repository

There are three ways to Search:

### 1. Basic search

Enter one or more search terms into the Search box. The search results (using the logical OR operator) will list datasets with a match on any of the words.

<!-- This should be reviewed! Are we changing the behaviour for searches?-->
Note that accented characters are distinguished from unaccented characters. That is, a search for Quebec will return different results than a search for Québec.

### 2. Advanced Search interface

Clicking on the advanced search link will allow you to specify more parameters, via drop down menus, including: title, author, description, or subject keyword.

### 3. Map Search (beta)

This feature is currently under development.

### 4. Using Search syntax

Searchers can also specify more complex searches using a subset of the [ElasticSearch string query syntax](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax) The syntax is powerful, but unforgiving.


An example query might be:
```
title:(fish AND stock~) AND date:[2016-01-01 TO *]
```

Exceptions to the ElasticSearch syntax in the FRDR implementation include:

* Wildcards in field _names_ are not supported
* Using "regular expressions" is not supported
* Using boost values less than 1 (using any non-positive integer) is not supported
* The special fields \_exists\_:  and    \_missing\_:  are not supported

Note that the search query syntax can search any metadata fields in FRDR’s schema, not just the ones available in the Advanced Search interface.  E.g.:

```
http://dublincore.org/documents/dcmi-terms#contributor: Smit*
```

This would include any (fully specified) custom metadata fields created for a particular storage group in FRDR. It should be remembered that different repositories expose different metadata fields for harvesting, that there is some disagreement between repositories on how fields should be used, and also that many fields are left unpopulated.

## Viewing or downloading
On the search results page each matching dataset discovered is shown with:

 * The **name of the dataset**, which is also a link to the "landing page" for the dataset.
 * The **name and logo for the repository** in which that dataset is kept. FRDR gathers information about datasets (metadata records) that are in a number of other Canadian research data repositories. FRDR does not gather the actual datasets. The logo is also a link that will take you to the home page for that repository.
 * The **authors** of the dataset
 * Clicking on the "+Show Details" button will expand the displayed content to include some additional metadata for the dataset.

Clicking on the name of the dataset takes you the landing page for that dataset. Note that for a dataset that rests in a separate repository, clicking on the dataset name will take you to that other repository where rules and access permissions are no longer controlled by FRDR.

Landing pages vary between repositories, but generally will include:

* information about the license under which this dataset can be used
* information on how to cite this dataset
* any persistent identifiers for this dataset, such as its DOI
* information on how to actually access the data file(s) to view or download

Datasets deposited directly into FRDR may have significantly more metadata than what is initially displayed. To access the full metadata record, click on "Show full record" at the bottom of the FRDR landing page.

To access the data files directly deposited in FRDR, see the section of the dataset's landing page labelled "Files in Dataset." One can view top-level files and folders, as well as expand folders using the "+" icon. Some files can be accessed, even previewed, using a web browser. Which file types are viewable depends on your browser's capabilities and settings. Smaller files can be downloaded by your browser. However, very large files (greater than 10 GB) will have to be downloaded using Globus Connect. Datasets with many files or a large folder structure should be downloaded using Globus Connect rather than downloading the files one by one.

## Sorting Search Results
The Search results page has a drop down menu to specify the order that search results are displayed. Sorting can be specified by author, title, or date. Note that **sorting is case-sensitive**. Titles (or authors) beginning with a lowercase letter (e.g., "dGPS") or with accented characters (e.g., "Évaluation de l'impact du programme...") will appear after "Zooplankton."

By default, Search results are sorted by "relevance" — a weighting scheme that favours matches found in the title firstly, then subject, then description.

The order of search results can also be controlled with the boost operator (see 
 [Using Search syntax](searching.md#3-using-search-syntax) and [Elastic Search string query syntax](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax) .

## Searching Custom Metadata
FRDR can accommodate additional metadata standards so that more discipline-specific metadata can be saved with datasets and so that searches can be conducted based on the values of those metadata fields. A metadata schema for astronomical observations [Common Archive Observation Model (CAOM-2.2)](http://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/caom2/) has been added to the Demo version of FRDR as an example, and a dataset had been submitted with metadata complying with that standard.

To search specifying such custom metadata, the search query must include the full path to the metadata standard as well as the value(s) for the field(s) being sought.
<!-- This should be reviewed! Currently not working this way -->
For example the following search query specifies the field value "47" for the single metadata field "sequenceNumber" from the metadata standard "caom2/1.0", which standard has been copied into the [Demo instance of FRDR](http://demo.frdr-dfdr.ca/).
```
https://www.frdr.ca/schema/caom2/1.0/#sequenceNumber: 47
```
That search will find a dataset from the James Clerk Maxwell Telescope (in [demo.frdr-dfdr.ca](https://demo.frdr-dfdr.ca)). The metadata fields beyond the minimal Dublin Core standard can be viewed by selecting the "Show full record" button at the bottom of the dataset landing page.

Custom metadata fields are not available as menu items on the Advance Search page, nor are they available as search facets. However, all custom metadata in FRDR is indexed and available for searching.
