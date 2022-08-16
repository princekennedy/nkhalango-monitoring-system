import requests
from utils.config import BASE_API_URL


def store_weather_updates(temperature=None, humidity=None, fire_status=False, ):
    try:
        url = BASE_API_URL + '/weather/add'

        params = {
            "temperature": temperature,
            "humidity": humidity,
            "fire_status_id": fire_status
        }

        # send results to api
        response = requests.post(url, json=params)

        # return request response
        return response
    except Exception as e:
        raise e
