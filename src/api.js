import React, { useState, useEffect } from "react"
export function api(date){
  const [data, setData] = useState()
  useEffect(()=>{
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=CfnXO9Ag3Pd182pJrc0dM3jQhMfG1Ntkcejq60wE`)
    .then(response => response.json())
    .then(response => setData(response))
  },[])
  return data
}
