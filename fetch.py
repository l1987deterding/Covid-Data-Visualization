from splinter import Browser
from bs4 import BeautifulSoup as bs
import time
from webdriver_manager.chrome import ChromeDriverManager
import pandas as pd
from config import mongo_url
import pymongo

client=pymongo.MongoClient(mongo_url)
mongo_db=client.db

def scrape_info():
    # Set up Splinter
    executable_path = {'executable_path': ChromeDriverManager().install()}
    # browser = Browser('chrome', executable_path=ChromeDriverManager().install(), headless=True) 
    browser = Browser('chrome', **executable_path, headless=True) 

    # Visit site
    url = "https://covid.cdc.gov/covid-data-tracker/#trends_dailycases"
    browser.visit(url)

    time.sleep(2)

    # Scrape page into Soup
    html = browser.html
    soup = bs(html, "html.parser")

    # Get the cases
    total_cases = soup.find_all('span', {'class':'totalNumber'}, {'id':'status-cases-total'})[0].text

    # Get the deaths
    total_deaths = soup.find_all('span', {'class':'totalNumber'}, {'id':'status-deaths-total'})[0].text

    # get % of adults with at least 1 vaccination
    one_vacc= soup.find_all('span', {'id':'status-total-vaccines'})[0].text

    # get community transmission info
    comm_trans= soup.find_all('span', {'id':'transmission-label'})[0].text

    #create dictionary
    covid_stats = {
        "total_cases": total_cases,
        "total_deaths": total_deaths,
        "one_vacc": one_vacc,
        "comm_trans": comm_trans
    }

    # Close the browser after scraping
    browser.quit()

    # Return results
    return covid_stats

mongo_db.covid_stats.insert_one(scrape_info())