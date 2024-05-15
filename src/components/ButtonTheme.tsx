"use client"

import dynamic from "next/dynamic"

export function ButtonTheme(){
const handleclick=()=>{document.documentElement.classList.toggle("dark")
window?.localStorage.getItem("class")==="dark"? window?.localStorage.setItem("class","light"):window.localStorage.setItem("class","dark")

console.log(document.documentElement.classList)
}

return <button 
onClick={handleclick} 
className="w-5 h-5 absolute top-5 right-5 bg-black dark:bg-white rounded-full z-10" ></button>
}

export  const DynamicButtonTheme=dynamic(async()=>ButtonTheme,{ssr:false})