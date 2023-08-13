import React from 'react'

const LocationInfo = ({currentLocation}) => {
  return (
    <section className='text-white text-center pb-8 mx-auto '>
        <h2 className='font-bold text-2xl'>{currentLocation?.name}</h2>
        <ul className='flex text-center pt-4  justify-between px-2 flex-col md:flex-row md:w-1/2 md:mx-auto'>
            <li className='font-bold pt-4'>Type: <span className='font-normal'>{currentLocation?.type}</span></li>
            <li className='font-bold pt-4'>Dimension: <span className='font-normal'>{currentLocation?.dimension}</span></li>
            <li className='font-bold pt-4'>Population: <span className='font-normal'>{currentLocation?.residents.length}</span></li>
        </ul>
    </section>
  )
}

export default LocationInfo