# instruction to run each server and program

## Prerequisite 
1. python3
2. ngrok tunnelling software 
3. node js
4. All the requirred modules in the programs

### localProcessingUnit 
1. run the python program using command 'python3 localProcessingUnit.py'
2. Look at what port localProcessingUnit is running on.  default: 127.0.0.1:5000 //if it is changed then change it in the next step.
4. Make the local port public using --- './ngrok tcp 5000  //if a different port is being used then use a different port.
5. Now change the IP address and port number in arduino program. 
6. Run the arduino program

This let's the connect and receive information from other nodes.


### manBnsServer is the BSN Server
1. run the python program using command 'python3 manBnsServer.py'

### VericationServer.js is the External Verification Server
1. run the python program using command 'node verificaiton.js'
2. Look at what port localProcessingUnit is running on.  default: 127.0.0.1:8000 //if it is changed then change it in the next step.
4. Make the local port public using --- './ngrok http 8000  //if a different port is being used then use a different port.
5. Now change the http address on the client side.




