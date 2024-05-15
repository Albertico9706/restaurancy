"use client"

import ComentsList from "./ComentsList"
import { useState } from "react"

export default function CommentsContainer({rest_id}:{rest_id:string}){
    const [see,setSee]=useState(false)
    const handleClick=()=>{
        
        setSee(!see)}
    
    return (<section>
                <button onClick={handleClick}>Show coments </button>
                <div className={`min-h-40 bg-red-500 transition-all duration-700 ease-in-out ${see? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-90 max-h-40'}`}>
                {see &&<ComentsList />}
                </div>
            </section>
    )
}