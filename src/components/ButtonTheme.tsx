"use client"

import dynamic from "next/dynamic"

export function ButtonTheme(){
const handleclick=()=>{document.documentElement.classList.toggle("dark")
window?.localStorage.getItem("class")==="dark"? window?.localStorage.setItem("class","light"):window.localStorage.setItem("class","dark")

console.log(document.documentElement.classList)
}

return <button 
onClick={handleclick} 
className="  bg-black dark:bg-white rounded-full z-50 w-5 h-5" ></button>
}

export  const DynamicButtonTheme=dynamic(async()=>ButtonTheme,{ssr:false})