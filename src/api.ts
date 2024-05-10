
import { list } from "./api_functions/list";
import {fetch_c} from "./fetchComments";
import sheet_url from "./lib/urls_sheets";
interface Restaurant {
  id: string;
  name: string;
  image: string;
  description: string;
  address: string;
  score: number;
  ratings: number;
}






const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));



const api = {
  /* list: async (): Promise<Restaurant[]> => {
    await sleep(750);

    return restaurants;
  } */
  list: async (): Promise<Restaurant[]> => {
    // Obtenemos la información de Google Sheets en formato texto y la dividimos por líneas, nos saltamos la primera línea porque es el encabezado
    const [, ...data] = await fetch(`${sheet_url}`).then(res => res.text()).then(text => text.split('\n'))

    // Convertimos cada línea en un objeto Restaurant, asegúrate de que los campos no posean `,`
    const restaurants: Restaurant[] = data.map((row) => {
      
      const [id, name, description, address, score, ratings, image] = row.split(',')
      
      return {
        id:id.substring(1),
        name,
        description,
        address,
        score: Number(score),
        ratings: Number(ratings),
        image
      }
    })

    // Lo retornamos
    return restaurants;
  },
  
  fetch: async (id: Restaurant["id"]): Promise<Restaurant> => {
    /* await sleep(750);
    
    const restaurant = restaurants.find((restaurant) => restaurant.id === id); */
    const [, ...data] = await fetch(`${sheet_url}`).then(res => res.text()).then(text => text.split('\n'))

    const rowrest =data.find(row=>row.split(",")[0].substring(1)==id)
      
    
    

    const stringrow=String(rowrest)

    const [thisid, name, description, address, score, ratings, image] = stringrow.split(',')
    
    
    

    const restaurant:Restaurant={
      id:thisid.substring(1),
      name:name,
      description:description,
      address:address,
      score:Number(score),
      ratings:Number(ratings),
      image,
    }
    

    if (!restaurant) {
      throw new Error(`Restaurant with id ${id} not found`);
    }
    
    return restaurant;
  },

  search: async (query: string): Promise<Restaurant[]> => {
    const restlist=await api.list()
    const results = await api.list().then((restaurants) =>{
      return restaurants.filter((restaurant) =>restaurant.name.toLowerCase().includes(query.toLowerCase())
      )}).catch((error)=>{
        const results = restlist

        return restlist
      })
    
    return results;
  },

  fetch_coments:fetch_c

}


export default api;
