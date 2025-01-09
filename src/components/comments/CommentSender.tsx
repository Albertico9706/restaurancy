"use client"

import { useState } from "react"
import React from "react"

export default function CommentSender(){

    const [comment, setComment]=useState("")

    const comentAction=async(formData:FormData)=>{
       /*  "use server"
        formData.get("your_comment") */
        console.log(formData)
    }

const handleChange=(event:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setComment(event.target.value)
    const newPathname=event.target.value
    window.history.replaceState({},"",newPathname)
}


    return(
 
        <form className="flex  " action={comentAction}>
            <textarea  onChange={handleChange} className="pl-8 rounded-3xl"  name="your_comment" 

                id="your_comment" placeholder={comment}  >
            </textarea>
            <button className="background: bg-red-700 rounded-full  w-8 h-8 translate-x-4 translate-y-2 "    
            name="send_comment_button">S</button>
        </form>
    )
}
//estilos para usar el boton dentro de los comentarios
//"background: bg-red-700 rounded-full -translate-x-10 w-8 h-8 translate-y-1" 

