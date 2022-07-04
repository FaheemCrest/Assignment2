#!/usr/bin/env python3
import socket
from concurrent.futures import ThreadPoolExecutor
import threading
import random
import json
HOST = '127.0.0.1'  
PORT = 4000


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
count =0

import hashlib
from hashlib import sha256
API_ENDPOINT = "http://127.0.0.1:8000/handle"


hash = ""
gps = ""
emg = []

ecg = []
temperature = ""
heartrate = ""
acceloromerer = ""



def calHash(data):
    global hash
    hashNum = str(data[4])
    #print("Hash Number="+str(hashNum))
    hash=sha256(hashNum.encode()).hexdigest()
    print("hash:",hash," ID:BSN2837")
    data = {'hash':hash}
    r = requests.post(url = API_ENDPOINT, data = data)
    db.heartsensors.update_many({},{"$set":{"heartrate":heartrate}})
    db.tempsensors.update_many({},{"$set":{"temp":temperature}})
    db.accsensors.update_many({},{"$set":{"acc":acceloromerer}})
    db.gprs.update_many({},{"$set":{"gps":gps}})
    db.ecgsensors.update_many({},{"$set":{"ecg":ecg}})
    db.emgsensors.update_many({},{"$set":{"emg":emg}})
    '''
    hashNum = 0
    #print(data)
    index = 0
    while(index < 6):
        if (index == 0):
            innerIndex = 0
            while(innerIndex < 2):
                hashNum = hashNum + float(data[index][innerIndex])
                innerIndex = innerIndex + 1   
        elif(index == 1 or index == 2):
            innerIndex = 0
            while(innerIndex < 40):
                hashNum = hashNum + float(data[index][innerIndex])
                innerIndex = innerIndex + 1 
        else: 
            hashNum = hashNum + float(data[index])
        index = index + 1
    hashNum = str(hashNum)
    #print("Hash Number="+hashNum)
    hash=sha256(hashNum.encode()).hexdigest()
    print("hash:",hash," ID:BSN2837")
    data = {'hash':hash}
    r = requests.post(url = API_ENDPOINT, data = data) '''



def saveMessageAndGenerateHash(conn):
    global gps 
    global emg
    global ecg 
    global heartrate
    global temperature
    global acceloromerer
    with conn:
        while True:
            #print('happy')
            data = conn.recv(1024)
            data = data.decode()
            data = json.loads(data)
            gps = ','.join([str(elem) for elem in data[0]])
            #print("gps="+str(gps))
            index = 0
            ecg = []
            while(index<40):
                ecg.append(str(data[1][index]))
                index = index + 1
            emg = []
            index = 0
            while(index<40):
                emg.append(str(data[2][index]))
                index = index + 1
            heartrate = str(data[3])
            temperature = str(data[4])
            acceloromerer = str(data[5])
            calHash(data)
            if not data:
                break

def acceptsConnection(s):
    executor = ThreadPoolExecutor(max_workers=3)
    id = 0
    while True:
        conn, addr = s.accept()
        #print('good')
        receiveTask = executor.submit(saveMessageAndGenerateHash(conn));


def main():
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind((HOST, PORT))
        s.listen()
        acceptsConnection(s)
if __name__ == '__main__':
    main()