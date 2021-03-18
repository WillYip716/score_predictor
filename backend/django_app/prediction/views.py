import pickle
import pandas as pd
import numpy as np
import json
from django.http import HttpResponse

with open(f'model/visitor.pkl', 'rb') as f:
    vmodel = pickle.load(f)

with open(f'model/home.pkl', 'rb') as f:
    hmodel = pickle.load(f)


def predict(request):
    data = {
        'name': 'Vitor',
        'location': 'Finland',
        'is_active': True,
        'count': 28
    }
    dump = json.dumps(data)

    return HttpResponse(dump, content_type='application/json')