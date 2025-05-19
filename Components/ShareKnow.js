"use client"

import React from 'react'
import Link from 'next/link'


const ShareKnow = () => {
  return (
    <div id='Hero-4'>

        <h1 className='text-3xl font-bold'>Share Your Knowledge</h1>
        <h1 >Help your fellow students by contributing your notes, question papers, and study materials.</h1>
        <Link href="https://forms.gle/RaSZu4xDWkYdX8CX8">
        <button id='KnowBtn'>Submit Content</button>      
        </Link>
    </div>
  )
}

export default ShareKnow

