import React from "react"
import { useParams } from "react-router-dom"
import { api } from '../api'


export function Post(){

  const {date} = useParams()
  const data = api(date)

  
  return(
    <div className='flex flex-row  bg-gray rounded my-10'>
              <img src={data?.url} alt={data?.title}
                className='w-1/2'
              />
              <div className=''>

                <h2
                  className='text-3xl text-black font-bold my-2 p-4'
                >{data?.title}</h2>
                <span className='text-black p-4'>
                  {data?.date} |   {data?.copyright}
                </span>
                <p
                  className='text-black p-4 text-justify'
                >
                  {data?.explanation}
                </p>
              </div>
      </div>
  )
}