import requests
from utils.config import BASE_API_URL

# temperature=None, humidity=None, fire_status=False, tree_population=None
def store(params = {}):
    try:
        url = BASE_API_URL + '/weather/add'

        """ params = {
            "temperature": temperature,
            "humidity": humidity,
            "fire_status_id": fire_status,
			"tree_population": tree_population,
        } """

        # send results to api
        response = requests.post(url, json=params)

        # return request response
        return response.json()
    except Exception as e:
        raise e
