import { comments,Coment } from "./lib/mockup_comments";

interface Restaurant {
  id: string;
  name: string;
  image: string;
  description: string;
  address: string;
  score: number;
  ratings: number;
}


const api = {
  listbd: async ():Promise<Restaurant[]> =>{
    const response=await fetch("http://localhost:3001/restaurants/")
    if(!response.ok){
      throw new Error(`Error status: ${response.status}`)
    }
    const rest=await response.json()
    return rest
  },

  fetch_coments:async (rest_id:string): Promise<Coment[]> =>{
    const result=comments.filter(com=>{return com.id===rest_id})
        return result
  }, 

  bd_id: async(id: Restaurant["id"]): Promise<Restaurant> =>{
    try {
      const rest_list=await api.listbd()
      const result=rest_list.find(rest=>rest.id==id)
      if(!result){throw new Error(`El restaurante con el id=${id} no se encuentra en la bd`)}
      return result
    } catch (error ) {
      throw new Error(`Problemas al acceder a la api restaurant \n Error ${error}`)
    }
  }

}


export default api;
