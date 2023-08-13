import React from 'react'

const Pagination = ({pages,setcurrentPage, currentPage}) => {
  return (
    <div className='mx-auto'>
      <ul className='text-white flex flex-wrap'>
        {
            pages.map((page)=> <li className={`p-4 px-6 rounded-sm text-lg mx-2 cursor-pointer flex flex-wrap ${currentPage === page && " bg-[#062226]"}`} onClick={() => setcurrentPage(page)} key={page}>{page}</li>)
        }
    </ul>
    </div>
    
  )
}

export default Pagination