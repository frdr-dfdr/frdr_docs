<div class="navbar-search navbar navbar-light bg-faded">
    <div class="container search d-flex justify-content-center p-3">
        <form class="form w-75" action="/docs/fr/search/" method="get">
            <div class="input-group mt-2  ">
                <input type="hidden" name="offset" id="offset" value="0">
                <label for="srch-term" class="sr-only visually-hidden">Search</label>
                <input type="text" class="search_bar form-control" placeholder="Recherche par mot-clé" name="query" id="srch-term"  style="font-size: 17px;">
                <span class="input-group-append">
                    <button class="btn btn-primary search-button" type="submit">
                        <span class="submit-search-text">Recherche</span>
                        <span class="fas fa-search" aria-hidden="true"></span>
                    </button>
                </span>
            </div>
        </form>
    </div>
</div>

<div id="paging-controls" class="d-none">
    <span id="prev"><a>« Précédent</a></span>
    <span><span id="resultsStart"></span> à <span id="resultsEnd"></span> de <span id="resultsTotal"></span></span>
    <span id="next"><a>Suivant »</a></span>
</div>

<div id="results"></div>

