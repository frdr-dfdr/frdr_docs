<h1>Advanced</h1>

<hr/>

## For developers
This documentation is for users who want to develop applications or web sites that use FRDR technology.

<div class="card-shadow mb-3">
    <div class="card-body">
        <div class="card-title">Item Deposit</div>
        <div>
            <b>Note: these instructions are for Linux and Mac.</b>
        </div>
        <div class="mb-3">
            You can use the <a href="http://globus-sdk-python.readthedocs.io/en/stable/">Globus Python Client</a> to interact with Globus services, including FRDR. Before starting, you must log into FRDR with the user account that you will use for deposit, and you should also make sure you have been given permission to deposit.
        </div>
        <div class="mb-3">
            Install <a href="https://www.python.org/downloads/">Python</a>.
        </div>
        <div class="mb-3">
            Install Virtualenv:
        </div>
        <div class="mb-3">
            <div class="code-panel mb-3">
                <div class="dark-header">Code</div>
                <div class="code-body">
                    sudo pip install virtualenv
                </div>
            </div>
        </div>
        <div class="mb-3">
            Install the Globus SDK python module:
        </div>
        <div class="mb-3">
            <div class="code-panel mb-3">
                <div class="dark-header">Code</div>
                <div class="code-body">
                    sudo pip install globus-sdk
                </div>
            </div>
        </div>
        <div class="mb-3">
            Obtain a copy of the REST API Client code by <a href="/repo/contactus">contacting us</a>.  This code is currently not publicly released.
        </div>
        <div class="mb-3">
            Change directory to where the REST API Client code was downloaded, and then install it:
        </div>
        <div class="mb-3">
            <div class="code-panel mb-3">
                <div class="dark-header">Code</div>
                <div class="code-body">
                    make install
                </div>
            </div>
        </div>
        <div class="mb-3">
            To see the commands available to you, you can execute:
        </div>
        <div class="mb-3">
            <div class="code-panel mb-3">
                <div class="dark-header">Code</div>
                <div class="code-body">
                    ./globus-publish-client --help
                </div>
            </div>
        </div>
        <div class="mb-3">
            Run the REST API Client code for the first time:
        </div>
        <div class="mb-3">
            <div class="code-panel mb-3">
                <div class="dark-header">Code</div>
                <div class="code-body">
                    ./globus-publish-client --service-url "https://demo.frdr-dfdr.ca/v1/api" --list-schemas
                </div>
            </div>
        </div>
        <div class="mb-3">
            You will be instructed to copy and paste a URL into your web browser. The browser you use should already be logged in, as the user that will be depositing the items. You can then copy your authentication token back into the command line. You will end up with a JSON file that contains auth tokens in your home directory (default mode 0600).
        </div>
        <div class="mb-3">
            To submit an item, the dataset bitstreams must already exist on a Globus endpoint somewhere accessible to the user that you logged in as above. The item metadata must also exist in the local filesystem in JSON format. Please contact a curator at <a href="mailto:support@frdr-dfdr.ca">support@frdr-dfdr.ca</a> to receive a copy of the template.
        </div>
        <div class="mb-3">
            You need to determine the storage group that the item will be deposited to.  You can obtain the list with this command:
        </div>
        <div class="mb-3">
            <div class="code-panel mb-3">
                <div class="dark-header">Code</div>
                <div class="code-body">
                    ./globus-publish-client --service-url "https://demo.frdr-dfdr.ca/v1/api" --list-collections
                </div>
            </div>
        </div>
        <div class="mb-3">
            You will see a list like this:
        </div>
        <div class="mb-3">
            <div class="code-panel mb-3">
                <div class="dark-header">Code</div>
                <div class="code-body">
                    <div class="ml-1">[</div>
                        <div class="ml-3">{</div>
                            <div class="ml-5">"name": "Storage Group 1",</div>
                            <div class="ml-5">"id": 3</div>
                        <div class="ml-3">},</div>
                        <div class="ml-3">{</div>
                            <div class="ml-5">"name": "Storage Group 2",</div>
                            <div class="ml-5">"id": 5</div>
                        <div class="ml-3">}</div>
                    <div class="ml-1">]</div>
                </div>
            </div>
        </div>
        <div class="mb-3">
            You are interested in the ID of the storage group, it will be needed in the command to submit the item.  In this case, we will choose ID 3.
        </div>
        <div class="mb-3">
            The command to submit the item (all arguments shown are required) is this:
        </div>
        <div class="mb-3">
            <div class="code-panel mb-3">
                <div class="dark-header">Code</div>
                <div class="code-body">
                    <div>./globus-publish-client \</div>
                      <div class="ml-5">--service-url "https://demo.frdr-dfdr.ca/v1/api" \                   </div>
                      <div class="ml-5">--create-submission --collection-id 3 \                              </div>
                      <div class="ml-5">--metadata-file item.json \                                          </div>
                      <div class="ml-5">--transfer-data \                                                    </div>
                      <div class="ml-5">--data-endpoint endpoint-uuid-goes-here --data-directory "/my_data/" </div>
                </div>
            </div>
        </div>
        <div class="mb-3">
            The UUID must point to a valid and running Globus Connect endpoint, the path must exist, and the depositing user must have permission to read data from that path on that endpoint.
        </div>
        <div class="mb-3">
            This command will return with JSON similar to this:
        </div>
        <div class="mb-3">
            <div class="code-panel mb-3">
                <div class="dark-header">Code</div>
                <div class="code-body">
                    <div>Dataset record created:</div>
                    <div>{</div>
                    <div class="ml-5">"dc.date.issued": "2018-02-27",</div>
                    <div class="ml-5">"dc.contributor.author": "Smith, Jane",</div>
                    <div class="ml-5">"globus.shared_endpoint.path": "/1/unpublished/publication_64/",</div>
                    <div class="ml-5">"dc.date.accessioned": "2018-02-27",</div>
                    <div class="ml-5">"globus.shared_endpoint.name": "49eba39a-9987-11e7-ac63-22000a92523b",</div>
                    <div class="ml-5">"id": 64,</div>
                    <div class="ml-5">"dc.title": "My Dataset Title",</div>
                    <div class="ml-5">"dc.publisher": "University of Somewhere",</div>
                    <div class="ml-5">"dc.date.available": "2018-02-27"</div>
                    <div>}</div>
                </div>
            </div>
        </div>
        <div class="mb-3">
            <div class="code-panel mb-3">
                <div class="dark-header">Code</div>
                <div class="code-body">
                    <div>Transfer request result: {</div>
                        <div class="ml-3">"message": "The transfer has been accepted and a task has been created and queued for execution",</div>
                        <div class="ml-3">"resource": "/transfer",</div>
                        <div class="ml-3">"code": "Accepted",</div>
                        <div class="ml-3">"request_id": "qNFY8ByuN",</div>
                        <div class="ml-3">"task_link": {</div>
                            <div class="ml-5">"resource": "task",</div>
                            <div class="ml-5">"title": "related task",</div>
                            <div class="ml-5">"DATA_TYPE": "link",</div>
                            <div class="ml-5">"rel": "related",</div>
                            <div class="ml-5">"href": "task/f25d0050-1cc2-11e8-b718-0ac6873fc732?format=json"</div>
                        <div class="ml-3">},</div>
                        <div class="ml-3">"submission_id": "f25d0051-1cc2-11e8-b718-0ac6873fc732",</div>
                        <div class="ml-3">"DATA_TYPE": "transfer_result",</div>
                        <div class="ml-3">"task_id": "f25d0050-1cc2-11e8-b718-0ac6873fc732"</div>
                    <div>}</div>
                    <div>id of transfer task is  f25d0050-1cc2-11e8-b718-0ac6873fc732</div>
                </div>
            </div>
        </div>
        <div class="mb-3">
            You need to record the dataset record ID.  In this case, 64.  Wait until you receive an email that your data has been transferred to FRDR, then you can finalize the submission with this command:
        </div>
        <div class="mb-3">
            <div class="code-panel mb-3">
                <div class="dark-header">Code</div>
                <div class="code-body">
                    ./globus-publish-client --service-url "https://demo.frdr-dfdr.ca/v1/api" --submission-id 64 --submit --wait
                </div>
            </div>
        </div>
        <div class="mb-3">
            Once this command returns, you will see the DOI of the submitted item.  Wait 15 minutes for the DOI to resolve, then you can put that into a web browser and view the submission in FRDR.
        </div>
        <div class="mb-3">
            If this command returned a timeout error, you can ignore it.  However, in order to query the item and determine the DOI at this point, you can execute this command:
        </div>
        <div class="mb-3">
            <div class="code-panel mb-3">
                <div class="dark-header">Code</div>
                <div class="code-body">
                    ./globus-publish-client --service-url "https://demo.frdr-dfdr.ca/v1/api" --dataset-id 64 --display-dataset
                </div>
            </div>
        </div>
        <div class="mb-3">
            After a <b>submission</b> has been successfully and completely submitted it is now called a <b>dataset</b>.   So you use the same ID as above in the query, but the arguments are now referring to dataset.
        </div>
        <div class="mb-3">
            Alternately, instead of submitting the item in 2 separate calls, the <code>--submit</code> and <code>--wait</code> flags can be added to the original command. This will result in the deposit being started, the dataset files transferred, and the item being submitted and finalized all in one transaction. However, this does make the script unresponsive while waiting for the dataset to be transferred, so it is really only suitable for very small datasets.
        </div>
    </div>
</div>
