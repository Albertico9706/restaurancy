"use client"

import { Coment } from "../../lib/mockup_comments"
import { useState } from "react"
import SingleComent from "../comments/SingleComent"


type Props={
    rest_reviews:Coment[]
}
export default function ButtonToggleSee ({rest_reviews}:Props){
    const [see,setSee]=useState(false)
    const [chargeC,setChargeC]=useState(false)
    const handleClick=()=>{
        if(chargeC==false){ setChargeC(true)}
        setSee(!see)}
    return(
    <>
        <button onClick={handleClick} className="self-end  rounded-md bg-orange-500  p-2 ">Show coments </button>
                <div  id={"reviews"}
                    className={` flex flex-col gap-4 transition-all duration-500 ease-in-out    ${see? 'opacity-100 transition: -translate-y-2':'opacity-0 transition: translate-y-2'} `}>
                    {rest_reviews&& rest_reviews.map((review)=><SingleComent key={review.id} com={review} />)}
                </div>    
    </>)
}