#User Metrics

The Federated Research Data Repository (FRDR) utilizes [Tableau software](https://www.tableau.com/why-tableau/what-is-tableau) to consolidate and present platform statistics. These statistics are primarily open to the public and can be accessed by navigating to 'Site Metrics' located in the website's header.

They are also accessible via individual collection pages.

<hr />

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="available-metrics">Available Metrics</h2>

        <div class="mb-3">
            FRDR currently records the following key metrics:
        </div>

        <ol>
            <li><strong>Collections:</strong> The total number of non-empty collections hosted by FRDR.</li>
            <li><strong>Datasets Published:</strong> This metric represents the total number of datasets published within the FRDR platform.</li>
            <li><strong>Data Deposited (TB):</strong> The total storage space consumed by all published datasets in FRDR, measured in terabytes.</li>
            <li><strong>Dataset Views:</strong> Total dataset views refer to the number of times published datasets in FRDR have been accessed or viewed by users.</li>
            <li><strong>Files Downloaded:</strong> Total files downloaded represent the number of times individual data files from published datasets in FRDR have been retrieved or copied by users.</li>
        </ol>
        <div class="mb-3">
            The dashboards are updated on a monthly basis on the last Wednesday of each month.
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">

        <h2 id="navigation">Navigation</h2>

        <div class="mb-3">
            The metric page has three tabs (Views Dashboard, Download Dashboards, and Site Metrics Dashboards) and a dropdown menu for collections with datasets in FRDR.
        </div>

        <a href="/docs/img/screenshots/user_metrics/metrics_nav_tab.png" class="screenshot-lightbox">
            <img src="/docs/img/screenshots/user_metrics/metrics_nav_tab.png" alt="Screenshot showing the top navigation tab." class="screenshot"/>
        </a>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="views-dashboard">Views Dashboard</h2>

        <div class="mb-3">
            This tab is divided into three sections. First, the user will find the total number of dataset views (top left) and the trend over time (top right). Hovering the mouse over the trendline shows the number of views up to the specified date.  Next, the "Top Viewed Datasets" section lists the FRDR datasets from largest to smallest views. Finally, the navigable world map at the bottom shows views per country.  By clicking on a specific dataset, the user can navigate to the dataset’s landing page in FRDR. When the user selects a collection from the drop-down menu, the same information is displayed for that specific collection.
        </div>

        <a href="/docs/img/screenshots/user_metrics/metrics_view_tab_1.png" class="screenshot-lightbox">
            <img src="/docs/img/screenshots/user_metrics/metrics_view_tab_1.png" alt="Screenshot showing the views tab." class="screenshot"/>
        </a>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="views-dashboard-map-view">Views Dashboard - Map View</h2>

        <div class="mb-3">
            The Views dashboard displays a map of the world showing views by country.  On the left, the search bar allows the user to search for any country worldwide. This will redirect the map to the country of interest. Hovering over the map will show the total number of dataset views. In addition, the plus and minus icons on the left-hand panel allow the user to zoom in and out of the map. The home icons return to the default view of Canada. By hovering over the play icon, the user can select the pan tool to interactively navigate the map.
        </div>

        <a href="/docs/img/screenshots/user_metrics/metrics_map_view.png" class="screenshot-lightbox">
            <img src="/docs/img/screenshots/user_metrics/metrics_map_view.png" alt="Screenshot showing the view map." class="screenshot"/>
        </a>

        <div class="mb-3">
            The user can press the control key (Windows) or command key (Mac) to interactively select different countries on the map. A new window opens with information about the sum of views (yellow highlighting) within the selected countries.
        </div>

        <a href="/docs/img/screenshots/user_metrics/metrics_map_view_2.png" class="screenshot-lightbox">
            <img src="/docs/img/screenshots/user_metrics/metrics_map_view_2.png" alt="Screenshot showing the view map." class="screenshot"/>
        </a>

        <div class="mb-3">
            To revert graphs to their default settings, click the reset view icon <img alt="Alt" src="/docs/img/screenshots/user_metrics/RevertIcon.png" title="Revert Icon"> just below the dashboard.
        </div>

        <a href="/docs/img/screenshots/user_metrics/metrics_reset_map_button.png" class="screenshot-lightbox">
            <img src="/docs/img/screenshots/user_metrics/metrics_reset_map_button.png" alt="Screenshot showing the reset map button." class="screenshot"/>
        </a>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="downloads-dashboard">Downloads Dashboard</h2>

        <div class="mb-3">
            This tab is set up in the same way as the Views dashboard. Please note that this page <strong>shows the number of files downloaded</strong>, not the number of times a dataset has been downloaded.
        </div>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="site-metrics-dashboard">Site Metrics Dashboard</h2>

        <div class="mb-3">
            On this tab, the top row displays the total number of published datasets, or datasets per collection if a collection is selected from the drop-down menu. The bottom row shows the total data deposited in terabytes (TB) for published deposits.  Hovering over the trend graphs shows the evolution of dataset deposits over time.
        </div>

        <a href="/docs/img/screenshots/user_metrics/metrics_site_usage_tab.png" class="screenshot-lightbox">
            <img src="/docs/img/screenshots/user_metrics/metrics_site_usage_tab.png" alt="Screenshot showing the Site Usage Tab." class="screenshot"/>
        </a>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="downloading-the-raw-data">Downloading the Raw Data</h2>
        <div class="mb-3">
            Users can easily access the data presented on the dashboards by following these steps:
        </div>

        <a href="/docs/img/screenshots/user_metrics/MenuBar.png" class="screenshot-lightbox">
            <img src="/docs/img/screenshots/user_metrics/MenuBar.png" alt="Screenshot showing where to find the download icon." class="screenshot"/>
        </a>

        <ol>
            <li>Click on the <img alt="Alt" src="/docs/img/screenshots/user_metrics/DownloadIcon.png" title="Download Icon"> icon located just below the dashboard.</li>
            <li>Select your preferred file format for downloading, which includes options such as Image, Crosstab, PDF, PowerPoint, and Tableau Workbook.</li>
            <li>The Image option downloads a screenshot of the dashboard. </li>
            <li>The Crosstab (Table) option allows the user to select the section of the dashboard to receive the tabular data and the output format (.xlsx or .csv).</li>
            <li>The PDF option allows the user to select what to include in the document ("This view", "Specific sheets from this dashboard" and "Specific sheet from this workbook"). Note that "Dashboard" refers to the tab the user is currently navigating, while "Workbook" allows the user to download a PDF from the other tabs.</li>
            <li>The PowerPoint option has the same settings as PDF, but downloads the content in a .pptx file.</li>
            <li>The Tableau Workbook option allows the user to download a file for viewing in Tableau. Note that the user is prompted to select a Tableau version to download the workbook.</li>
        </ol>
    </div>
</div>

<div class="card-shadow mb-3">
    <div class="card-body">
        <h2 id="feedback">Feedback</h2>
        <div class="mb-3">
            If you encounter any issues while using our metric dashboards or would like to share feedback or request new metrics, please contact us at <a href="(mailto:support@frdr-dfdr.ca">support@frdr-dfdr.ca</a>.
        </div>
    </div>
</div>












