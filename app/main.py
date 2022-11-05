from bootstrap import illuminate
from sensors.soil_sensor import read_soil_moisture
from api.store_lab_session import store_lab_session
from utils.config import SOIL_SENSOR_PORT


# on SWITCH ON get probe value from soil sensor
moisture = read_soil_moisture(SOIL_SENSOR_PORT)
store_lab_session(moisture=moisture)


# on start monitoring, start the camera
illuminate()
