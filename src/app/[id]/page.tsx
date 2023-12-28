import api from "@/api"
import RestaurantCard from "@/components/RestaurantCard"
import { title } from "process"

/* export async function generateStaticParams(){
    const restaurants = await api.list()
    const ids=restaurants.map(restaurant=>{restaurant.id})
    return ids
} */



export default async function RestId({params:{id}}:{params:{id:string}}){
    const rest=await api.fetch(id)
  
    return <div className="h-screen"><RestaurantCard rest={rest}/></div>  
}

export async function generateMetadata({params:{id}}:{params:{id:string}}){
    const restaurant= await api.fetch(id)
    return{
        title:`${restaurant.name} - Restaurancy`,
        description:`${restaurant.description}`,

};
}