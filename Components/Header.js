import React from 'react'

const Header = (props) => {
  return (
    <div className=' font-mono p-5 mt-0 flex justify-around gap-9 font-bold bg-amber-300 shadow-blue-600 '>
        <h1 className='text-3xl'><a href="">{props.user}</a></h1>

        <div className="navbar flex items-center justify-around gap-3.5 text-1.5xl">
        <a href="">About</a>
        <a href="">Help</a>
        <a href="">More</a>
        <a href="">Contact</a>
        </div>

    </div>
  )
}

export default Header
