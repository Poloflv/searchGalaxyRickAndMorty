import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentCard = ({resident,residentUrl}) => {
    const [residentInfo, setResidentInfo] = useState(null)
    useEffect(() => {
        axios
            .get(residentUrl)
            .then(({data}) => setResidentInfo(data))
            .catch((err) => console.log(err))
    },[])

    const residentStatus = {
        Alive: "bg-green-500",
        Dead: "bg-red-500",
        unknown: "bg-amber-900"
    }
  return (
    <article className='text-white border-2 border-[#8EFF8B]'>
        <header>
            <img className='border-b-2 border-[#8EFF8B] ' src={residentInfo?.image} alt="" />
            <div className='flex items-center gap-2 relative  mx-auto w-max py-1 px-4 bg-[#020A02CC] border-2 border-[#8EFF8B] -top-[80px] '>

                <div className={`h-[10px] aspect-square animate-pulse ${residentStatus[residentInfo?.status]} rounded-full`}></div>
                

                
                <h3>{residentInfo?.status}</h3>
            </div>
        </header>
        <section className=' p-4 flex flex-col '>
            <h3 className='relative -top-[30px] font-bold text-3xl h-[75px] mb-2 line-clamp-2 '>{residentInfo?.name}</h3>
            <div className='w-all h-[0.5px] relative -top-[15px] bg-[#084851]'></div>
            <ul className='flex flex-col gap-4 '>
                <li className='text-[#938686] font-medium text-base'>Species: <span className=' text-white font-semibold text-xl'>{residentInfo?.species}</span></li>
                <li className='text-[#938686] font-medium text-base'>Origin: <span className='ml-[9px] text-white font-semibold text-xl'>{residentInfo?.origin.name}</span></li>
                <li className='text-[#938686] font-medium text-base'>Times appear: <span className='text-center text-white font-semibold text-xl'>{residentInfo?.episode.length} time</span></li>
            </ul>
        </section>
    </article>
  )
}

export default ResidentCard