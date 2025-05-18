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
          Degree Dost
        </Link>




    <div id='navbar' className={`flex  ${isOpen ? "flex-col " : "flex-row"}`}>
     <Link className='links' href= "/">Home</Link>
     <Link className='links' href="/Notes" >Notes</Link>
     <Link className='links' href="/QuestionP" >Question Papers</Link>
     <Link className='links' href="/Results" >Results</Link>
     <Link className='links' href="/NoticeBoard" >Notice Board</Link>
     <Link className='links' href="/SubmitCon" >Submit Content</Link>
     <Link className='links' href="/Admin" >Admin</Link>
    </div>

      <div className="menubar ">
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src="./images/menubtn.png" alt="menu" />
        </button>
      </div>
      

    </div>
    </>

    
  )
}

export default Header
