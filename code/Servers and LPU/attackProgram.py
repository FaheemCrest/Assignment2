from concurrent.futures import ThreadPoolExecutor
import threading
import random
import json
import sys
import requests
import pymongo
import time
from bson import ObjectId
import csv
count = 0
import os,binascii
client = pymongo.MongoClient("mongodb+srv://prithvi:root@cluster0.5gcxo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.myFirstDatabase
import time 


while(True):
    temperature = '788'
    db.tempsensors.update_many({},{"$set":{"temp":temperature}})
    time.sleep(0.5)


