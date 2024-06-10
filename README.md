# belly-button-challenge

##OVERVIEW: 

Created an interactive dashboard utilizing Javascript, D3.js and Plotly that explored the [Belly Button Biodiversity dataset](https://robdunnlab.com/projects/belly-button-biodiversity/) which catalogs the microbes that inhabit human navels. The dataset shows that a few microbial species, referred to as operational taxonomic units (OTUs) in the study, were found in over 70% of individuals, while the remaining species were relatively uncommon. The interactive site has been added to Github pages. 

**Technologies Used:**
JavaScript
D3.js (for data manipulation and DOM operations)
Plotly.js (for charting)
HTML


**Functions:**

1. buildMetadata(sample)
This function retrieves and displays metadata for a given sample.

Programs Utilized: D3.js
Description:
Fetches data from the JSON file.
Filters the metadata for the selected sample.
Clears any existing metadata in the panel with id #sample-metadata.
Appends new metadata to the panel.

2. buildCharts(sample)
This function generates both a bubble chart and a bar chart for the selected sample.

Programs Utilized: D3.js, Plotly.js
Description:
Fetches data from the JSON file.
Filters the sample data for the selected sample.
Extracts otu_ids, otu_labels, and sample_values from the sample data.
Constructs and renders a bubble chart using Plotly.
Constructs and renders a bar chart of the top 10 bacterial cultures using Plotly.

3. init()
This function initializes the dashboard by populating the dropdown menu and displaying the initial sample's data.

Programs Utilized: D3.js
Description:
Fetches data from the JSON file.
Selects the dropdown menu with id #selDataset.
Populates the dropdown with sample names.
Retrieves the first sample from the list.
Calls buildCharts() and buildMetadata() with the first sample.

4. optionChanged(newSample)
This function is an event handler that updates the charts and metadata panel when a new sample is selected.

Programs Utilized: D3.js
Description:
Called whenever a new sample is selected from the dropdown.
Calls buildCharts() and buildMetadata() with the newly selected sample.
Initializing the Dashboard
The init() function is called to set up the dashboard when the page loads.
Event Listener
The optionChanged() function is linked to the select tag in the HTML, enabling dynamic updates based on user selection.
