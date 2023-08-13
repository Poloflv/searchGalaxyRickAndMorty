import React from 'react'

const CardBody = ({character}) => {
  return (
    <section className='bg-[url(/fondo7.jpg)] bg-no-repeat bg-cover bg-bottom bg-transparent/90 h-[420px] rounded-2xl overflow-hidden'>
        <div >
            <img  src={character.image} alt="" />
            <div className='ml-3 mt-1 font-semibold'>
                <ul>
                    <li>Name: {character.name}</li>
                    <li>Gender: {character.gender}</li>
                    <li>Location: {character.location.name}</li>
                    <li className='inline-flex'>Location: {character.status} <span className='ml-2'><img className='animate-pulse w-6' src="/red.png" alt="" /></span></li>

                </ul>
            </div>
        </div>
        
    </section>
  )
}

export default CardBody