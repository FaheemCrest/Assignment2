import socket
import sys
import requests
import pymongo
import time
from bson import ObjectId
count = 0
import os,binascii
client = pymongo.MongoClient("mongodb+srv://prithvi:root@cluster0.5gcxo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.myFirstDatabase
#inp=binascii.b2a_hex(os.urandom(12))
#inp=inp.decode()
count =0
while(True):
    count = count +1
    db.postvalues.update_many({},{"$set":{"count":count}})
    time.sleep(1)
#db.posts.insert_one({"_id":ObjectId(inp),"sensorName":"Testing sensor","sensorValue":str(8472)})