import React from 'react'
import Link from 'next/link'




const page = () => {
  return (
    <div>

        <div id="hero-1">
          {/* Headings */}
          <h1 className='heading-1'>Welcome to Degree Dost</h1>
          <h3 className='heading-2'>Your one-stop destination for notes, question papers, and important updates.</h3>

          {/* Buttons */}
          <div className="btns">
            <Link href="/Notes">            
            <button  className= 'cursor-pointer text-purple-600 bg-white px-5 py-2 rounded-sm hover:bg-yellow-50'>Explore Notes</button>
            </Link>

            <Link href="/QuestionP">            
              <button id="btns" className='cursor-pointer px-5 py-2 rounded-sm'>Find Question Papers</button>
            </Link>

          </div>            
        </div>
    </div>
  )
}

export default page
