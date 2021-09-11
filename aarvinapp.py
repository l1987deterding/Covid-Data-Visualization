from flask import Flask, render_template, redirect, jsonify
import pymongo
from mongo_atlas import password


app=Flask(__name__)
conn = f'mongodb+srv://aarvinrathod:{password}@covid.01bco.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
client=pymongo.MongoClient(conn)
mongo_db=client.coviddb

@app.route('/')
def home(): 
    return render_template('index.html')
    

@app.route('/fetch')
def fetch(): 
    data=mongo_db.admindata.find_one()
    result_json={key:value for (key,value) in data.items() if key!='_id'}
    data2 = mongo_db.finaldata.find_one()
    data_json= {key:value for (key,value) in data2.items() if key!='_id'}
    return jsonify(result_json, data_json)


if __name__=='__main__': 
    app.run(debug=True)