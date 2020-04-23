Welcome to the Federated Research Data Repository (FRDR)—a system for Canadian researchers to deposit and share research data and to facilitate discovery of research data in Canadian repositories.

<hr/>
<div class="demo-text" style="display:none">

**Demo Version of FRDR**

This [Demo Version of FRDR](https://demo.frdr-dfdr.ca/) is for testing or demonstration purpose only. It supports demonstrations of depositing, searching, and preservation. However, it does not retain data for any length of time.

As much as possible, this Demo Version tracks the current features and capabilities of the Production Version, so it can be a valuable tool for explaining or getting familiar with FRDR.

The demonstration version has the word Demo in the top banner.

If you do NOT want the demonstration version, click to access the [Production Version of FRDR](https://www.frdr-dfdr.ca/). However, because the Production Version creates permanent and registered DOIs and preservation copies, it should only be used for actual data deposits--not for demonstrations or testing.

Note that data deposited to the Demo Version of FRDR will still be discoverable and downloadable by other people also using the Demo Version of FRDR. Deposits to Demo are indexed separately from Production. This is necessary to be able to demonstrate functionality. Therefore, **any data submitted to the Demo Version should be safely sharable and not sensitive.**

**Deposits to the Demo Version of FRDR will be erased periodically and without notice.**

</div>

## FRDR in Limited Production
Anyone can use FRDR now to **_search_** for research datasets that have been deposited into FRDR or deposited into any of the many data repositories whose contents FRDR also indexes.

At this time, however, FRDR is in limited production and accepting data **_deposits_** only from invited research groups. The limited production period lets CARL and Compute Canada launch this important service for researchers and institutions in Canada on a limited scale, prior to hiring and training sufficient staff to appropriately support researchers across Canada.


## Pour notre communauté francophone:

La version française complète arrive bientôt et sera disponible lors du lancement de la phase de production.

Le DFDR contient déjà des interfaces bilingues pour les fonctions de recherche et de dépôt.

À la suite de notre partenariat, Globus a pris la décision, pour la première fois, d'internationaliser ses pages Web de connexion et de consentement.
Globus a également travaillé avec nous pour ajouter l'internationalisation à sa fonction de recherche.
Globus effectue actuellement des changements substantiels dans son interface Globus Transfer, y compris l'internationalisation, qui devraient entrer en vigueur plus tard cette année. Ces changements profiteront aussi une communauté plus large qui utilise Globus Transfer au-delà du DFDR.

La documentation en ligne du DFDR et l’ébauche des termes d'utilisation sont actuellement en cours de traduction en vue de leur finalisation.


## FRDR Features


### Search Features
* Bilingual user interface
* Search anonymously
* Search with either a web interface or API
* Search supports complex search queries
* Faceted search
* Searches across other Canadian research data repositories

### Deposit Features
* Bilingual user interface
* Deposit items with either a web interface or API
* Users can manage the dataset file hierarchy
* Supports embargo of data
* Suitable for broad range of data types
* Additional metadata schemas can be accommodated on request
* DOI are assigned and registered for all deposited datasets

### Data Preservation
* Automatic preservation of datasets using [Archivematica](https://www.archivematica.org/en/)
* Archival Information Packages (AIPs) are stored separately

### Data Quality
* Data validity supported with checksums at file and dataset level
* Dataset submissions moderated by curators
* Researchers must be authorized to submit data

### Scalability
* Designed to handle large files and large datasets
* Uses Globus Connect for transferring large datasets reliably
* Asynchronous and resumable transfers for dataset files
* Federated storage model: Individual institutions or organizations can deploy storage locally and can federate their local repository into the national system
* Federated support model: Data curation support provided by the Portage Network in coordination with local, [on-campus support](https://portagenetwork.ca/planning-managing-data/contacts-at-your-organization/) for researchers



## FRDR uses Globus tools
The Federated Research Data Repository has partnered with [Globus](https://www.globus.org/). a non-profit project out of the University of Chicago and Argonne National Laboratory, to deliver services, for example:

* FRDR uses Globus Connect to efficiently move large amounts of data, enabling FRDR to accept datasets that are too large for other repositories
* Logins to FRDR are managed using a Globus ID. A login is required to ensure that a person is eligible to deposit data into FRDR, to determine whether a person qualifies for access to data that has been embargoed, or to perform any curation activities.  **_A Globus ID is required to login to FRDR_**.
*  FRDR uses the Globus Search Platform to enable advanced searches. **_Searching for data in FRDR does not require a login_**.

Globus services are currently run in the USA on Amazon services. The research data itself remains stored in Canada. Only public metadata is copied to Globus. See our [Privacy Statement](terms_of_service.md#70-privacy-policy) for more information.
