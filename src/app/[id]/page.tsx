import api from "@/api"
import RestaurantCard from "@/components/RestaurantCard"
import { title } from "process"

/* export async function generateStaticParams(){
    const restaurants = await api.list()
    const ids=restaurants.map(restaurant=>{restaurant.id})
    return ids
} */

//Arreglar el componente RestaurantCard

export default async function RestId({params:{id}}:{params:{id:string}}){
    const rest=await api.fetch(id)
  
    return(
        <>
        <RestaurantCard rest={rest}/>
        {/* <section className="w-full flex flex-col  h-screen place-items-center" >
            
            <h1 className="text-5xl m-8">{rest.name}</h1>
            <div className="w-[480px] h-[300px] opacity-75 bg-gradient-to-br from-slate-700 to-slate-500  m-2  " ><img src={rest.image} alt="" className="w-full"/></div>
            <p>{rest.description}</p>
            <div className="flex place-items-start gap-5 ">
                <small>{rest.address}</small><span>⭐{rest.score}</span><span>{rest.ratings}</span>
            </div>
        </section> */} 
         </>
        

        
    )
}

export async function generateMetadata({params:{id}}:{params:{id:string}}){
    const restaurant= await api.fetch(id)
    return{
        title:`${restaurant.name} - Restaurancy`,
        description:`${restaurant.description}`,

};
}