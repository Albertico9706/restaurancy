

import api from "@/api"
import RestaurantCard from "@/components/RestaurantCard"
import SingleComent from "@/components/SingleComent";
import React,{ useEffect, useState } from "react";
import CommentsContainer from "@/components/CommentsContainer";





export default async function RestDetail({params:{id}}:{params:{id:string}}){
    const rest=await api.fetch(id)
    const coments=await api.fetch_coments(id)
  
    return (
        <div className="h-screen">
                <RestaurantCard rest={rest}/>
                <div 
                className='flex flex-col mt-52 gap-20 p-8 bg-gray-500 
                rounded-md max-w-screen-md self-center place-self-center m-auto'>
                <CommentsContainer rest_id={rest.id} />
                </div>
                
            </div>  
    )
}

/*export async function generateMetadata({params:{id}}:{params:{id:string}}){
    const restaurant= await api.fetch(id)
    return{
        title:`${restaurant.name} - Restaurancy`,
        description:`${restaurant.description}`,
    }

};*/