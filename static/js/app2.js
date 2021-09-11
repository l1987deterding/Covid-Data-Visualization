function show_chart(chosen_state){
    d3.json("http://127.0.0.1:5000/find").then((data) => {
        console.log(data);
    //    let state_choice= data[1].Abbreviation.filter(data[1] => data[1].Abbreviation == chosen_state);
    //    state_choice = [0]

        abbvs = data[1].Abbreviation;
        jnj_dose = data[1].JnJ_1st_Dose;
        moderna_first_dose = data[1].Moderna_1st_Dose;
        pfizer_first_dose = data[1].Pfizer_1st_Dose;
        area_sq_miles = data[1].area;
        covid_19_deaths = data[1].covid_19_deaths;
        density = data[1].density_per_sq_mile;
        hesitency_max = data[1].max_hesitency;
        hesitency_min = data[1].min_hesitency;
        hesitency_mean = data[1].mean_hesitency;
        population = data[1].population_2019;
        pop_vaxed = data[1].total_pop_vax;
        total_allocation = data[1].Total_Allocation;
        unvaxed = data[1].unvaxed_pop;
        sixtyfive_up_vaxed = data[1].avg_pct_65up_vax;
        
        // var state_chosen='Texas' // state_chosen=d3.select('.').attribute('value')
        var chart_data = [{
            x: ["hesitency_max", "hesitency_mean", "hesitency_min"],
            y: [hesitency_max[chosen_state], hesitency_mean[chosen_state], hesitency_min[chosen_state]],
            type: 'bar',
            }];
        var barlayout1={
            title: (`Vaccination Hesitancy for ${chosen_state}`),
            yaxis: {range: [0, 25]
            }}; 
        Plotly.newPlot('chart7', chart_data, barlayout1);

        var allocation_pie = [
                {
                labels: ['Pfizer Allocations', 'Moderna Allocations', 'Johnson & Johnson Allocations'],
                values: [pfizer_first_dose[chosen_state], moderna_first_dose[chosen_state], jnj_dose[chosen_state]],
                type: 'pie'}];

        var pie_layout = {
                height: 400,
                width: 500,
                title: `Total Allocation ${total_allocation[chosen_state]} (Population: ${population[chosen_state]})`
            };
        
        Plotly.newPlot('chart1', allocation_pie, pie_layout);
        
        var donut_pie = [{
            values : [pop_vaxed[chosen_state], unvaxed[chosen_state]],
            labels : ["Total Population Vaxed", "Unvaxed"],
            name: 'Total Population Vaxed',
            hole: .4,
            type: 'pie',
            marker: {
                colors: ["blue", "red"]}
        }]

        var donut_layout = {
            height: 400,
            width: 500,
            title: "Population Vaxed vs Population Unvaxed"
            
        };
          
          Plotly.newPlot('chart3', donut_pie, donut_layout);
        
        
    })
};

function show_chart2(chosen_state){
    d3.json("http://127.0.0.1:5000/find").then((data) => {
        console.log(data);
    //    let state_choice= data[1].Abbreviation.filter(data[1] => data[1].Abbreviation == chosen_state);
    //    state_choice = [0]

        abbvs = data[1].Abbreviation;
        jnj_dose = data[1].JnJ_1st_Dose;
        moderna_first_dose = data[1].Moderna_1st_Dose;
        pfizer_first_dose = data[1].Pfizer_1st_Dose;
        area_sq_miles = data[1].area;
        covid_19_deaths = data[1].covid_19_deaths;
        density = data[1].density_per_sq_mile;
        hesitency_max = data[1].max_hesitency;
        hesitency_min = data[1].min_hesitency;
        hesitency_mean = data[1].mean_hesitency;
        population = data[1].population_2019;
        pop_vaxed = data[1].total_pop_vax;
        total_allocation = data[1].Total_Allocation;
        unvaxed = data[1].unvaxed_pop;
        // var state_chosen='Texas' // state_chosen=d3.select('.').attribute('value')
        var chart_data = [
            {
            x: ["hesitency_max", "hesitency_mean", "hesitency_min"],
            y: [hesitency_max[chosen_state], hesitency_mean[chosen_state], hesitency_min[chosen_state]],
            type: 'bar',
            }
        ];
        var barlayout1={
            title: (`Vaccination Hesitancy for ${chosen_state}`),
            yaxis: {
              range: [0, 25]
            }}; 
        Plotly.newPlot('chart8', chart_data, barlayout1);

        var allocation_pie = [
            {
            labels: ['Pfizer Allocations', 'Moderna Allocations', 'Johnson & Johnson Allocations'],
            values: [pfizer_first_dose[chosen_state], moderna_first_dose[chosen_state], jnj_dose[chosen_state]],
            type: 'pie'}];

        var pie_layout = {
            height: 400,
            width: 500,
            title: `Total Allocation ${total_allocation[chosen_state]} (Population: ${population[chosen_state]}))`
        };
    
        Plotly.newPlot('chart2', allocation_pie, pie_layout);
        
        var donut_pie = [{
            values : [pop_vaxed[chosen_state], unvaxed[chosen_state]],
            labels : ["Total Population Vaxed", "Unvaxed"],
            name: 'Total Population Vaxed',
            hole: .4,
            type: 'pie',
            marker: {
                colors: ["blue", "red"]
              },
        }]

        var donut_layout = {
            height: 400,
            width: 500,
            title: "Population Vaxed vs Population Unvaxed"
            
        };
          
          Plotly.newPlot('chart4', donut_pie, donut_layout);

        var death_list = Object.values(covid_19_deaths);
        var state_list = Object.values(abbvs);
        var density_list = Object.values(density);

        data1 = {
            x: state_list,
            y: death_list,
            name: "Number of Deaths",
            type: "bar"
        }

        data2 = {
            x:state_list,
            y: density_list,
            name: "Density",
            yaxis: "y2",
            type: "scatter"
        }

        var multichart = [data1, data2]

        var multilayout = {
            title: 'Deaths and Density',
            yaxis: {title: 'Number of Deaths'},
            yaxis2: {
              title: 'Density per Sq Mile',
              overlaying: 'y',
              side: 'right'
            }
          };

        Plotly.newPlot('chart9', multichart, multilayout)
    
    
})       
};
d3.json('/find').then(data=>{
    var abbreviation_object=data[1].Abbreviation
    var state_list=Object.keys(abbreviation_object)
    var dropdown_menu=d3.select('#selDataset')
    for (var i=0; i<state_list.length; i++){
        dropdown_menu.append('option').attr('value', state_list[i]).text(state_list[i])
    }
    var dropdown_menu2=d3.select('#selDataset2')
    for (var i=0; i<state_list.length; i++){
        dropdown_menu2.append('option').attr('value', state_list[i]).text(state_list[i])
    }
})

function optionChanged(state_chosen){
    // console.log(state_chosen);
    show_chart(state_chosen)
}

function optionChanged2(state_chosen){
    // console.log(state_chosen);
    show_chart2(state_chosen)
}