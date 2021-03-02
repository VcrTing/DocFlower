import os, glob, csv, requests

from .login import _build_header 
from .conf import CSV_PATH, HOST

# 根据首行 建立数据
def _build_param(header, item):
    res = { }
    try:
        for i, h in enumerate(header):
            res[h] = item[i]
    except:
        pass
    return res

# 发送数据
def _send_data(model, data, headers):
    url = HOST + '/' + model
    res = requests.post(url, data, headers = headers)
    return res.status_code

# 执行导入
def _imported(model, title, rows):
    headers = _build_header()
    res = []
    if headers:
        for r in rows:
            data = _build_param(title, r)
            e = _send_data(model, data, headers)
            res.append(e)

    return res

# 主方法
def load_csv():
    paths = glob.glob(os.path.join(CSV_PATH, '*.csv'))
    
    for i in paths:
        with open(i, encoding='utf-8') as f:
            rows = csv.reader(f)
            model_name = i.split('/')[-1].split('.')[0]
            res = _imported(model_name, next(rows), rows)

            print('文件:', model_name + '.csv', ', 成功导入:', len(res), '（个）')