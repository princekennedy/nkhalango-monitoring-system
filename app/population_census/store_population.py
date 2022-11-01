import requests
from utils.config import BASE_API_URL


def store_population(total=None):
    try:
        url = BASE_API_URL + '/weather/add'

        params = {
            total: total
        }

        # send results to api
        response = requests.post(url, json=params)

        # return request response
        return response
    except Exception as e:
        raise e
