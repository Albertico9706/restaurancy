
import { Coment,comments } from "./lib/mockup_comments";

export default async function fetch_coment(rest_id:string):Promise<Coment|null>{
const result=comments.find(com=>{return com.id===rest_id})
if(result){
    return result
}else{
    return null
}

    
    
}