"use client"

import React, { useEffect, useState } from 'react';
import api from "@/api";
import {comments, type Coment}  from '@/lib/mockup_comments';
const defaultComent :Coment={
  comentario:"Nuevo comentario por defecto",
  author: "Alberto",
  id:"1",
  valoracion:"5"
}

export default function Coments({searchParams:{rest_id}}:{searchParams:{rest_id:string}}) {
  console.log(rest_id)
  const [coments , setComents] = useState<Coment[]>([defaultComent]);
  useEffect(() => {
    
    const fetch_results= async()  =>{
      const results=await api.fetch_coment(rest_id);
      setComents(results)
      console.log(results)}
      
      fetch_results()
      

    }, [rest_id]); // Dependencia en rest_id para que se ejecute cada vez que cambie

 return (
    <div>
      {coments? coments.map(coment=><h1>{coment.author}</h1>): "Loading"}
    </div>
 );
}
