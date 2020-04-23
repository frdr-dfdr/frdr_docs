## Indexing other repositories

The Federated Research Data Repository (FRDR) is designed to index research data repositories in Canada. These generally fall into three categories: data repositories hosted at Canadian universities which serve as a deposit point for researchers working at those institutions, government data portals, and domain-specific repositories hosted at larger or independent research centres which are known to researchers working in a given field.

The FRDR staff are working on adding new repositories to the index. Criteria which make a repository more likely to be prioritized include the following:

* Support for one of the metadata API formats currently implemented in the FRDR harvester. Currently, this is OAI (DC, DDI, and FGDC metadata standards) and CKAN; more may be added in the future.
* If a repository holds more than just research data -- for example, some university institutional repositories also hold theses and pre-print articles -- it should have some method of querying for only research data.
* Plaintext/keyword search and retrieval of datasets from the repository must be a plausible workflow; although FRDR offers advanced search options, we are unlikely to make an effort to index complex gene sequencing data which has little value outside of a specialized interface.
* Reliable point of contact at the host institution for resolving technical and/or metadata issues.


[Contact us](mailto:support@frdr-dfdr.ca?subject=query%20re%20harvesting%20a%20repository) to discuss FRDR harvesting the metadata from a repository.

## Metadata uploading

It is possible to upload a file containing some or all of the metadata for your dataset submission, instead of typing all of the metadata into web forms. The file containing your metadata could be created with an editor or a script could be written to generate the metadata file.

Click on the “Advanced” button at the bottom of any metadata entry web page to open the dialog.

Click on the "Download Template" button to get a file you can edit or use as a template for creating a script. The template has all of the metadata fields that are valid for this storage group. The template file is in a format called JSON. You likely want to “Save and exit” your submission to come back to later.

To supply your metadata, edit the values for your metadata fields between the empty quotes (" ") or add one or more values to the fields that can have multiple values denoted by square brackets ([ ]).

Most of the metadata fields are from the [Dublin Core metadata standard](<http://dublincore.org/documents/dces/>) or the [DataCite metadata standard](https://schema.datacite.org/). There may be some additional metadata fields added to FRDR--they can be ignored and left blank. Some special storage groups in FRDR may have additional metadata standards added. For questions about the formal metadata fields, send an email to <support@frdr-dfdr.ca>.

If a field has '"required":true' as a property then it must be provided before submitting the dataset. All fields, even required ones, can be omitted from the file when uploaded. Required fields will need to be entered through the web form before the dataset can be submitted but this is an easy way to populate the fields that might be common (publisher, authors etc.) while entering the unique ones by hand (e.g. title).

Once you are done creating your metadata file, save it, then go back to the "Advanced” dialog and click on the "Browse” button to find your file. Then click on the "Upload" button to read in your metadata file.

If there is a problem uploading or processing the metadata upload file an error will appear and none of the metadata from the file is applied to the submission.

For example, the metadata file template you download for a storage group might look like this:


```
{
    "dc": {
        "title": {
            "value": "",
            "required": true
        },
        "description": {
            "value": "",
            "required": false
        },
        "subject": {
            "value": [],
            "required": false
        },
        "contributor": {"author": {
            "value": [],
            "required": true
        }},
        "date": {"issued": {
            "value": "",
            "required": true
        }},
        "publisher": {
            "value": "",
            "required": true
        }
    }
}
```

In this example, you could then edit the template file with metadata field values like this (or write a script to generate a metadata file) to upload:

```
{
    "dc": {
        "title": {
            "value": "Collection of repository crawls"
        },
        "description": {
            "value": "A dataset collection of research data repository web site crawls."
        },
        "subject": {
            "value": ["Research Data", "Web site"]
        },
        "contributor": {"author": {
            "value": ["Tim Smith", "Jane Doe", "Susie Someone"]
        }},
        "date": {"issued": {
            "value": "2017-04-21",
        }},
        "publisher": {
            "value": "Compute Canada and CARL",
            "required": true
        }
    }
}
```

## For developers
This documentation is for users who want to develop applications or web sites that use FRDR technology.

### Search API

FRDR discovery uses Globus Search Platform for its back end, which itself is based on Elasticsearch. The FRDR harvester consumes feeds from various repositories across Canada, including the FRDR repository itself, and creates entries in the FRDR search index.

The Search API has two forms. Simple queries (for example, those not defining facets) may be accessed using the GET form for ease. More complicated queries may use the POST form to specify richer requirements. In either case, the result format is the same.

----

*GET Method*

URL: https://search.api.globus.org/v1/search/frdr-test?q=term

Query Parameters:

* (required) **q**: A string; the query to be executed.
* (optional) **offset**: Zero based offset into the result set, used for paging. Default 0, Maximum 10,000.
* (optional) **limit**: Maximum number of results to return. Default 10.

The particular search index is in the URL above.  "frdr-test" is for testing, and "frdr" is for production.

----

*POST Method*

URL: https://search.api.globus.org/v1/search/**frdr-test**

Query Parameters: None

POST Parameters:

* (required) Request Body: a GSearchRequest JSON document

Example GSearchRequest:

```javascript
{
  "@datatype": "GSearchRequest",
  "@version": "2016-11-09",
  "q": "(bears AND black) OR (trees AND green)",
  "offset": "20",
  "limit": "10",
  "advanced": true
}
```

----

*Query Syntax*

Two separate syntaxes for specifying the query are supported: standard and advanced. The standard query allows only for basic text matching. All queries will be processed, and results which best match the input will be provided. This form is typically appropriate for environments where end-users will be providing the content of the query string. The advanced syntax (used when the advanced value is set to true) supports ranges, regular expressions, matching on particular fields and other more sophisticated capabilities. The advanced syntax is subject to errors in parsing such as badly formed ranges or mis-named fields. As such, it is more appropriate for use when queries are generated by machine or as a result of assisting an end-user in building a query. The syntax is based on the [ElasticSearch query string syntax](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html#query-string-syntax) with the following exceptions:
1. When a field-name is provided that is not in URI form, it will be recognized as a field in any namespace (URI prefix) which has that name. This can be helpful when it is desirable to query across namespaces when those namespaces have chosen common names for semantically similar fields, but can also be misleading when the common names are not recognized. Therefore, this form should be used with care.
2. Wildcards in field names are not allowed. So, for example, the query "book.\*:(quick brown)" is not permitted.
3. The _missing_ and _exists_ query terms are not permitted.


### Item Deposit

**Note: these instructions are for Linux and Mac.  Windows instructions are being developed.**

You can use the [Globus Python Client](http://globus-sdk-python.readthedocs.io/en/stable/) to interact with Globus services, including FRDR.  Before starting, you must log into FRDR with the user account that you will use for deposit, and you should also make sure you have been given permission to deposit.

Install [Python](https://www.python.org/downloads/).

Install Virtualenv:

```bash
sudo pip install virtualenv
```

Install the Globus SDK python module:

```bash
sudo pip install globus-sdk
```

Obtain a copy of the REST API Client code by [contacting us](/docs/en/contact_support/).  This code is currently not publicly released.

Change directory to where the REST API Client code was downloaded, and then install it:

```bash
make install
```

To see the commands available to you, you can execute:
```bash
./globus-publish-client --help
```

Run the REST API Client code for the first time:

```bash
./globus-publish-client --service-url "https://demo.frdr-dfdr.ca/v1/api" --list-schemas
```
You will be instructed to copy and paste a URL into your web browser. The browser you use should already be logged in, as the user that will be depositing the items. You can then copy your authentication token back into the command line. You will end up with a JSON file that contains auth tokens in your home directory (default mode 0600).

To submit an item, the dataset bitstreams must already exist on a Globus endpoint somewhere accessible to the user that you logged in as above. The item metadata must also exist in the local filesystem in JSON format. The file can contain metadata for any element in any schema that is loaded. Here is an example, note the first line is always needed:

```javascript
{
    "accept_license": true,
    "dc.contributor.author": "Smith, Jane",
    "datacite.creator.affiliation": "University of Somewhere",
    "dc.rights": "Creative Commons Public Domain Dedication (CC0 1.0) https://creativecommons.org/publicdomain/zero/1.0/",
    "dc.description": "Dataset description",
    "dc.publisher": "University of Somewhere",
    "dc.subject": ["keyword1", "keyword2"],
    "dc.title": "My Dataset Title"
}
```

Remember that the JSON spec does not allow trailing commas for any data line.  If you include an extra comma, an error will be thrown by the client code when you try to submit the item: _"ValueError: Expecting property name enclosed in double quotes"_.

These are the current valid choices for dc.rights:
```
Creative Commons Public Domain Dedication (CC0 1.0) https://creativecommons.org/publicdomain/zero/1.0/
Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) https://creativecommons.org/licenses/by-sa/4.0/
Creative Commons Attribution-NonCommercial 4.0 (CC BY-NC 4.0) https://creativecommons.org/licenses/by-nc/4.0/
Creative Commons Attribution-NonCommercial-ShareAlike 4.0 (CC BY-NC-SA 4.0) https://creativecommons.org/licenses/by-nc-sa/4.0/
Creative Commons Attribution 4.0 International (CC BY 4.0) https://creativecommons.org/licenses/by/4.0/
```
You need to determine the storage group that the item will be deposited to.  You can obtain the list with this command:

```
./globus-publish-client --service-url "https://demo.frdr-dfdr.ca/v1/api" --list-collections
```

You will see a list like this:
```
[
  {
    "name": "Storage Group 1",
    "id": 3
  },
  {
    "name": "Storage Group 2",
    "id": 5
  }
]
```
You are interested in the ID of the storage group, it will be needed in the command to submit the item.  In this case, we will choose ID 3.

The command to submit the item (all arguments shown are required) is this:

```bash
./globus-publish-client \
  --service-url "https://demo.frdr-dfdr.ca/v1/api" \
  --create-submission --collection-id 3 \
  --metadata-file item.json \
  --transfer-data \
  --data-endpoint endpoint-uuid-goes-here --data-directory "/my_data/"
```

The UUID must point to a valid and running Globus Connect endpoint, the path must exist, and the depositing user must have permission to read data from that path on that endpoint.

This command will return with JSON similar to this:

```javascript
Dataset record created:
{
  "dc.date.issued": "2018-02-27",
  "dc.contributor.author": "Smith, Jane",
  "globus.shared_endpoint.path": "/1/unpublished/publication_64/",
  "dc.date.accessioned": "2018-02-27",
  "globus.shared_endpoint.name": "49eba39a-9987-11e7-ac63-22000a92523b",
  "id": 64,
  "dc.title": "My Dataset Title",
  "dc.publisher": "University of Somewhere",
  "dc.date.available": "2018-02-27"
}

Transfer request result: {
  "message": "The transfer has been accepted and a task has been created and queued for execution",
  "resource": "/transfer",
  "code": "Accepted",
  "request_id": "qNFY8ByuN",
  "task_link": {
    "resource": "task",
    "title": "related task",
    "DATA_TYPE": "link",
    "rel": "related",
    "href": "task/f25d0050-1cc2-11e8-b718-0ac6873fc732?format=json"
  },
  "submission_id": "f25d0051-1cc2-11e8-b718-0ac6873fc732",
  "DATA_TYPE": "transfer_result",
  "task_id": "f25d0050-1cc2-11e8-b718-0ac6873fc732"
}
id of transfer task is  f25d0050-1cc2-11e8-b718-0ac6873fc732
```
You need to record the dataset record ID.  In this case, 64.  Wait until you receive an email that your data has been transferred to FRDR, then you can finalize the submission with this command:

```bash
./globus-publish-client --service-url "https://demo.frdr-dfdr.ca/v1/api" --submission-id 64 --submit --wait
```

Once this command returns, you will see the DOI of the submitted item.  Wait 15 minutes for the DOI to resolve, then you can put that into a web browser and view the submission in FRDR.

If this command returned a timeout error, you can ignore it.  However, in order to query the item and determine the DOI at this point, you can execute this command:

```bash
./globus-publish-client --service-url "https://demo.frdr-dfdr.ca/v1/api" --dataset-id 64 --display-dataset

```

After a **submission** has been successfully and completely submitted it is now called a **dataset**.   So you use the same ID as above in the query, but the arguments are now referring to dataset.

Alternately, instead of submitting the item in 2 separate calls, the `--submit` and `--wait` flags can be added to the original command.  This will result in the deposit being started, the dataset files transferred, and the item being submitted and finalized all in one transaction.  However, this does make the script unresponsive while waiting for the dataset to be transferred, so it is really only suitable for very small datasets.
