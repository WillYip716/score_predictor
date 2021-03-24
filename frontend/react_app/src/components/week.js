import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

/*
{
        "index": 105,
        "week": 8,
        "vteam": "IND",
        "hteam": "DET",
        "hcspread": 3.5,
        "ouclose": 49.0,
        "visitor_pred": 32,
        "home_pred": 21
    }
*/

function Week() {
  const [data, setData] = useState([]);
  const params = useParams().week;

  useEffect(()=>{
      async function fetchdata(){
          
          axios.get('/predict/'+ params)
          .then(res => {
              const games = res.data;
              setData(games);
          })
      }
      fetchdata();
  },[params])
 
  return (
    <ul style={{textAlign:"center"}}>
      {data.map(item => (
        <div key={item.index}>
            <h4>{item.vteam} at {item.hteam}</h4>
            <p>{item.visitor_pred} to {item.home_pred}</p>
        </div>
      ))}
    </ul>
  );
}
 
export default Week;