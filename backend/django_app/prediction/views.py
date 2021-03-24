import pickle
import pandas as pd
import numpy as np
import json
from django.http import HttpResponse

with open(f'model/visitor.pkl', 'rb') as f:
    vmodel = pickle.load(f)

with open(f'model/home.pkl', 'rb') as f:
    hmodel = pickle.load(f)


def predict(request,week):

    data = pd.read_csv('model/merged_mldata2020v2.csv',delimiter = ',')
    outputs = []
    games = data.drop(columns =['vscore', 'hscore','winner','ou',"sWinner","fspread","fscore","vospread","vcspread"])
    games = pd.DataFrame(games)
    
    weekfilter = games['week'] == week

    games = games[weekfilter]

    #data.corr()
    columnheads = ['temp','wind_mph','vdflg','hdflg','divgame','nsite','hospread','ouopen','hcspread','ouclose','vTOTAL.DVOA','vTOTAL.RNK','vOFF.RNK','vOFF.DVOA','vDEF.RNK','vDEF.DVOA','vST.RNK','vST.DVOA','hTOTAL.DVOA','hTOTAL.RNK','hOFF.RNK','hOFF.DVOA','hDEF.RNK','hDEF.DVOA','hST.RNK','hST.DVOA','vtsw','vtsl','vtst','htsw','htsl','htst','vtw','vtl','vtt','vts','htw','htl','htt','hts']

    games = np.hsplit(games,[3])
    tw = games[0]
    pdata = games[1]
    input_variables = pd.DataFrame(pdata, columns = columnheads,dtype=float)

    
    #input_variables["visitor_pred"] = vmodel.predict(input_variables)


    visitorpred = vmodel.predict(input_variables)
    homepred = hmodel.predict(input_variables)

    input_variables["visitor_pred"] = visitorpred
    input_variables["home_pred"] = homepred

    output_info = input_variables[["hcspread","ouclose","visitor_pred","home_pred"]]
    output_info = tw.join(output_info)

    result = output_info.to_json(orient="table")
    parsed = json.loads(result)

    dump = json.dumps(parsed["data"])

    return HttpResponse(dump, content_type='application/json')