"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

export function ButtonTheme(){
const handleclick=()=>{document.documentElement.classList.toggle("dark")
    const mode=dark? "light":"dark"
    window?.localStorage.setItem("class",mode)
    setDark(!dark)
}
console.log("ButtonTheme")

const [dark,setDark]=useState(window?.localStorage.getItem("class")==="dark")
const ico_url=dark? "dark_mode.svg" :"light_mode.svg"

return <button 
onClick={handleclick} 
className="text-white rounded-full z-50 w-5 h-5" ><img src={ico_url} alt="" /></button>
}

export  const DynamicButtonTheme=dynamic(async()=>ButtonTheme,{ssr:false})