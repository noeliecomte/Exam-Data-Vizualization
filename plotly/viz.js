fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {
    sortByCountryPopulation(data);

    const top30Countries = data.slice(-30);
    const countries = top30Countries.map(item => item.country);
    const populations = top30Countries.map(item => item.population);


    const trace = {
        x: countries,
        y: populations,
        type: 'bar',
        marker: {
            color: '#4CAF50',
            line: {
                width: 1,
                color: 'rgb(0,0,0,0)'
            }
        }
    };

    const layout = {
        title: 'Top 30 Countries by Population',
        xaxis: {
            title: 'Country',
            tickangle: -45,
            tickfont: {
                size: 10
            },
            automargin: true
        },
        yaxis: {
            title: 'Population',
            tickformat: ',d', 
            tickfont: {
                size: 12
            },
            automargin: true
        },
        width: 1200, 
        height: 600, 
        paper_bgcolor: '#f5f5f5',
        plot_bgcolor: '#f5f5f5'
    };

    Plotly.newPlot('data-viz', [trace], layout);
}

function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? -1 : 1);
}
