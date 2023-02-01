import { RocketLaunch } from 'phosphor-react'
import { useState } from 'react'
import logoNasa from '../assets/nasa.svg?url'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const dateNow = Intl.DateTimeFormat("pt-BR", {
    dateStyle: 'short',
  }).format(new Date())

  const [dateSelected, setDateSelected] = useState(`${dateNow[6] + dateNow[7] + dateNow[8] + dateNow[9]}-${dateNow[3] + dateNow[4]}-${dateNow[0] + dateNow[1]}`)
  const navegate = useNavigate()
  const validationForm = (e) => {
    e.preventDefault()
    navegate(`/post/${dateSelected}`)
  }

  return(
    <>
    <div className='flex flex-col items-center mt-5 py-10'>
            <img className='w-52' src={logoNasa} alt="" />
            <h1
              className='text-5xl font-bold my-8'
            >Imagem Atronómica do Dia</h1>

    </div>
    <div className='flex flex-1 flex-col justify-center pb-64'>
            <form onSubmit={e => validationForm(e)}  className='flex flex-col gap-4 items-center'>
              <input onChange={e => setDateSelected(e.target.value)} value={dateSelected} className='w-96 h-10 rounded outline-none border-none px-3 appearance-none text-blue'   type="date" />
              <button className=' flex  justify-center items-center gap-4 w-96 h-10 rounded bg-blue text-2xl font-bold'>Lançar <RocketLaunch /> </button>
            </form>
    </div>
    </>
  )
}