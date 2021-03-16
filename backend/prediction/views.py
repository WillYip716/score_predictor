import pickle
import pickle
import pandas as pd
import numpy as np
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response


with open(f'model/visitor.pkl', 'rb') as f:
    vmodel = pickle.load(f)

with open(f'model/home.pkl', 'rb') as g:
    hmodel = pickle.load(g)


@api_view()
def hello_world(request):

    return Response({"message": "Hello, world!"})