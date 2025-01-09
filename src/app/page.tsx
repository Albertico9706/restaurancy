import api from "@/api"
import { Metadata } from "next"
import RestaurantCard from "@/components/cards/RestaurantCard"
import MainRestaurantCard from "@/components/cards/MainRestaurantCard"
import Hero from "@/components/Hero"

export default async  function Restaurancy(){
    
    const restaurants= await api.listbd()
    return (
        <div className=" grid   h-9/10 dark:text-orange-200 gap-10 ">
            <Hero />
            <section className="grid  gap-4 m-12">
                <div className="grid grid-cols-[repeat(auto-fill,minmax(360px,360px))] justify-center gap-8 " >
                {restaurants?.map((rest)=>{ return <MainRestaurantCard key={rest.id}><RestaurantCard rest={rest} key={rest.id}/></MainRestaurantCard> })}
                </div>
            </section>
        </div>)
}
export const metadata:Metadata={
    title:"Restaurancy -Nextjs",
    description:"Curso de sobre ls fundamentos de Nextjs de Gonzalo Pozo",
    keywords:["restaurant","food","goncy","nextjs"]
}