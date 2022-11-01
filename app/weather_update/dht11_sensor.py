import Adafruit_DHT


# pip install Adafruit_DHT

# Adafruit_DHT.DHT22 for DHT22 sensor.
# 4 is the GPIO number which can be changed to port needed

def read_th(port=4):
    DHT11 = Adafruit_DHT.DHT11
    temperature, humidity = Adafruit_DHT.read_retry(DHT11, port)

    return [
        temperature,
        humidity
    ]
