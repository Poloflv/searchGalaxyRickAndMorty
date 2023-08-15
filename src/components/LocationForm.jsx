import React from 'react'

const LocationForm = ({handleSubmit}) => {
  return (
    <>

<form className=' mx-auto relative top-[-10rem] flex w-2/3  border-2 border-[#8EFF8B] ' onSubmit={handleSubmit}>
        <input className='text-white flex-1 bg-black pl-2 text-[0.6rem] sm:text-base' min={1} max={126} placeholder='Type a location id...' type="number" id='newLocation' />
        <div className='bg-[#8EFF8B80]  h-max border-l-2 border-[#8EFF8B] p-4'>
        <button className='text-white '>Search <span><i class='bx bx-search'></i></span></button>
        
        </div>
    </form>
        <h2 className='text-[#8EFF8B] text-center pb-5 mb-5 font-medium text-xl'>¡Wellcome to the crazy universe!</h2>
    </>
  )
}

export default LocationForm