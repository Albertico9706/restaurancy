

import api from "@/api"
import RestaurantCard from "@/components/cards/RestaurantCard"
import CommentsContainer from "@/components/comments/CommentsContainer";





export default async function RestDetail({params:{id}}:{params:{id:string}}){
    const rest=await api.bd_id(id)
    const coments=await api.fetch_coments(id)
    console.log(coments)
  
    return (
        <div className="mt-24 mx-8">
                {rest&& <RestaurantCard rest={rest}/>}
                <div className='flex flex-col mt-4 p-2  
                rounded-md max-w-screen-md self-center place-self-center m-auto'>
                {rest&& <CommentsContainer rest_id={rest.id} />}
                </div>
            </div>  
    )
}

/* export async function generateStaticParams(){
    const list_rest=await api.listbd()
    return list_rest.map(rest=>rest.id)
} */

export async function generateMetadata({params:{id}}:{params:{id:string}}){
    const restaurant= await api.bd_id(id)
    return{
        title:`${restaurant.name} - Restaurancy`,
        description:`${restaurant.description}`,
    }

}