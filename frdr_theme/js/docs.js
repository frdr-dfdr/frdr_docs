let idx;
let docs;
const lang = document.documentElement.lang;

$( document ).ready(function() {
    const searchPath = "/docs/" + lang + "/search/";
    const indexURL = "/docs/" + lang + "/search/search_index.json";

    function handleHeaderSearch() {
        fetch(indexURL)
            .then((res) => res.text())
                .then((text) => {
                    docs = JSON.parse(text);
                    idx = lunr(function () {
                        this.ref('location');
                        this.field('title');
                        this.field('text');
                        this.metadataWhitelist = ['position'];

                        docs["docs"].forEach(function (doc) {
                            this.add(doc)
                        }, this);
                    });
            }).catch((e) => console.error(e));

        function triggerSearch() {
            const term = $("#docs-search").val();
            const searchResults = $("#search-results")
            searchResults.empty();
            if (term.length > 2) {
                getHeaderSearchResults(term);
            } else {
                hideHeaderSearchResults();
            }
        }

        // Show search results if the search input is in focus again
        $("#docs-search").on( "focus", function() {
            triggerSearch();
        });

        // Show search results if the search input is clicked
        $("#docs-search").on( "click", function() {
            triggerSearch();
        });

        // Show search results if value changes
        $("#docs-search").on( "change", function() {
            triggerSearch();
        });

        // Close search results on escape anywhere in results
        $("#search-results-container").on("keyup", function(event){
            if (event.key === 'Escape') {
                hideHeaderSearchResults();
            }
            return true;
        });

        // Trigger search keyup and close search results on escape for search input
        $("#docs-search").on( "keyup", function(event) {
            if (event.key === 'Escape') {
                hideHeaderSearchResults();
            } else {
                triggerSearch();
            }
            return true;
        });

        // Remove the search results if the overlay is clicked on.
        $("#main-overlay").on( "click", function() {
            hideHeaderSearchResults();
            return true;
        });

    }

    function handleSearchPage() {
        const params = new Proxy(new URLSearchParams(window.location.search), {
              get: (searchParams, prop) => searchParams.get(prop),
        });
        $("#srch-term").val(params.query ? params.query : "");

        fetch(indexURL)
            .then((res) => res.text())
                .then((text) => {
                    docs = JSON.parse(text);
                    idx = lunr(function () {
                        this.ref('location');
                        this.field('title');
                        this.field('text');
                        this.metadataWhitelist = ['position'];

                        docs["docs"].forEach(function (doc) {
                            this.add(doc)
                        }, this);
                    });
                    allSearch(params.offset);
            }).catch((e) => console.error(e));
    }

    if (searchPath === window.location.pathname) {
        handleSearchPage();
    } else {
        handleHeaderSearch();
    }

    const main = $("#main-content");
    $(".jump-to-top").on( "click", function() {
        scrollTo(0, 0);
        return true;
    });
});

function getResults(searchTerm) {
    let results = idx.search(searchTerm);
    let fullResults = results.map((item) => {
        let doc = docs["docs"].find((doc) => item.ref === doc.location);
        item["title"] = doc["title"];
        item["text"] = doc["text"];
        return item;
    })
    return fullResults;
}

function hideHeaderSearchResults() {
    let searchResultsContainer = $("#search-results-container");
    searchResultsContainer.addClass("d-none");
    removeOverlay();
}

// Set the view all button link at the bottom of the search results
function setViewAllUrl(term) {
    let viewAllLink = $("#view-all-search-link");
    viewAllLink.attr('href', "/docs/" + lang + "/search/?query=" + term);
}

// Returns the URL for a page without any anchors
function getPageRef(match) {
    return match["ref"].split("#")[0];
}

// Add an overlay onto current page content to focus on search
function addOverlay() {
    let main = $("#main-overlay");
    main.css('opacity','0.25');
}

// Remove overlay on page content when search results are closed
function removeOverlay() {
    let main = $("#main-overlay");
    main.css('opacity','1');
}

function getHeaderSearchResults(searchTerm) {
    addOverlay();

    let results = getResults(searchTerm);
    let searchResults = $("#search-results")
    let searchResultsContainer = $("#search-results-container");

    setViewAllUrl(searchTerm);

    let pageTotal = 0;
    if (results.length > 0) {
        let pages = {};
        for (let j = 0; j < results.length; j++) {
            let pageRef = getPageRef(results[j]);
            if (!pages[pageRef]) {
                pages[pageRef] = 1;
            } else {
                pages[pageRef] = pages[pageRef] + 1;
            }
        }
        pageTotal = Object.keys(pages).length

        for (let i = 0; i < results.length && i < 5; i++) {
            let match = markTitle(results[i]);
            match = markText(match);
            searchResults.append("<a class=\"quick_search\" href=\"" + getRefURL(results[i]) + "\"><div>" + match["title"] + "</div>" + "<div>" + match["text"]  + "</div>" + "</a>");
            searchResults.append("<hr/>")
        }
    }

    // Hide the search results as they could click on anchor for current page
    $(".quick_search").on( "click", function() {
        hideHeaderSearchResults();
        return true;
    });

    $("#search-results-total").text(pageTotal);

    searchResultsContainer.removeClass("d-none");
}

function getPageIndex(page, pages) {
    for (let i = 0; i < pages.length; i++) {
        if (pages[i]["url"] === page) {
            return i;
        }
    }
    let new_page = {};
    new_page["url"] = page;
    new_page["matches"] = [];
    pages.push(new_page);
    return pages.length - 1;
}

function getPageName(page) {
    let anchor = page.indexOf("#");
    if (anchor > 0) {
        return page.substring(0, anchor);
    } else {
        return page;
    }
}

const limit = 20;

function getLink(offset) {
    let searchTerm = document.getElementById("srch-term").value;
    return window.location.pathname + "?offset=" + offset + "&query=" + searchTerm;
}

function addPrevNextLinks(start, end, total) {
    const pagingControls = $("#paging-controls");

    const prev = $("#prev");
    if (start > 0) {
        let prevOffset = start - limit < 0 ? 0 : start - limit;
        const prevA = prev.children("a");
        prevA.attr("href", getLink(prevOffset));
        prev.removeClass("d-none");
    } else {
        prev.addClass("d-none");
    }

    const next = $("#next");
    if (end < total) {
        const nextA = next.children("a");
        nextA.attr("href", getLink(start + limit));
        next.removeClass("d-none");
    } else {
        next.addClass("d-none");
    }

    pagingControls.removeClass("d-none");;
}

function allSearch(offset) {
    let searchTerm = document.getElementById("srch-term").value;
    if (!searchTerm) {
        return;
    }
    let results = getResults(searchTerm);
    let pages = [];
    for (let i = 0; i < results.length; i++) {
        let page = getPageName(results[i]["ref"]);
        let index = getPageIndex(page, pages);
        pages[index]["matches"].push(results[i]);
    }

    offset  = Number.parseInt(offset, 10);
    if (Number.isNaN(offset)) {
        offset = 0;
    }

    const all = $("#results");

    let start = offset ? offset : 0;
    let end = pages.length < limit + offset ? pages.length : limit + offset;
    $("#resultsStart").text(start + 1);
    $("#resultsEnd").text(end);
    $("#resultsTotal").text(pages.length);

    addPrevNextLinks(start, end, pages.length);

    while (all.lastElementChild) {
        all.removeChild(all.lastElementChild);
    }

    for (let i = start; i < end; i++)
    {
        addMatch(pages[i], all);
        if (i < end) {
            let hr = document.createElement("hr");
            all.append(hr);
        }
    }
};

function addMatch(page, parentElement) {
    let div = document.createElement("div");
    let link = document.createElement("a");
    let url = page["url"];
    let full = "/docs/" + lang + "/" + url;
    let title = url
    // let text = page["matches"][0]["text"];

    let first = page["matches"][0];

    let titleMatches = [];
    let textMatches = [];

    link.href = full;
    link.innerHTML = "<h1>" + title + "</h1>";
    div.append(link);

    // matchData -> term -> text or title -> position -> [0] start, [1] length
    /**
    for (const[key, value] of Object.entries(result["matchData"]["metadata"])) {
        if (value["title"] && value["title"]["position"]) {
            for (let i = 0; i < value["title"]["position"].length; i++) {
                titleMatches.push(value["title"]["position"][i]);
            }
        }
        if (value["text"] && value["text"]["position"]) {
            for (let i = 0; i < value["text"]["position"].length; i++) {
                textMatches.push(value["text"]["position"][i]);
            }
        }

    }
    **/

    addMatchPanel(first, div);

    if (page["matches"].length > 1) {
        let collapseID = url.replace("/", "-") + '-Collapse';
        let collapseBtn = document.createElement("div");
        collapseBtn.innerHTML = '<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#' + collapseID + '" aria-expanded="false" aria-controls="collapseExample">Show ' + page["matches"].length + ' more on same page</button>';

        let collapseDiv = document.createElement("div");
        collapseDiv.id = collapseID;
        collapseDiv.classList.add("collapse");

        for (let i = 1; i < page["matches"].length; i++) {
            addMatchPanel(page["matches"][i], collapseDiv);
        }

        div.append(collapseBtn);
        div.append(collapseDiv);
    }
    parentElement.append(div);
}

function getRefURL(match) {
    return "/docs/" + lang + "/" + match["ref"];
}

function addMatchPanel(match, parentElement) {
    let matchDiv = document.createElement("div");
    let titleA = document.createElement("a");
    let textDiv = document.createElement("div");
    match = markTitle(match);
    match = markText(match);

    titleA.href = getRefURL(match);
    titleA.innerHTML = "<div>" + match["titleMatched"]  + "</div>";
    matchDiv.append(titleA);

    textDiv.innerHTML = match["textMatched"];
    matchDiv.append(textDiv);

    parentElement.append(matchDiv);
}

function markTitle(matches) {
    return markField("title", matches);
}

function markText(matches) {
    return markField("text", matches);
}
function markField(field, matches) {
    if (!matches) {
        return matches;
    }
    if (!matches[field]) {
        return matches;
    }
    matches[field + "Matched"] = matches[field];

    if (!matches["matchData"] || !matches["matchData"]["metadata"] || Object.keys(matches["matchData"]["metadata"]).length < 1) {
        return matches;
    }

    // Match all terms
    Object.keys(matches["matchData"]["metadata"]).forEach(function(term){
        let fieldMatches = matches["matchData"]["metadata"][term][field];
        if (fieldMatches) {
            let fieldValue = matches[field];
            if (fieldValue && fieldMatches && fieldMatches["position"].length > 0) {
                matches[field + "Matched"] = markMatches(fieldMatches["position"], fieldValue)
            }
        }
    });
    return matches;
}

function markMatches(matchesArray, input) {
    if (matchesArray && matchesArray.length > 0) {
        let output = input;
        // We need to start at the end so that we don't shift the 
        // start character for each match
        for(let i = matchesArray.length - 1; i >= 0; i--) {
            let start = matchesArray[i][0];
            let length = matchesArray[i][1];
            let prefix = input.substring(0, start);
            let match = input.substring(start, start + length);
            let suffix = input.substring(start + length);
            output = prefix + "<mark>" + match + "</mark>" + suffix;
        }
        return output;
    } else {
        // We don't have any matches so return original
        return input;
    }
}


