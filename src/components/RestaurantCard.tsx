

import Link from "../../node_modules/next/link"
import { Restaurant } from "@/types"
import FooterCard from "./FooterCard"

//TODO: Modificar este componente para que pueda ser utilizado tambien en los detalles id



export default async function RestaurantCard({rest}:{rest:Restaurant}){
    
    return (
       <article className="grid gap-8 max-h-screen  place-items-center h-full pt-14 dark:text-orange-200" key={rest.id}>
            <Link className="" href={`/${rest.id}`}>
                <h2 className="text-3xl border-b border-b-transparent group-hover:text-blue-700  group-hover:border-b-blue-700 dark:group-hover:text-orange-500  dark:group-hover:border-b-orange-500 transition-all">{rest.name}</h2>
            </Link>
            <div className="grid min-h-[160px]  h-[30%] bg-violet-800 bg-opacity-5 justify-self-center place-content-center aspect-auto[16/10]" >
                <img className="h-full transition-all " src={rest.image} alt="Imagen del Restaurant" />
            </div>
            <p className="opacity-90">{rest.description}</p>
            <FooterCard rest={rest}/> 
            
        </article>)
}

//<Suspense fallback={<div>Skeleton Favorite</div>}><DinamicFavoriteButton rest={rest}/></Suspense>
//<DinamicFavoriteButton rest={rest}/>