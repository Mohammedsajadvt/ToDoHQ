import React from 'react'
import dashboard from '../assets/Dashboard.png'
function AppHeader() {
  return (
   <header className='w-full bg-[#F8F8F8] top-0 left-0 right-0 fixed px-4 py-5 flex shadow z-10'>
    <div className='flex'>
    <img src={dashboard} className='h-auto max-w-30' alt="" />
    </div>
   </header>
  )
}

export default AppHeader
