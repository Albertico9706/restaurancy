interface Restaurant {
    id: string;
    name: string;
    image: string;
    description: string;
    address: string;
    score: number;
    ratings: number;
  }
export  const list =async (sheet_url:string): Promise<Restaurant[]> => {
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
  }