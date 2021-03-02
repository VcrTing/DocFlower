import requests, json

from .conf import LINK, ACCOUNT

def _getToken():
    res = requests.post(LINK['login'], ACCOUNT)
    try:
        res = json.loads(res.text)['jwt']
    except:
        return None
    
    return res


def _build_header():
    token = _getToken()
    if token:
        return {
            'Authorization': 'Bearer ' + token
        }
    return None

