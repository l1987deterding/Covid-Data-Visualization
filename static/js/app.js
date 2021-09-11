d3.json('/figure').then(data=>{
    d3.select('#status-cases-total').text(data['total_cases'])
})

d3.json('/figure').then(data=>{
    d3.select('#status-deaths-total').text(data['total_deaths'])
})

d3.json('/figure').then(data=>{
    d3.select('#status-total-vaccines').text(data['one_vacc'])
})

d3.json('/figure').then(data=>{
    d3.select('#transmission-label').text(data['comm_trans'])
})
