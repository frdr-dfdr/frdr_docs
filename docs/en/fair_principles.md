<h1>FAIR Principles</h1>

<hr/>

First published in 2016, the FAIR Principles were developed as a concise and measurable set of guidelines to ensure that research (meta)data are findable, accessible, interoperable, and re-usable by both humans and machines, thereby maximizing their scientific value (Wilkinson et al., 2016). Since their introduction, the FAIR Principles have become a standard by which research data management tools and services can be evaluated and have seen rapid adoption by funders, publishers, and service providers (Wilkinson et al., 2018).

FRDR supports the FAIR Principles in the following ways:

<div class="card-shadow mb-3">
    <div class="card-body">
        <h3 id="to-be-findable">TO BE FINDABLE:</h3>
        <div class="card-title">F1. (meta)data are assigned a globally unique and eternally persistent identifier.</div>
        <div class="mb-3">
            FRDR assigns DOIs to all accepted submissions through DataCite Canada.
        </div>

        <hr/>

        <div class="card-title">F2. data are described with rich metadata.</div>
        <div class="mb-3">
            All content deposited directly into FRDR is required to conform to a template from which complete Dublin Core and DataCite XML can be generated; custom metadata fields are supported when applicable with the goal of ensuring these map to existing standards.
        </div>

        <hr/>

        <div class="card-title">F3. (meta)data are registered or indexed in a searchable resource.</div>
        <div class="mb-3">
            FRDR's own OAI endpoint is used to harvest metadata for discovery in FRDR's index of Canadian data repositories, and this OAI endpoint is open to the public.
        </div>

        <hr/>

        <div class="card-title">F4. metadata specify the data identifier.</div>
        <div class="mb-3">
            DOIs and other identifiers are visible on objects' landing pages.
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h3 id="to-be-accessible">TO BE ACCESSIBLE:</h3>
        <div class="card-title">A1. (meta)data are retrievable by their identifier using a standardized communications protocol.</div>
        <div class="mb-3">
            DOIs are indexed by aggregators such as re3data, and DOIs can be used as an entry point to FRDR's own index.
        </div>

        <hr/>

        <div class="card-title">A1.1 the protocol is open, free, and universally implementable.</div>
        <div class="mb-3">
            DOIs and OAI are open standards. Additionally, the code for FRDR's harvester is openly available: <a href="https://github.com/frdr-dfdr/frdr_harvest">https://github.com/frdr-dfdr/frdr_harvest</a>
        </div>

        <hr/>

        <div class="card-title">A1.2 the protocol allows for an authentication and authorization procedure, where necessary.</div>
        <div class="mb-3">
            Globus authorization is implemented for any datasets which are not publicly available, and ORCiD can be used to register for authorization.
        </div>

        <hr/>

        <div class="card-title">A2 metadata are accessible, even when the data are no longer available.</div>
        <div class="mb-3">
            FRDR has been designed to maintain tombstone pages for datasets which have been removed from FRDR itself.
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h3 id="to-be-interoperable">TO BE INTEROPERABLE:</h3>
        <div class="card-title">I1. (meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.</div>
        <div class="mb-3">
            FRDR has been working with Portage's Discovery Expert Group to facilitate the use of OpenRefine to map FAST vocabulary terms onto harvested keyword metadata.
        </div>

        <hr/>

        <div class="card-title">I2. (meta)data use vocabularies that follow FAIR principles.</div>
        <div class="mb-3">
            The FAST vocabulary is consistent with FAIR principles.
        </div>

        <hr/>

        <div class="card-title">I3. (meta)data include qualified references to other (meta)data.</div>
        <div class="mb-3">
            Wherever possible, FRDR's curators make use of "related" elements in submitted datasets in order to improve data linking.
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h3 id="to-be-re-usable">TO BE RE-USABLE:</h3>
        <div class="card-title">R1. meta(data) have a plurality of accurate and relevant attributes.</div>
        <div class="mb-3">
            FRDR's default metadata template based on the Dublin Core and DataCite schemas is robust, with many accurate and relevant attributes from which users may choose.
        </div>

        <hr/>

        <div class="card-title">R1.1. (meta)data are released with a clear and accessible data usage license.</div>
        <div class="mb-3">
            FRDR defaults to, and encourages the use of, Creative Commons licenses wherever possible for submitted data.
        </div>

        <hr/>

        <div class="card-title">R1.2. (meta)data are associated with their provenance.</div>
        <div class="mb-3">
            Provenance is automatically recorded from curator logs during our approval process and permanently associated with deposited data.
        </div>

        <hr/>

        <div class="card-title">R1.3. (meta)data meet domain-relevant community standards.</div>
        <div class="mb-3">
            In addition to implementing Dublin Core, DataCite, OAI, and DOIs as above, repositories are approached when issues with metadata arise so corrective action can be taken.
        </div>
    </div>
</div>

See also: <a href="https://www.go-fair.org/fair-principles/" target="_blank">https://www.go-fair.org/fair-principles/</a>

**References**

Wilkinson, M. D., Dumontier, M., Aalbersberg, Ij. J., Appleton, G., Axton, M., Baak, A., … Mons, B. (2016). The FAIR Guiding Principles for scientific data management and stewardship. Scientific Data, 3, 160018. <a target="_blank" href="https://doi.org/10.1038/sdata.2016.18">https://doi.org/10.1038/sdata.2016.18</a>

Wilkinson, M. D., Schultes, E., Olavo Bonino, L., Sansone, S-A., Doorn, P., & Dumontier, M. (2018). FAIRMetrics/Metrics: FAIR Metrics, Evaluation results, and initial release of automated evaluator code. Zenodo. <a target="_blank" href="https://doi.org/10.5281/zenodo.1305060">https://doi.org/10.5281/zenodo.1305060</a>

