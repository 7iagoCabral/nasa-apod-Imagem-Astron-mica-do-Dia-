import React, { useState, useEffect } from "react"
export function api(date){
  const [data, setData] = useState()
  useEffect(()=>{
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=API_KEY`)
    .then(response => response.json())
    .then(response => setData(response))
  },[])
  return data
}
