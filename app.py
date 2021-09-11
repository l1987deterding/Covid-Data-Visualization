from flask import Flask, render_template, jsonify
import pymongo
# from config import mongo_url
from mongo_atlas import password
import os

mongo_url=os.environ.get('mongo_pass')

app=Flask(__name__)

client=pymongo.MongoClient(mongo_url)
mongo_db=client.db
conn = f'mongodb+srv://aarvinrathod:{password}@covid.01bco.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
client2=pymongo.MongoClient(conn)
mongo_db2=client2.coviddb

@app.route('/')
def home(): 
    return render_template('index.html')
    
@app.route('/figure')
def fetch(): 
    result=mongo_db.covid_stats.find_one()
    result_json={key:value for (key,value) in result.items() if key!='_id'}
    return jsonify(result_json)

@app.route('/find')
def fetchagain(): 
    data=mongo_db2.admindata.find_one()
    result_json2={key:value for (key,value) in data.items() if key!='_id'}
    data2 = mongo_db2.finaldata.find_one()
    data_json2= {key:value for (key,value) in data2.items() if key!='_id'}
    return jsonify(result_json2, data_json2)


if __name__=='__main__': 
    app.run(debug=True)