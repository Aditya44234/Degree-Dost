"use client"

import React, {Component, useState} from 'react'
import Header from "@/Components/Header"


const page=()=>{

  const [user,setUser]=useState("Aditya")
  
  return (
    <>
    <Header user={user}/>
    {/* {user} */}

   

    </>
  ) 
}

export default page
