let idx;
let docs;
const lang = document.documentElement.lang;
const MAX_SEARCH_RESULT_LENGTH = 320;

$( document ).ready(function() {
    const searchPath = "/docs/" + lang + "/search/";
    const indexURL = "/docs/" + lang + "/search/search_index.json";

    /** Setup feedback mechanism for helpful + not helpful buttons */
    const FEEDBACK_KEY = "feedback";
    const HELPFUL = "helpful";
    const NOT_HELPFUL = "not-helpful";

    showCurrentSidebar();

    function showCurrentSidebar() {
        $('.frdr-sidebar-link-page').each(function(index, page) {
            let currentURL = location.href.substring(0, location.href.lastIndexOf("/") + 1);
            if(currentURL.includes(page.pathname)) {
                page = $(page);
                page.addClass("current");
                $("#" + page.attr("data-title").replaceAll(" ", "_") + "-collapse").addClass("show");
            }
        });
    }

    updateFeedbackUI();

    function getFeedbackKey() {
        let currentURL = location.href.substring(0, location.href.lastIndexOf("/")+1);
        return FEEDBACK_KEY + "-" + currentURL;
    }

    /** Update the state of the helpful / not-helpful UI at bottom of page **/
    function updateFeedbackUI() {
        let feedbackKey = getFeedbackKey();
        let existing = localStorage.getItem(feedbackKey);
        if (existing && existing === HELPFUL) {
            $(".helpful").addClass("active");
            $(".not-helpful").removeClass("active");
        } else if(existing && existing === NOT_HELPFUL) {
            $(".not-helpful").addClass("active");
            $(".helpful").removeClass("active");
        } else {
            $(".helpful").removeClass("active");
            $(".not-helpful").removeClass("active");
        }
    }

    /** Handle clicking on helpful button **/
    $(".helpful").on("click", function() {
        let feedbackKey = getFeedbackKey();
        let existing = localStorage.getItem(feedbackKey);
        if (existing && existing === HELPFUL) {
            localStorage.removeItem(feedbackKey);
            // Remove helpful feedback
        } else if(existing && existing === NOT_HELPFUL) {
            // Remove not-helpful feedback and add helpful feedback
            localStorage.setItem(feedbackKey, HELPFUL);
        } else {
            // Add helpful feedback
            localStorage.setItem(feedbackKey, HELPFUL);
        }
        updateFeedbackUI();
    });

    /** Handle clicking on not-helpful button **/
    $(".not-helpful").on("click", function() {
        let feedbackKey = getFeedbackKey();
        let existing = localStorage.getItem(feedbackKey);
        if (existing && existing === NOT_HELPFUL) {
            // Remove helpful feedback
            localStorage.removeItem(feedbackKey);
        } else if(existing && existing === HELPFUL) {
            // Remove helpful feedback and add not-helpful feedback
            localStorage.setItem(feedbackKey, NOT_HELPFUL);
        } else {
            // Add not-helpful feedback
            localStorage.setItem(feedbackKey, NOT_HELPFUL);
        }
        updateFeedbackUI();
    });

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
        $(".docs-card-search").addClass("collapse");
        $(".frdr-sidebar").addClass("mt-5");
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

    $(".toc-collapse-btn").on('click', function() {
        if ($(this).children().hasClass('fa-chevron-up')) {
            $(this).children().removeClass('fa-chevron-up').addClass('fa-chevron-down');
        } else {
            $(this).children().removeClass('fa-chevron-down').addClass('fa-chevron-up');
        }
        return true;
    });

    function updateFaqCollapse(button) {
        if (button.hasClass("collapsed")) {
            button.children("div").children("i").removeClass("fa-plus").addClass("fa-minus");
        } else {
            button.children("div").children("i").removeClass("fa-minus").addClass("fa-plus");
        }
    }

    $(".faq-question").on('click', function() {
        updateFaqCollapse($(this));
    });

    $(".expand-all").on('click', function() {
        $($(this).attr("data-target")).each(function(index) {
            //.children().children("i").removeClass("fa-plus").addClass("fa-minus");
            updateFaqCollapse($(this).parent().children(".faq-question"));
        });
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

    let pages = [];
    for (let i = 0; i < results.length; i++) {
        let page = getPageName(results[i]["ref"]);
        let index = getPageIndex(page, pages);
        pages[index]["matches"].push(results[i]);
    }

    let end = Math.min(5, pages.length);
    for (let i = 0; i < end; i++)
    {
        addMatch(pages[i], searchResults, false);
        if (i < end) {
            let hr = document.createElement("hr");
            searchResults.append(hr);
        }
    }

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
        addMatch(pages[i], all, true);
        if (i < end) {
            let hr = document.createElement("hr");
            all.append(hr);
        }
    }
};

function getPageTitle(page) {
    for (let i = 0; i < page["matches"].length; i++) {
        if (!page["matches"][i]["ref"].includes("#")) {
            return page["matches"][i]["title"];
        }
    }
    return page["matches"][0]["title"];
}

function addMatch(page, parentElement, showOtherMatches) {
    let card = $('<div class="card-shadow mt-3 mb-3"></div>')
    let cardBody = $('<div class="card-body"></div>');
    card.append(cardBody);
    let url = page["url"];
    let full = "/docs/" + lang + "/" + url;

    let first = page["matches"][0];

    let titleMatches = [];
    let textMatches = [];

    addMatchPanel(first, cardBody, page);

    if (page["matches"].length > 1 && showOtherMatches) {
        let collapseID = "collapse-" + crypto.randomUUID();
        let collapseBtn = document.createElement("div");
        let otherCount = page["matches"].length - 1;
        let prefix = lang === 'en' ? "Show " : "Afficher ";
        let suffix = lang === 'en' ? " more on same page" : " ou plus sur la même page";
        collapseBtn.innerHTML = '<button class="btn alliance-btn-primary mb-3 mt-3" type="button" data-toggle="collapse" data-target="#' + collapseID + '" aria-expanded="false" aria-controls="' + collapseID + '">' + prefix + otherCount + suffix + '</button>';

        let collapseDiv = $('<div class="collapse" id="' + collapseID + '"></div>');

        for (let i = 1; i < page["matches"].length; i++) {
            addMatchPanel(page["matches"][i], collapseDiv, page);
        }

        cardBody.append(collapseBtn);
        cardBody.append(collapseDiv);
    }
    parentElement.append(card);
}

function getRefURL(match) {
    return "/docs/" + lang + "/" + match["ref"];
}

function addMatchPanel(match, parentElement, page) {
    match = markTitle(match);
    match = markText(match);

    let cardTitle = $('<div class="card-title mb-3"></div>');

    let title = "";
    if (match["ref"].includes("#")) {
        title = getPageTitle(page) + " - " + match["titleMatched"];
    } else {
        title = match["titleMatched"];
    }
    let titleLink = $('<a href="' + getRefURL(match) + '">' + title + '</a>');
    cardTitle.append(titleLink);
    parentElement.append(cardTitle);

    let textMatched = $('<div class="mb-3">' + match["textMatched"] + '</div>')
    parentElement.append(textMatched);
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
            if (fieldValue && fieldMatches["position"].length > 0) {
                matches[field + "Matched"] = markMatches(fieldMatches["position"], fieldValue)
            }
        }
    });
    return matches;
}

function markMatches(matchesArray, input) {
    if (matchesArray && matchesArray.length > 0) {
        let output = input;
        let foundLast = false;
        // We need to start at the end so that we don't shift the 
        // start character for each match
        for(let i = matchesArray.length - 1; i >= 0; i--) {
            let start = matchesArray[i][0];
            let length = matchesArray[i][1];
            let end = start + length;
            if (end < MAX_SEARCH_RESULT_LENGTH) {
                // Only mark matches we are going to show
                let prefix = input.substring(0, start);
                let match = input.substring(start, start + length);
                let suffix = output.substring(start + length);
                if (!foundLast) {
                    // Truncate this to the last one that fits with a ...
                    suffix = output.substring(start + length, MAX_SEARCH_RESULT_LENGTH);
                    foundLast = true;
                    output = prefix + "<mark>" + match + "</mark>" + suffix + "...";
                } else {
                    output = prefix + "<mark>" + match + "</mark>" + suffix;
                }
            }
        }
        if (!foundLast) {
            // We didn't find a match within MAX_SEARCH_RESULT_LENGTH, still need to truncate
            output = output.substring(0, MAX_SEARCH_RESULT_LENGTH) + "...";
        }
        return output;
    } else {
        // We don't have any matches so return original
        return input;
    }
}


