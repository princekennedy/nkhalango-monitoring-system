import requests
from utils.config import BASE_API_URL, LOAM_SOIL, SANDY_SOIL, \
    CLAY_SOIL, LOAM_SOIL_COEF, \
    SANDY_SOIL_COEF, CLAY_SOIL_COEF


def store_lab_session(moisture=None):
    try:
        url = BASE_API_URL + '/lab-session/add'

        soil_type = 'others'

        # detect and identify soil type
        if LOAM_SOIL_COEF == moisture:
            soil_type = LOAM_SOIL
        elif SANDY_SOIL_COEF == moisture:
            soil_type = SANDY_SOIL
        elif CLAY_SOIL_COEF == moisture:
            soil_type = CLAY_SOIL
        else:
            pass

        params = {
            'probe_value': moisture,
            'soil_type': soil_type,
        }

        # send results to api
        response = requests.post(url, json=params)

        # return request response
        return response
    except Exception as e:
        raise e
