
import { Coment,comments } from "./lib/mockup_comments";



export const fetch_c =async (rest_id:string): Promise<Coment[]> =>{
    const result=comments.filter(com=>{return com.id===rest_id})
    
        return result
    

} 