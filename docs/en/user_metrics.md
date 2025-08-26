<h1>User Metrics</h1>
The Federated Research Data Repository (FRDR) utilizes [Tableau software](https://www.tableau.com/why-tableau/what-is-tableau) to consolidate and present platform statistics. These statistics are primarily open to the public and can be accessed by navigating to 'Site Metrics' located in the website's header. 

 They are also accessible via individual collection pages.


## Available Metrics

FRDR currently records the following key metrics:

1. **Collections:** The total number of non-empty collections hosted by FRDR.
2. **Datasets Published:** This metric represents the total number of datasets published within the FRDR platform.
3. **Data Deposited (TB):** The total storage space consumed by all published datasets in FRDR, measured in terabytes.
4. **Dataset Views:** Total dataset views refer to the number of times published datasets in FRDR have been accessed or viewed by users.
5. **Files Downloaded:** Total files downloaded represent the number of times individual data files from published datasets in FRDR have been retrieved or copied by users.
   
The dashboards are updated on a monthly basis on the last Wednesday of each month.

## Navigation

The metric page has three tabs (Views Dashboard, Download Dashboards, and Site Metrics Dashboards) and a dropdown menu for collections with datasets in FRDR.

<a href="/docs/img/screenshots/user_metrics/metrics_nav_tab.png" class="screenshot-lightbox">
<img src="/docs/img/screenshots/user_metrics/metrics_nav_tab.png" alt="Screenshot showing the top navigation tab." class="screenshot"/>
</a>



## Views Dashboard

This tab is divided into three sections. First, the user will find the total number of dataset views (top left) and the 
trend over time (top right). Hovering the mouse over the trendline shows the number of views up to the specified date. 
Next, the "Top Viewed Datasets" section lists the FRDR datasets from largest to smallest views. Finally, the navigable 
world map at the bottom shows views per country.  By clicking on a specific dataset, the user can navigate to the 
dataset’s landing page in FRDR. When the user selects a collection from the drop-down menu, the same information is 
displayed for that specific collection.

<a href="/docs/img/screenshots/user_metrics/metrics_view_tab_1.png" class="screenshot-lightbox">
<img src="/docs/img/screenshots/user_metrics/metrics_view_tab_1.png" alt="Screenshot showing the views tab." class="screenshot"/>
</a>


## Views Dashboard - Map View

The Views dashboard displays a map of the world showing views by country.  On the left, the search bar allows the user 
to search for any country worldwide. This will redirect the map to the country of interest. Hovering over the map will 
show the total number of dataset views. In addition, the plus and minus icons on the left-hand panel allow the user to 
zoom in and out of the map. The home icons return to the default view of Canada. By hovering over the play icon, the 
user can select the pan tool to interactively navigate the map.  

<a href="/docs/img/screenshots/user_metrics/metrics_map_view.png" class="screenshot-lightbox">
<img src="/docs/img/screenshots/user_metrics/metrics_map_view.png" alt="Screenshot showing the view map." class="screenshot"/>
</a>


The user can press the control key (Windows) or command key (Mac) to interactively select different countries on the 
map. A new window opens with information about the sum of views (yellow highlighting) within the selected countries. 

<a href="/docs/img/screenshots/user_metrics/metrics_map_view_2.png" class="screenshot-lightbox">
<img src="/docs/img/screenshots/user_metrics/metrics_map_view_2.png" alt="Screenshot showing the view map." class="screenshot"/>
</a>

To revert graphs to their default settings, click the reset view icon ![Alt](/docs/img/screenshots/user_metrics/RevertIcon.png "Revert Icon") just below the dashboard.

<a href="/docs/img/screenshots/user_metrics/metrics_reset_map_button.png" class="screenshot-lightbox">
<img src="/docs/img/screenshots/user_metrics/metrics_reset_map_button.png" alt="Screenshot showing the reset map button." class="screenshot"/>
</a>

## Downloads Dashboard
This tab is set up in the same way as the Views dashboard. Please note that this page **shows the number of files 
downloaded**, not the number of times a dataset has been downloaded.  

## Site Metrics Dashboard
On this tab, the top row displays the total number of published datasets, or datasets per collection if a collection is 
selected from the drop-down menu. The bottom row shows the total data deposited in terabytes (TB) for published deposits.
Hovering over the trend graphs shows the evolution of dataset deposits over time.

<a href="/docs/img/screenshots/user_metrics/metrics_site_usage_tab.png" class="screenshot-lightbox">
<img src="/docs/img/screenshots/user_metrics/metrics_site_usage_tab.png" alt="Screenshot showing the Site Usage Tab." class="screenshot"/>
</a>


## Downloading the Raw Data
Users can easily access the data presented on the dashboards by following these steps:

<a href="/docs/img/screenshots/user_metrics/MenuBar.png" class="screenshot-lightbox">
<img src="/docs/img/screenshots/user_metrics/MenuBar.png" alt="Screenshot showing where to find the download icon." class="screenshot"/>
</a>
1. Click on the  ![Alt](/docs/img/screenshots/user_metrics/DownloadIcon.png "Download Icon")icon located just below the dashboard.

2. Select your preferred file format for downloading, which includes options such as Image, Crosstab, PDF, PowerPoint, and Tableau Workbook.
    
* The Image option downloads a screenshot of the dashboard. 

* The Crosstab (Table) option allows the user to select the section of the dashboard to receive the tabular data and the output format (.xlsx or .csv). 

* The PDF option allows the user to select what to include in the document ("This view", "Specific sheets from this dashboard" and "Specific sheet from this workbook"). Note that "Dashboard" refers to the tab the user is currently navigating, while "Workbook" allows the user to download a PDF from the other tabs.

* The PowerPoint option has the same settings as PDF, but downloads the content in a .pptx file.

* The Tableau Workbook option allows the user to download a file for viewing in Tableau. Note that the user is prompted to select a Tableau version to download the workbook.

## Feedback
If you encounter any issues while using our metric dashboards or would like to share feedback or request new metrics, 
please contact us at [support@frdr-dfdr.ca](mailto:support@frdr-dfdr.ca) .

