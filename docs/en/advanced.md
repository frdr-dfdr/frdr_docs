<h1>Advanced</h1>
## For developers
This documentation is for users who want to develop applications or web sites that use FRDR technology.

### Item Deposit

**Note: these instructions are for Linux and Mac.**

You can use the [Globus Python Client](http://globus-sdk-python.readthedocs.io/en/stable/) to interact with Globus services, including FRDR. Before starting, you must log into FRDR with the user account that you will use for deposit, and you should also make sure you have been given permission to deposit.

Install [Python](https://www.python.org/downloads/).

Install Virtualenv:

```bash
sudo pip install virtualenv
```

Install the Globus SDK python module:

```bash
sudo pip install globus-sdk
```

Obtain a copy of the REST API Client code by [contacting us](/repo/contactus).  This code is currently not publicly released.

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

To submit an item, the dataset bitstreams must already exist on a Globus endpoint somewhere accessible to the user that you logged in as above. The item metadata must also exist in the local filesystem in JSON format. Please contact a curator at [support@frdr-dfdr.ca](mailto:support@frdr-dfdr.ca) to receive a copy of the template.

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

Alternately, instead of submitting the item in 2 separate calls, the `--submit` and `--wait` flags can be added to the original command. This will result in the deposit being started, the dataset files transferred, and the item being submitted and finalized all in one transaction. However, this does make the script unresponsive while waiting for the dataset to be transferred, so it is really only suitable for very small datasets.
