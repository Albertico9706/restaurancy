import type { Coment } from "@/lib/mockup_comments";

export default function SingleComent({com}:{com:Coment}){

    return(
        <div className="flex-col flex h-[fit-content] rounded-md p-2 m-auto gap-3  bg-orange-300 border border-black w-72 ">
            <span className="self-start">{com.author}</span>
            <p className="opacity-90 px-2">{com.comentario}</p>
            <span className="self-end">{com.valoracion}</span>
        </div>
    )
}