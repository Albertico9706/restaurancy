import { comments, Coment } from "@/lib/mockup_comments";
import SingleComent from "./SingleComent";

export default function ComentsList(){


    return (
        <div>
            {comments.map((com)=><SingleComent com={com} />)}
        </div>
    )
        
    
}