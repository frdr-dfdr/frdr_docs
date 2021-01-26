FRDR provides powerful functionality to search for Canadian research data. This federated search tool aggregates metadata from numerous repositories, including datasets deposited in FRDR’s repository platform. The full list of repositories indexed by FRDR is available here: [FRDR-DFDR Repository List](https://www.frdr-dfdr.ca/discover/html/repository-list.html?lang=en).

## Search tips

* To improve retrieval, all words in your search term will have “stemming” applied. In general, this means that different forms of the same root word will retrieve the same results. Examples include singular and plural (“tree” and “trees”) and different verb forms (“run” and “running”). The stemming algorithm does not always include irregular words. Stemming is only applied to the title, description, keyword, and subject fields.
* Accented characters are distinguished from unaccented characters. For example, a search for “Quebec” will return different results than a search for “Québec”.
* Boolean words (AND, OR, NOT) are case sensitive.

## Search Methods

### 1. Basic search

Enter your search term (one or more words) into the search box, then click the search button (magnifying glass) or use the Enter key to submit. The search results will list datasets with a match on any of the words in any field.

### 2. Search query syntax

You can specify more complex searches using a subset of the ElasticSearch query string syntax in the basic search box. The syntax is powerful, but unforgiving.

#### Specifying field names

You can specify fields to search in the query syntax.

This search returns datasets where the title includes the word “forest” or the word “trees”:

* title: (forest trees)

The following fields are included in the metadata schema and may be searched using the **query syntax field name** indicated. These field names are case sensitive.

%%%%%%%% Adam to include table here %%%%%%%%%%%%%%%%

#### Constructing search terms

When multiple words are included within a single term (enclosed in parentheses), this is treated as the boolean OR. These two searches are equivalent, returning datasets where the title includes the word “city” or the word “urban”:

* title: (urban city)
* title: (urban OR city)

In order to retrieve matches for all words within a single term—in any order—use the boolean AND:

* title: (canada AND census)

To find datasets with an exact phrase in the title, use quotation marks:

* title: (“census profile”)

#### Joining search terms with boolean operators

In addition to using booleans within a search term, you can use AND, OR, and NOT to join multiple search terms. 

For example, this search retrieves datasets with “Ontario” in either the title or the author fields:

* title: (ontario) OR author: (ontario)

This search returns results with the word “lakes” in any field, that do not contain the word “rivers”:

* lakes NOT rivers

#### Wildcards

Wildcards can be used to replace any number of characters (*) or an individual character (?) in text-based fields.

For example, this search retrieves results with words that start with “Canad” (such as “Canada” and “Canadian”):

* canad*

You can also specify the exact number of characters to be replaced, using one question mark per character. For example, this search returns results including the word “gray” or “grey”:

* gr?y

#### Fuzziness

Some fuzziness is already achieved by the stemming applied to fields with text-based content, such as title, description, and keywords. For example, stemming means that “economic” and “economics” are treated as equivalent. You can increase the fuzziness to find related words by using a tilde, for example:

* (econom~)

In addition to returning results with “economic” and “economics”, this will also return results for “economy”, “economists”, and other related words.

#### Ranges

You can specify a numeric range for the date field using square brackets.

For example, this search retrieves datasets published between January 1 2020 and March 31 2020 (inclusive):

* date: [2020-01-01 TO 2020-03-31]

When searching dates, note that YYYY-MM dates will represent the first of the month, and YYYY dates will represent January 1st of that year. For example:

* date: [2020-01 TO 2020-04] searches from January 1 2020 to April 1 2020, inclusive.
* date: [2019-12 TO 2020] searches from December 1 2019 to January 1 2020, inclusive.
* date: [2018 TO *] searches from January 1 2018 to the present
* date: [* TO 1999-12-31]  searches for datasets published before the year 2000
 
For more information on the query syntax, consult the [ElasticSearch documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax). Exceptions to the ElasticSearch query string syntax in the FRDR implementation include:

* Wildcards in field names are not supported
* Using "regular expressions" is not supported
* The special fields _exists_: and _missing_: are not supported


### 3. Advanced Search interface

The [Advanced Search interface](https://www.frdr-dfdr.ca/discover/html/adv-search.html?lang=en) supports the following functionality:

* narrow results to a specific source repository
* search within a specific field (Author, Date, Description, Keyword, Title)
* construct boolean queries using AND, OR, and NOT (this is case sensitive)
* specify “All of these words”, “Any of these words”, or “This exact phrase” for each search term

The Advanced Search interface provides a graphical interface for generating select queries using the search query syntax described above. 

### 4. Map Search (beta)

FRDR’s [Geodisy map search (beta)](https://geo.frdr-dfdr.ca/) is an open source discovery tool that allows users to find open data from Canadian researchers by using an interactive map. Research data can be hard to find, and even harder when looking for data about a specific area or place. Geodisy changes that, giving users a window into the world of research data with straightforward map-based tools. Currently in beta, the map search includes datasets from [repositories indexed by FRDR](https://www.frdr-dfdr.ca/discover/html/repository-list.html?lang=en) with bounding box metadata. Dataverse repository datasets with location metadata and/or geospatial files are also included. FRDR’s Geodisy will continue to expand upon its collection to include more datasets from FRDR’s source list of institutional repositories.

## Search results

On the search results page each matching dataset discovered is shown with:

* The **title of the dataset**, which is also a link to the “landing page” for the dataset.
* The **name and logo for the repository** in which that dataset is kept. FRDR harvests information about datasets (metadata records) that are in a number of Canadian research data repositories. The logo is also a link that will take you to the home page for that repository.
* The **authors** of the dataset.
* The **date** the dataset was published.

Click on the “Show Details” button to expand the metadata displayed for the dataset.

There are two types of search results:

* Datasets deposited directly in FRDR’s own repository platform
* Datasets harvested by FRDR that are hosted by external repositories

### Landing Page

Click on the name of the dataset to navigate to  the landing page for that dataset.

#### Datasets harvested by FRDR

For a dataset that rests in an external repository, clicking the dataset name will take you to that other repository where rules and access permissions are no longer controlled by FRDR.

Landing pages vary between repositories, but generally will include:

* information about the license under which the dataset can be used
* information on how to cite the dataset
* any persistent identifiers for the dataset, such as a DOI
* information on how to access the data file(s) to view or download

#### Datasets deposited in FRDR

Datasets deposited directly into FRDR may have significantly more metadata than what is initially displayed. To access the full metadata record, click "Show full record" at the bottom of the FRDR landing page.

To access the data files directly deposited in FRDR, see the section of the dataset's landing page labelled "Files in Dataset." You can view top-level files and folders, as well as expand folders using the "+" icon. Some files can be accessed or previewed, using a web browser, depending on your browser's capabilities and settings. If there are many files in one folder, the file list will be truncated. Globus Connect is required to view the full list and download all contents. Smaller files can be downloaded directly from the data landing page using your browser. However, very large files (greater than 10 GB) can only be downloaded using Globus Connect. Datasets with many files or a large folder structure should be downloaded using Globus Connect rather than downloading the files one by one. For help installing and configuring Globus Connect, see the video Get started with FRDR: Download and Install Globus Connect Personal or contact support@frdr-dfdr.ca.

### Filtering

You can filter and refine results by:

* Date range
* Author
* Source repository

#### Date range

There are two ways to activate the date range filter:

* select a date range on the visualization
* enter the start and end years into the text boxes

After specifying the date range, click “Apply filter”. Dates will be inclusive of the entire year (for example, 2018 to 2020 will include January 1 2018 through December 31 2020).
Both methods will specify a date range at the year level. For more specific date ranges involving months and days, use the search query syntax for ranges.

#### Author and Source repository

Select values in the filter to include results with that value. Selecting more than one value within the same filter will include results with any of the selected values.

By default, values in the Author and Source repository filter are sorted by the number of results (descending). Click “Load More” to view additional results.

Using the arrows at the top, you can change the filter to sort by the number of results (ascending) or the name (ascending or descending). However, note that the filter only includes the results that have already been displayed by clicking “Load More”; therefore, the filter will not show a complete list until “Load More” has been clicked several times.

### Sorting

The search results page has a drop down menu to specify the order that search results are displayed. Sorting can be specified by relevance (default), title, or date. Note that **sorting is case-sensitive**. Titles beginning with a lowercase letter (e.g., "dGPS") or with accented characters (e.g., "Évaluation de l'impact du programme...") will appear after "Zooplankton."

By default, Search results are sorted by "relevance"—a weighting scheme that favours matches found in the title first, then subject, then description.
