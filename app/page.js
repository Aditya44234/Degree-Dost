"use client"

import React, {Component, useState} from 'react'
import Link from 'next/link'
import Form from '@/Components/Welcome'
import Features from '@/Components/Features'
import Notices from '@/Components/Notices'
import ShareKnow from '@/Components/ShareKnow'
import NewsLetter from '@/Components/NewsLetter'


const page=()=>{

  return (

    <div>


     {/* Input form section */}
     <Form/>

     {/* Features  Section*/}
     <Features/>

     {/* Notice Board Section */}
     <Notices/>

     {/* Share Knowledge Section */}
     <ShareKnow/>

     {/* Newsletter Section */}
     {/* <NewsLetter/> */}



    </div>




  ) 
}

export default page
