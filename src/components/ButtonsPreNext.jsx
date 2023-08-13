import React from 'react'

const ButtonsPreNext = ({prev,next, prevAction, nextAction}) => {
    const handlePrevius = () => {
        prevAction()
    }

    const handleNext = () => {
        nextAction()
    }
  return (
    <section>
        

        <div className='flex justify-center py-5 '>
            <div className='justify-start'>
            <a href="/">
                    <button className='p-3 bg-slate-600 rounded-xl text-white font-bold mr-4'>reload</button>
                    </a>
            </div>
            {
                prev ? <button className='p-3 bg-slate-600 rounded-xl mr-4 text-white font-bold' onClick={handlePrevius}>Preview</button> : null
            }
            
            {
                next ? <button className='p-3 bg-slate-600 rounded-xl text-white font-bold' onClick={handleNext}>Next</button> : null
            }
        </div>
    </section>
  )
}

export default ButtonsPreNext