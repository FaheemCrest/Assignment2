#include <SPI.h>
#include <WiFiNINA.h>
WiFiClient client;
#include <TinyGPS++.h>
#include <SoftwareSerial.h>

///////please enter your sensitive data in the Secret tab/arduino_secrets.h
char ssid[] = "iPhone";        // your network SSID (name)
char pass[] = "hack@123";    // your network password (use for WPA, or use as key for WEP)
int status = WL_IDLE_STATUS;     // the WiFi radio's status
const uint16_t port = 11423;
const char * host = "2.tcp.ngrok.io";
//tcp://2.tcp.ngrok.io:12723
// Specify IP address or hostname

//gps
static const int RXPin = 4, TXPin = 3;
static const uint32_t GPSBaud = 9600;
// The TinyGPS++ object
TinyGPSPlus gps;
// The serial connection to the GPS device
SoftwareSerial ss(RXPin, TXPin);



// ************************************************** MAIN SETUP FUNCTION *************************************************************



String generateEcgValues()
{

  if((digitalRead(10) == 1)||(digitalRead(11) == 1)){
    Serial.println('!');
    return("false");
  }
  else{
    // send the value of analog input 0:
      Serial.println(analogRead(A0));
      String val = String(analogRead(A0));
      return(val);
  }
  //Wait for a bit to keep serial data from saturating
  delay(200);
}

String genetateTemperatureValues()
{
    uint16_t val;
    double dat;
    val=analogRead(A0);//Connect LM35 on Analog 0
    dat = (double) val * (5/10.24);
    return(String(dat));
}

String generateGpsValues()
{
     if (ss.available() > 0)
     {
          if (gps.encode(ss.read()))
          {
            String val=displayInfo();
            return val;
          }
     }
     else
     {
      return("false");
     }
    if (millis() > 5000 && gps.charsProcessed() < 10)
    {
      Serial.println(F("No GPS detected: check wiring."));
      Serial.println(F("No GPS detected: check wiring."));
      //while(true);
    }
}
String displayInfo()
{
  Serial.print(F("Location: ")); 
  if (gps.location.isValid())
  {
    Serial.print(gps.location.lat(), 6);
    Serial.print(F(","));
    Serial.print(gps.location.lng(), 6);
    String val1 = String(gps.location.lat(), 6);
    String val2 = String(gps.location.lat(), 6);
    String returnString = val1 + String(" ") + val2;
    return returnString;
    
  }
  else
  {
    Serial.print(F("INVALID"));
    return("false");
  }

  Serial.print(F("  Date/Time: "));
  if (gps.date.isValid())
  {
    Serial.print(gps.date.month());
    Serial.print(F("/"));
    Serial.print(gps.date.day());
    Serial.print(F("/"));
    Serial.print(gps.date.year());
  }
  else
  {
    Serial.print(F("INVALID"));
  }

  Serial.print(F(" "));
  if (gps.time.isValid())
  {
    if (gps.time.hour() < 10) Serial.print(F("0"));
    Serial.print(gps.time.hour());
    Serial.print(F(":"));
    if (gps.time.minute() < 10) Serial.print(F("0"));
    Serial.print(gps.time.minute());
    Serial.print(F(":"));
    if (gps.time.second() < 10) Serial.print(F("0"));
    Serial.print(gps.time.second());
    Serial.print(F("."));
    if (gps.time.centisecond() < 10) Serial.print(F("0"));
    Serial.print(gps.time.centisecond());
  }
  else
  {
    Serial.print(F("INVALID"));
  }

  Serial.println();
}





void setup()
{
    Serial.begin(9600);//For Temp. Sensor and EMG and ECG and Accelerometer
    //ECG sensor
    pinMode(10, INPUT); // Setup for leads off detection LO +
    pinMode(11, INPUT); // Setup for leads off detection LO -
    //gps
    ss.begin(GPSBaud);
    
    




    

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
      //client.println(String(count));
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
          sensorValue = "false";
          id = 1;
          sendPacket = String(id) + String(" ") + String(sensorValue) + String("\n");
          client.println(sendPacket);
          delay(100);

          //Sensor EMG Sensor:
          //Sending Information
          for(int i = 0; i < 40; i++)
          {
            sensorValue = "false";
            id = 2;
            sendPacket = String(id) + String(" ") + String(sensorValue) + String("\n");
            client.println(sendPacket);
            delay(100);
          }

          //Sensor ECG Sensor:
          //Sending Information
          for(int i = 0; i < 40; i++)
          {
            sensorValue = "false";
            id = 3;
            sendPacket = String(id) + String(" ") + String(sensorValue) + String("\n");
            client.println(sendPacket);
            delay(100);
          }

          //Sensor heartbeat sensor:
          //sending information 
          sensorValue = "false";
          id = 4;
          sendPacket = String(id) + String(" ") + String(sensorValue) + String("\n");
          client.println(sendPacket);
          delay(100);

          //Sensor Temparature sensor:
          //sending information 
          sensorValue = "false";
          id = 5;
          sendPacket = String(id) + String(" ") + String(sensorValue) + String("\n");
          client.println(sendPacket);
          delay(100);

          //Sensor Accelorometer:
          //sending information 
          sensorValue = "false";
          id = 6;
          sendPacket = String(id) + String(" ") + String(sensorValue) + String("\n");
          client.println(sendPacket);
          
          delay(100);
          
        }
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
  delay(1000);
}
