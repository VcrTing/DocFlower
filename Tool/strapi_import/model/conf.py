
import os

_ROOT = os.path.dirname(os.path.dirname(__file__))

HOST = 'http://cms02.svr.up5d.com:1337'

LINK = {
    'login': HOST + '/auth/local'
}

ACCOUNT = {
    'identifier': 'vcrting@163.com',
    'password': '1234567'
}



CSV_PATH = os.path.join(_ROOT, 'data')