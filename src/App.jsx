import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import axios from 'axios'
import BodyPage from './components/BodyPage'
import ButtonsPreNext from './components/ButtonsPreNext'
import { getRandomDimension } from './utils/random'
import LocationForm from './components/LocationForm'
import LocationInfo from './components/LocationInfo'
import ResidentList from './components/ResidentList'

function App() {

  const [currentLocation, setCurrentLocation] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.newLocation.value;
    
    const url = `https://rickandmortyapi.com/api/location/${newLocation}`

    axios
      .get(url)
      .then(({data}) => setCurrentLocation(data))
      .catch((err) => console.log(err));
  
  }

  const ferchDimension = (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`

    axios
      .get(url)
      .then(({data}) => setCurrentLocation(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    const randomDimension = getRandomDimension(126)
    const url = `https://rickandmortyapi.com/api/location/${randomDimension}`

    axios
      .get(url)
      .then(({data}) => setCurrentLocation(data))
      .catch((err) => console.log(err));
  }, [])

  return (
    <>
      {/* <Navbar/> */}
      <header className='bg-[url(/backgroundheader.png)] bg-cover flex justify-center flex-col'>
        <img  className='z-10 w-10/12 mx-auto relative h-[25rem] top-[-10rem]  sm:h-[34rem] sm:top-[-14rem] md:h-[40rem] md:top-[-15rem] lg:h-[32rem] lg:top-[-12rem] lg:w-1/2 xl:h-[42rem] 2xl:h-[40rem]' src="/portal.png" alt="" />
        <img  className='z-20 w-10/12 mx-auto relative top-[-23rem] sm:top-[-30rem] md:top-[-37rem] lg:top-[-25rem] lg:w-1/2 xl:top-[-34rem]' src="/title2.png" alt="" />
        <div id='demo' className='bg-fixed top-[45rem] rounded-full h-[10rem] w-[10rem] mx-auto z-0'></div>
        <section className='relative top-[-12rem]'>
        <LocationForm handleSubmit={handleSubmit}/>
        </section>
      </header>
      <main  className='bg-[url(/backgroundpage.png)] bg-cover min-h-screen p-2 '>
        <section className='relative top-[-6rem]'>
        <LocationInfo currentLocation={currentLocation}/>
        <ResidentList  currentLocation={currentLocation} residents={currentLocation?.residents ?? [] }/>

        </section>
      </main>
      {/* <section className='bg-[url(/fondo5.png)] bg-cover list-image-none bg-center'> */}
      {/* <ButtonsPreNext prev={info.prev} next={info.next} prevAction={prevAction} nextAction={nextAction}/>
      <BodyPage characters={characters}/>
      <ButtonsPreNext prev={info.prev} next={info.next} prevAction={prevAction} nextAction={nextAction}/> */}
      {/* </section> */}
    </>
  )
}

export default App
