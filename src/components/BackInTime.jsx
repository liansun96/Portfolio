import React from 'react'

const BackInTime = ({toggleBackInTimeModal}) => {
  return (
    <div onClick={toggleBackInTimeModal} className="absolute bottom-5 right-0 xl:-right-5 2xl:-right-16 duration-300 hover:-translate-y-6 cursor-pointer">
        <img className='h-20' src="https://i.gifer.com/Vp3M.gif" alt="" />
    </div>
  )
}

export default BackInTime