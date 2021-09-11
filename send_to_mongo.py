from typing import Collection
import pymongo
from pymongo import collection
from mongo_atlas import password
import json


conn = f'mongodb+srv://aarvinrathod:{password}@covid.01bco.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
client = pymongo.MongoClient(conn)

db = client.coviddb
Collection = db.admindata
Collection.drop()

with open("administration.json") as file:
    file_data = json.load(file)

Collection.insert_one(file_data)

Collection = db.finaldata
Collection.drop()

with open("final_data.json") as file:
    file_data = json.load(file)

Collection.insert_one(file_data)