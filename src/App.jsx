import { useState } from 'react'
import { List, RocketLaunch } from 'phosphor-react'
import logoNasa from './assets/nasa.svg?url'
import { ReactDOM } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './routes/Home'
import { Post } from './routes/Post'
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/post/:date',
      element: <Post />
    },
  ])  
  

  return (
    <div className="bg-black h-screen text-gray">
        <div className='flex flex-col h-full w-[1024px] mx-auto items-center'>
          <div className='flex mt-5 w-full items-center'>
            <a href="/" >
              <List  className="text-blue" size={32}/>
            </a>
            <img src={logoNasa} className='h-10 ml-3' alt='logo da nasa' />
            
          </div>
          <div className='flex flex-1 flex-col justify-center'>
            <RouterProvider router={router} />

          </div>
          
          <div className='text-white py-10'>
                Criado por Tiago Cabral
          </div>
        </div>    
    </div>
  )
}

export default App

