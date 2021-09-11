# Covid-Data-Visualization
This was a group project where we created a dashboard with interactive charts and current information regarding Covid vaccine allocations per state and county, as well as the current death toll in the United states.
![image](https://user-images.githubusercontent.com/78701437/132606080-ea5b6a94-5cb5-40c8-b728-12b9be8c06d7.png)

## Components of Our Web App

This element from jQuery allows the user to click on the bar to see scraped Covid data from the CDC website, and the scrolling bar below displays links to current news articles about Covid. 
![image](https://user-images.githubusercontent.com/83254124/132960738-3ec5878e-81fa-4783-8c25-fbf7891d086e.png)

Next, we have a carousel of images, quotes, and infographics about Covid and vaccinations. 
![image](https://user-images.githubusercontent.com/83254124/132960835-4410ca5b-1469-4377-9ddb-19bdce5a9d5c.png)
![image](https://user-images.githubusercontent.com/83254124/132960846-a1d33fb5-363b-4ec6-a7ed-c296d70735a5.png)

Continuing down the page, we have a section where the user can select two states from drop-down menus to populate graphs and compare data state-to-state. 
![image](https://user-images.githubusercontent.com/83254124/132960919-fa1bef95-5fdb-4e4d-affb-8ee786929b95.png)

Once the user has selected states, three graphs for each state will populate in the next section of the page. These graphs allow the user to easily see how the states compare on vaccination allocations, vaccination rates, and vaccine hesitancy. We stacked the graphs so that the user is able to see all six graphs without scrolling to make comparison as easy as possible. 
![image](https://user-images.githubusercontent.com/83254124/132961079-7327a75a-3dd0-415d-859e-697fed89d9ff.png)

### Some things to note about the above graphs:
  * The Vaccine Allocation pie charts look very similar for each state. This is expected based on vaccine production from each of the three manufacturers and the goal of providing vaccines proportionally to the population for each state. So these charts can be viewed as a validation of proper vaccine allocation. 
  * In the Population Vaxed vs. Population Unvaxed donut charts, red represents the percentage of the population that is unvaccinated, and blue represents the vaccinated percentage. Whichever percentage is higher for a given state will populate on the right side of the donut chart, and the legend will populate the color of the higher percentage at the top. This allows the user to observe which state is doing "better" in this category at-a-glance. 
  * For the Vaccination Hesitancy graphs, this information was provided at the county level for each state. With the data we had, we were not able to provide an overall weighted hesitancy at the state level, but felt that this was extremely relevant to our topic so we are providing the max, mean, and min hesitancy for each state. 


Our final graph displays population density and number of Covid deaths per state. We thought there may be a correlation between the two, but based on our graph,there does not appear to be a strong correlation between the two at the state level. We believe there may be a stronger correlation between population density in cities and the number of deaths, but we unfortunately did not have that data at the time of this project. 
![image](https://user-images.githubusercontent.com/83254124/132961174-81a275a8-2edc-428a-a824-0b6ea129507c.png)

### [Try out our app!](https://covid-data-vis.herokuapp.com/)




## Data Cleanup and Coding Challenges

Because we were using databases from a [previous project](https://github.com/l1987deterding/ETL-Covid-Data.git) that contained much more information than was needed for this project, we had to do some cleaning and combining to get only the relevant data for this dashboard in a format that would allow us to create visualizations. We also ran into the issue of joining data that was being provided at different jurisdiction levels (states vs. counties). We also noticed that some of the data sets had running totals that had been added to since the beginning of Covid, while others may just be providing case/vaccine updates for the most recent week, month, etc. So there was a lot of aggregating and clean up that had to be done in order for our totals and percentages to be accurate. 













