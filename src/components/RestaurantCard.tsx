
import { Suspense } from "react"
import Link from "../../node_modules/next/link"
import { Restaurant } from "@/types"
import { DinamicFavoriteButton } from "./DinamicFavoriteButton"

//TODO: Modificar este componente para que pueda ser utilizado tambien en los detalles id



export default function RestaurantCard({rest}:{rest:Restaurant}){
    
    return (
       
       <article className="grid gap-8  justify-items-center place-items-center h-full pt-14 dark:text-orange-200" key={rest.id}>
               
            <Link className="" href={`/${rest.id}`}>
                <h2 className="text-3xl border-b border-b-transparent group-hover:text-blue-700  group-hover:border-b-blue-700 dark:group-hover:text-orange-500  dark:group-hover:border-b-orange-500 transition-all">{rest.name}</h2>
            </Link>
            <div className="grid  h-40 bg-violet-800 bg-opacity-5 justify-self-center place-content-center" >
                <img className="h-full transition-all " src={rest.image} alt="Imagen del Restaurant" />
            </div>
            <p className="opacity-90">{rest.description}</p>
            <div className="inline-flex gap-4 place-items-center border-t border-t-black dark:border-t-blue-50 ">
                <small className="opacity-70">{rest.address}</small>
                <div>
                <span>⭐</span>
                <span>{rest.score}</span>
                </div>
                <span>{rest.ratings}</span>
                <Suspense fallback={<div className="w-4 h-4 bg-red-600"></div>}><DinamicFavoriteButton rest={rest}/></Suspense>
                
                
            </div>
               
           </article>)
}

//<Suspense fallback={<div>Skeleton Favorite</div>}><DinamicFavoriteButton rest={rest}/></Suspense>
//<DinamicFavoriteButton rest={rest}/>