"use client"

import { useState } from "react"

export default function ButtonComent(){
    console.log("mounted")
const [active,setActive]=useState(false)
const handleClick=(e)=>{
    console.log("hand")
    console.log(typeof(e))
    setActive(!active)

}
const text=active? "Hide":"Show"  
    return <button className="rounded bg-orange-500 p-1" onClick={handleClick}> {text}</button>
}