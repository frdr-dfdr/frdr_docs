The redesigned FRDR Discovery Service separated from the FRDR website and launched as a standalone platform, Lunaris, on March 29th, 2023. [Lunaris](https://www.lunaris.ca/en) aggregates metadata from 100+ repositories, including datasets deposited in FRDR’s repository platform. It offers powerful functionality in discovering Canadian research data by using both text and map-based searching.  

You can also search for data deposited in FRDR using our <a href="/repo/search" target="_blank">internal search</a> functionality.

## Search Methods

### 1. Basic search

Enter your search term (one or more words) into the search box and click the search button or use the Enter key to submit. The search results will list datasets with a match on any of the words in any field.

#### Search Tips

* **Stemming:** To improve retrieval, all words in your search term will have “stemming” applied. In general, this means that different forms of the same root word will retrieve the same results. Examples include singular and plural (“tree” and “trees”) and different verb forms (“run” and “running”). The stemming algorithm does not always include irregular words. Stemming is only applied to the title, description, keyword and subject fields.

* **Exact phrases:** To find datasets with an exact phrase, use quotation marks. For example: “census profile”

* **Diacritics and accented characters:** Diacritics and accented characters are distinguished from unaccented characters. For example, a search for “Quebec” will return different results than a search for “Québec”.

* **Boolean:** Boolean terms (AND, OR, NOT) are case sensitive and can be used to join search terms. For example:
    * lakes NOT rivers: This search returns results with the word “lakes” in any field but omits results that also include the word “rivers.
    * lakes AND rivers: This search returns results with both the word “lakes” and the word “rivers” in any field.
    * lakes OR rivers: This search returns results with either the word “lakes” or the word “rivers” in any field.

* **Wildcards:** This can be used to replace any number of characters (\*) or an individual character (?) in text-based fields. For example, this search retrieves results with words that start with “Canad” (such as “Canada” and “Canadian”): canad\* .

* **Fuzziness:** Some fuzziness is already achieved by the stemming applied to fields with text-based content, such as title, description, and keywords. For example, stemming means that “economic” and “economics” are treated as equivalent. 

### 2. Advanced Search

Advanced Search provides a powerful tool for building complex and detailed search queries. The following metadata fields can be searched: Title, Author, Description, Keyword, Collection, Publication Date, Embargo State, Author Affiliation, Funder, Field of Research, Place Name, DOI and Rights.

NOTE: Selecting more than one value for the same field will only show results that include all selected values (it functions with the Boolean term AND). If you are interested in displaying search results for multiple authors (i.e., datasets with either author A or author B), we recommend using the "Author" filter under facets instead of performing an advanced search. 

### 3. Filtered Search

At the top of the available filters, the “Search Details” box displays your current search, including boolean terms. Clicking the “Reset” button will erase all of your existing search criteria.

The following filters are available to refine your search results:

* Collection
* Publication Date
* Author
* Keyword
* Embargo state

Only the first 10 options for each filter are displayed. You can use the “next” button to display the next 10 options, and/or search within the filter to narrow the results. To select a value within the filter, click it or the associated check box. The selected options will be pinned at the top within their filter. You can click the name or checkbox again to deselect the term, or use the  “Clear all” option to remove all of the selected terms.

If you select 2 terms within a filter, e.g., keywords ‘Prairie’ and ‘Agriculture’, your results will display all datasets that include either Prairie OR Agriculture in the keywords.

**Collection, Author, and Keyword**

Select values in the respective filter to include results with that value. Selecting more than one value within the same filter will include results with any of the selected values (Boolean search term OR). Selecting a value from more than one filter will include results with at least one selected value from each filter. For example, selecting ‘Mathematics’ and ‘Canada’ in the Keyword filter in addition to ‘John Doe’ and ‘Jane Doe’ in the Authors filter would create the following search refinement: (Mathematics OR Canada) AND (John Doe OR Jane Doe). 

By default, values in the Author, Keywords and Collections filters are sorted by the number of results (descending). There is a search bar at the top of the Author and Keyword filters that can be used to search that filter’s values. The type and search capabilities within filters is not case-sensitive.

**Publication Date**

The publication date filter is applied as a range. To use the filter, click on each date field and either select a date from the calendar pop-up or manually enter a date in  YYYY-MM-DD format, then click “Apply.” 

**Embargo state**

Use this option to filter out datasets that are under embargo. You can choose to view only those datasets that are public, or to include those that are currently under embargo. Please be aware that not all embargoed items will be included in search results since depositors can choose to keep their metadata record hidden (not indexed for search) until the embargo period has ended. 

For those embargoed items that appear in the search results, the search result record will lead to the dataset landing page, and **only** the metadata will be visible. Data files cannot be viewed or downloaded until the embargo period has ended.

## Search Results

Search results are listed on the right side of the page. The filters (facets) on the left side can be used to further refine or narrow your results. Results include the following information:

* The title of the dataset, which links to the dataset’s landing page in FRDR
* The name and logo for the Collection
* The author(s) of the dataset
* The date the dataset was published

## Dataset Landing Page

Click on the title of the dataset to navigate to the dataset landing page. From here you can view the full metadata record, browse the dataset contents, and download data files.

To view and download data files, see the section labeled "Files in Dataset." You can view top-level files and folders, as well as expand folders using the "+" icon. Some file types can be accessed or previewed using a web browser, depending on your browser's capabilities and settings. Please see [downloading data](downloading.md) for more details.

## Sorting

The search results page has a drop down sorting menu to specify the order that search results are displayed. Sorting can be specified by Relevance (default), Date Published, or Title.

By default, Search results are sorted by "Relevance" - a weighting scheme that favours matches found in the title first, then subject, then description.