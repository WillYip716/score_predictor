import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
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

function Home() {
  const [data, setData] = useState([]);
 
  useEffect(async () => {

    axios.get('predict')
        .then(res => {
            const games = res.data;
            
            setData(games);
        })

        

  },[]);
 
  return (
    <ul>
      {data.map(item => (
        <li key={item.index}>
            <p>{item.vteam} at {item.hteam}</p>
            <p>{item.visitor_pred} to {item.home_pred}</p>
        </li>
      ))}
    </ul>
  );
}
 
export default Home;