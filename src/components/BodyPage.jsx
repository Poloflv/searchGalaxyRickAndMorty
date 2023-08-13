import React from 'react'
import CardBody from './CardBody'


const BodyPage = ({characters}) => {
    console.log(characters);
  return (
    <section className='  pb-10'>

<section className='pt-10 grid gap-6 justify-center grid-cols-[repeat(auto-fill,_260px)] max-w-[1200px] mx-auto '>

    {
        characters.map((character, index)=> <CardBody key={index} character={character}/>)
    }
</section>

    </section>
  )
}

export default BodyPage