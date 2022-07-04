#include <Arduino.h>
boolean micro_is_5V = true; 
int scale = 3;
void setup()
{
  // Initialize serial communication at 115200 baud
  Serial.begin(115200);
}
void loop()
{
  // Get raw accelerometer data for each axis
  int rawX = analogRead(A0);
  int rawY = analogRead(A1);
  int rawZ = analogRead(A2);
   float scaledX, scaledY, scaledZ; // Scaled values for each axis
  if (micro_is_5V) // microcontroller runs off 5V
  {
    scaledX = map(rawX, 0, 675, -scale, scale); // 3.3/5 * 1023 =~ 675
  }
  else // microcontroller runs off 3.3V
  {
    scaledX = map(rawX, 0, 1023, -scale, scale);
  }
   // Print out raw X,Y,Z accelerometer readings
  Serial.print("X: "); Serial.println(rawX);

  // Print out scaled X,Y,Z accelerometer readings
  Serial.print("X: "); Serial.print(scaledX); Serial.println(" g");
  delay(2000);
  
}
