"use client"
import React from 'react'
import Link from 'next/link'

import { useState } from 'react'






const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>

     <div className={`header transition-all duration-400 ${isOpen ? "h-100" : "h-14"}`}>
        <Link className="text-2xl font-bold hover:cursor-pointer text-purple-600" href="/" id="logoHead">
            <img src="/logo.png" alt="logo" className='w-15 h-10 inline-block' />        
          Degree Dost
        </Link>




    <div id='navbar' className={`flex  ${isOpen ? "flex-col " : "flex-row"}`}>
     <Link className='links' href= "/">Home</Link>
     <Link className='links' href="/Notes" >Notes</Link>
     <Link className='links' href="/QuestionP" >Question Papers</Link>
     <Link className='links' href="/Results" >Results</Link>
     <Link className='links' href="/Notifications" >Notifications</Link>
     <Link className='links' href="/NoticeBoard" >Notice Board</Link>
     <Link className='links' href="https://forms.gle/RaSZu4xDWkYdX8CX8" >Submit Content</Link>
    </div>

      

    <div className="menubar py-3 ">
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src="./images/menubtn.png" alt="menu" />
        </button>
      </div>

    </div>
    </>

    
  )
}

export default Header
