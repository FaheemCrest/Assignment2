#!/usr/bin/env python3
import socket
from concurrent.futures import ThreadPoolExecutor
import threading
import random
HOST = '127.0.0.1'  
PORT = 5000     
id = 0
connection = []
message = []
ecgIndex = 0
emgIndex = 0
hostConnect = '127.0.0.1'  
portConnect = 4000


def sendInfo(data):
    global message
    global ecgIndex
    global emgIndex
    global connection
    #print(data)
    data = data.split()
    #print(data)
    if(len(data)):
        index = 0
        while(True):
            try:
                if(data[index]=='1'):
                    index = index + 1;
                    innerIndex = 0
                    #print(data)
                    if(data[index] == "false"):
                        message[innerIndex] = [38.8951,-77.0364]
                    else:
                        message[innerIndex] = data[index]
                    index = index + 1
                    #print('Message='+str(message))
                elif(data[index]=='2'):
                    index = index + 1;
                    innerIndex = 1
                    #print(data)
                    if(data[index] == "false"):
                        message[innerIndex][ecgIndex] = random.randint(400,500)
                    else:
                        message[innerIndex][ecgIndex] = data[index]
                    
                    ecgIndex = ecgIndex + 1
                    if(ecgIndex >= 40):
                        ecgIndex = 0
                    index = index + 1
                    #print('Message='+str(message))
                elif(data[index]=='3'):
                    index = index + 1;
                    innerIndex = 2
                    #print(data)
                    if(data[index] == "false"):
                        message[innerIndex][emgIndex] = random.randint(400,500)
                    else:
                        message[innerIndex][emgIndex] = data[index]
                    emgIndex = emgIndex + 1
                    if(emgIndex >= 40):
                        emgIndex = 0
                    index = index + 1
                    #print('Message='+str(message))
                elif(data[index]=='4'):
                    index = index + 1;
                    innerIndex = 3
                    #print(data)
                    if(data[index] == "false"):
                        message[innerIndex] = random.randint(70,80)
                    else:
                        message[innerIndex] = data[index]
                    index = index + 1
                    #print('Message='+str(message))
                elif(data[index]=='5'):
                    index = index + 1;
                    innerIndex = 4
                    #print(data)
                    if(data[index] == "false"):
                        message[innerIndex] = random.randint(21,36)
                    else:
                        message[innerIndex] = data[index]
                    index = index + 1
                    #print('Message='+str(message))
                elif(data[index]=='6'):
                    index = index + 1;
                    innerIndex = 5
                    #print(data)
                    if(data[index] == "false"):
                        message[innerIndex] = random.randint(1,5)
                    else:
                        message[innerIndex] = data[index]
                    index = index + 1
                    print('Message='+str(message))
                    message1 = str(message).encode()
                    connection[0].sendall(message1)
                else:
                    break
            except:
                break
        
def receiveInformation(conn):
    
    print('happy')
    with conn:
        while True:
            data = conn.recv(1024)
            sendInfo(data.decode())
            #print(data)
            if not data:
                break

def sendInformation(conn):
    print('sending information');
    val = "true"
    val = val.encode()
    with conn:
        conn.sendall(val);

#task1 = executor.submit(task)
   # task2 = executor.submit(task)
def acceptsConnection(s):
    executor = ThreadPoolExecutor(max_workers=3)
    id = 0
    while True:
        conn, addr = s.accept()
        receiveTask = executor.submit(receiveInformation(conn));
        #sendingTask = executor.submit(sendInformation(conn));

def info():
    l = []
    index = 0
    while(index < 40):
        l.append(0)
        index = index + 1
    return l

def info1():
    global message
    message.append(0);
    l = info()
    message.append(l)
    l = info()
    message.append(l)
    message.append(0);
    message.append(0);
    message.append(0);

def init():
    global connection
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect((hostConnect,portConnect))
    connection.append(s)
def main():
    init()
    info1()
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind((HOST, PORT))
        s.listen()
        acceptsConnection(s)
if __name__ == '__main__':
    main()







    