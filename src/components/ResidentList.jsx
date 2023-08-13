import React, { useEffect, useState } from 'react'
import ResidentCard from './ResidentCard'
import Pagination from './Pagination';

const INITIAL_PAGE = 1;

const ResidentList = ({residents,currentLocation}) => {
    const [currentPage, setcurrentPage] = useState(INITIAL_PAGE)

    const RESIDENTS_PER_PAGE = 20;

    const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)

    const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE 
    const sliceEnd = sliceStart + RESIDENTS_PER_PAGE

    const residentsInPage = residents.slice(sliceStart,sliceEnd);

    const pages = []
    for(let i = 1;  i < totalPages; i++){
        pages.push(i)
    }

    useEffect(()=> {
        setcurrentPage(INITIAL_PAGE)
    }, [currentLocation])


  return (
        <section>
            <section className='pt-10 grid gap-6 justify-center grid-cols-[repeat(auto-fill,_260px)] max-w-[1200px] mx-auto'>
            {
                residentsInPage.map((resident)=><ResidentCard key={resident} resident={resident} residentUrl={resident}  /> )
            }
            </section>
            <section className='mx-auto justify-center flex py-10'>
            <Pagination pages={pages} setcurrentPage={setcurrentPage} currentPage={currentPage}/>

            </section>
            
        </section>
  )
}

export default ResidentList