"use client"
import { comments, Coment } from "@/lib/mockup_comments";
import { useEffect, useState } from "react"
import SingleComent from "./SingleComent";
import { useRouter } from "next/navigation";


export default function CommentsContainer({rest_id}:{rest_id:string}){
    const [see,setSee]=useState(false)
    const router=useRouter()
    const handleClick=()=>{setSee(!see)}

    useEffect(()=>{
        if(see){
            router.push("#reviews")
        }else{
            
        }
    },[see])
    const rest_reviews=comments.filter(com=>com.id===rest_id)
        
    return (<section  className={`flex flex-col  container ${see? "gap-8":""}`}>
                <button onClick={handleClick} className="self-end  rounded-md bg-orange-600 p-2 " >Show coments </button>
                <div  id={"reviews"}className={`flex flex-col  bg-red-500 transition-all duration-700 ease-in-out ${see? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-90 '}`}>
                {see &&rest_reviews.map((review)=><SingleComent key={review.id} com={review} />)}
                </div>
            </section>
    )
}