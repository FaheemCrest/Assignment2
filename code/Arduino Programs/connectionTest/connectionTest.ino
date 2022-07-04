#include <SPI.h>
#include <WiFiNINA.h>
WiFiClient client;

///////please enter your sensitive data in the Secret tab/arduino_secrets.h
char ssid[] = "iPhone";        // your network SSID (name)
char pass[] = "hack@123";    // your network password (use for WPA, or use as key for WEP)
int status = WL_IDLE_STATUS;     // the WiFi radio's status
const uint16_t port = 15484;
const char * host = "6.tcp.ngrok.io";
//tcp://2.tcp.ngrok.io:12723
// Specify IP address or hostname



// ************************************************** MAIN SETUP FUNCTION *************************************************************

void setup()
{
    Serial.begin(9600);//For Temp. Sensor and EMG and ECG and Accelerometer

// wifi code ************************************************************************************************
    while (!Serial) {

    ; // wait for serial port to connect. Needed for native USB port only

  }

  // check for the WiFi module:

  if (WiFi.status() == WL_NO_MODULE) {

    Serial.println("Communication with WiFi module failed!");

    // don't continue

    while (true);

  }

  String fv = WiFi.firmwareVersion();

  if (fv < WIFI_FIRMWARE_LATEST_VERSION) {

    Serial.println("Please upgrade the firmware");

  }

  // attempt to connect to WiFi network:

  while ( status != WL_CONNECTED) {

    Serial.print("Attempting to connect to WPA SSID: ");

    Serial.println(ssid);

    // Connect to WPA/WPA2 network:

    status = WiFi.begin(ssid, pass);

    // wait 5 seconds for connection:

    delay(2000);

  }

  // you're connected now, so print out the data:

  Serial.println("You're connected to the network");
   
}



// ************************************************** MAIN LOOP *************************************************************

void loop()
{
   WiFiClient client;
   int flag = 0;
   int count = 0;
  //Serial.println("\n[Connecting to %s ... ", host);
  if (client.connect(host, port))
  {
    Serial.println("connected]");
  
    Serial.println("[Sending a request]");
    client.print(String(count));
    count = count + 1;
    Serial.println("[Response:]");
    Serial.println("heedsfal1");
    while (client.connected() || client.available())
    {
      Serial.println("heedsfa2");
      flag = 1;
      if (client.available())
      {
        String line = client.readStringUntil('\n');
        Serial.println(line);
        count = 2;
        client.println(String(count));
        flag = 1;
      }
      delay(3000);
      client.println(String(count));
      Serial.println("heedsfal3");
      if(flag == 1)
      {
        int id = 0;
        String sendPacket;
        String sensorValue;
        while(true)
        {
          //Sensor gps sensor:
          //sending information 
          sensorValue = "111";
          id = 1;
          sendPacket = String(id) + String(" ") + String(sensorValue) + String("\n");
          client.println(sendPacket);
          delay(1000);

          //Sensor EMG Sensor:
          //Sending Information
          for(int i = 0; i < 40; i++)
          {
            sensorValue = "222";
            id = 2;
            sendPacket = String(id) + String(" ") + String(sensorValue) + String("\n");
            client.println(sendPacket);
            delay(200);
          }

          //Sensor ECG Sensor:
          //Sending Information
          for(int i = 0; i < 40; i++)
          {
            sensorValue = "333";
            id = 3;
            sendPacket = String(id) + String(" ") + String(sensorValue) + String("\n");
            client.println(sendPacket);
            delay(200);
          }

          //Sensor heartbeat sensor:
          //sending information 
          sensorValue = "444";
          id = 4;
          sendPacket = String(id) + String(" ") + String(sensorValue) + String("\n");
          client.println(sendPacket);
          delay(1000);

          //Sensor Temparature sensor:
          //sending information 
          sensorValue = "555";
          id = 5;
          sendPacket = String(id) + String(" ") + String(sensorValue) + String("\n");
          client.println(sendPacket);
          delay(1000);

          //Sensor Accelorometer:
          //sending information 
          sensorValue = "666";
          id = 6;
          sendPacket = String(id) + String(" ") + String(sensorValue) + String("\n");
          client.println(sendPacket);
          delay(1000);
          
        }

        /*
         client.println(String(count));
         count = count + 1;
          flag = 0;
         int new_con = 5;
         while(new_con > 0)
         {
             client.println(String(count));
             new_con = new_con - 1;
         }

         */
      }
    }
    client.stop();
    Serial.println("\n[Disconnected]");
  }
  else
  {
    Serial.println("connection failed!]");
    client.stop();
  }
  delay(5000);
}
