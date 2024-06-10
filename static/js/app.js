// Function to build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    let metadata = data.metadata;
    console.log(metadata);
    // Filter the metadata for the object with the desired sample number
    let result = metadata.filter(object => object.id == sample)[0];
    console.log(result);
    // Use d3 to select the panel with id of #sample-metadata
    let panel = d3.select("#sample-metadata");
    // Use .html("") to clear any existing metadata
    panel.html("");
    // Append new data to the panel
    for (const [key, value] of Object.entries(result)) {
      panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
    }
  });
}

// Function to build the charts (dummy implementation)
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
   

 // Get the samples field:

  let dataSamples = data.samples
  let samples = dataSamples.filter(results => results.id == sample)[0]
  console.log(samples)


// Get the otu_ids, otu_labels, and sample_values for the charts: 
  let otu_ids = samples.otu_ids
  console.log(samples.otu_ids)

  let otu_labels = samples.otu_labels
  console.log(samples.otu_labels)

  let sample_values = samples.sample_values 
  console.log(sample_values)

   // Build the Bubble Chart
      
   //Bubble chart data and marker aesthetics

   let bubbleTrace = { 
    x: otu_ids,
    y: sample_values,
    text: otu_labels,
    type: 'bubble',
    mode: 'markers',
    marker: {
      size: sample_values,
      color: otu_ids, 
      colorscale: "Earth" 
    }
  };
  
  //Bubblechart aesthetics

   let bubbleData = [bubbleTrace]

   let bubblelayout  = { 
    title: "Bacteria Cultures Per Sample",
    xaxis: {
      title: "OTU ID"
    },
    yaxis: {
      title: "Number of Bacteria"
    }
   }
  
    // Render the Bubble Chart

Plotly.newPlot("bubble", bubbleData, bubblelayout) 
    

//Build the Bar Chart

//Mapping the otu_ids to a list of string for the yticks

let otu_id_labels = otu_ids.map(otu_ids => `OTU ${otu_ids}`);
console.log(otu_id_labels)


//Bar Chart data: 

//slicing and filtering the sample values: 


let barTrace = { 
type:"bar",
x: sample_values.slice(0,10).reverse(),
y: otu_id_labels.slice(0,10).reverse(),
orientation: 'h'
}

let bardata = [barTrace]

let barLayout = { 
  title: "Top 10 Bacteria Cultures Found",
   xaxis: {
    title: "Number of Bacteria"
  }
 
}
Plotly.newPlot("bar", bardata, barLayout )


});}
// Function to initialize the dashboard
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    let names = data.names;
    console.log(names);
    // Use d3 to select the dropdown with id of #selDataset
    let dropdown = d3.select("#selDataset");
    // Populate the select options
    dropdown.selectAll("option")
      .data(names)
      .enter()
      .append("option")
      .text(d => d)
      .attr("value", d => d);
    // Get the first sample from the list
    let firstSample = names[0];
    // Build charts and metadata panel with the first sample
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Function for event listener, this corresponds with the only 'select' tag in the html which contains onchange func.
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
