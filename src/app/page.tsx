/* ## Tareas

Nuestro cliente Goncy es un reconocido chef de la ciudad de Quil-Mez, Francia. 
Con uno de los paladares más finos, visita todos los restaurantes en sus cercanias para puntuar su comida y atención. 
Para eso, nos contrato a desarrollar Restaurancy, un catálogo de los mas finos restaurantes a sus alrededores. 
Nos dió plenas libertadres en el diseño y librerías a usar, pero nos pidió que usemos Next.js y el App Router por 
que su hermano gemelo Argentino (también llamado Goncy), le dijo que no estaba mal. 
Algunas de las tareas que Goncy dejo en nuestro tablero son:

- Crear una ruta principal que muestre un listado de restaurantes, incluyendo su foto, nombre, descripción, puntaje 
y cantidad de valoraciones.
- Crear una ruta personalizada para cada restaurante que muestre la misma información que la ruta principal.
- Poder navegar entre las rutas libremente clickeando enlaces.
- Configurar nuestra aplicación para que sea correctamente indexada por motores de búsqueda.
- Al compartir el enlace de un restaurante por redes sociales, la previsualización del enlace debe contener 
la información del restaurante.
- Usar Google Sheets como base de datos.
- Revalidar los datos de los restaurantes cada 24 horas.
- Crear un endpoint utilitario que permita revalidar rutas on-demand.
- Crear una caja de búsqueda en nuestra ruta principal para poder buscar restaurantes por nombre.
- Poder compartir en enlace de la búsqueda para que otros usuarios puedan acceder directamente a nuestra bùsqueda.
- Poder agregar y eliminar restaurantes de una lista de favoritos que se persiste en el dispositivo del usuario.

Opcionalmente también:
- Todas las páginas posibles deberían ser generadas de manera estática.
- En caso de acceder a una ruta no generada estáticamente deberíamos intentar renderizarla
- Mostrar estados de carga mientras obtenemos la información de rutas no generadas estáticamente.
- Mostrar una página de error si accedemos a una ruta erronea o hay un error en nuestra aplicación.

Goncy nos dijo que no tiene apuro para desarrollar esta aplicación así que puedes tomarte el tiempo que consideres 
necesario.

También nos dijo que te sientas libre de agregar las funcionalidades que consideres útiles para la aplicación y que 
seas todo lo creativo que quieras con el diseño. */

//Add the server action to the SearchBox component and separate this on other archive
/*import SearchBox from "@/components/SearchBox"*/ 
import api from "@/api"
import { Metadata } from "next"

import RestaurantCard from "@/components/RestaurantCard"
import MainRestaurantCard from "@/components/MainRestaurantCard"
import Hero from "@/components/Hero"
import ServerActionForm from "@/components/ServerActionForm"

export default async function Restaurancy({searchParams}:{searchParams:{q:string}}){
    
    const restaurants= await api.search(searchParams.q)
    
    

    return (
        <div className=" grid   h-9/10 dark:text-orange-200 gap-10 ">
            <Hero />
            <ServerActionForm sParams={searchParams.q} />
            {/* <SearchBox/> */}
            <section className="grid  gap-4 m-12">
                <div className="grid grid-cols-[repeat(auto-fill,minmax(360px,360px))] justify-center gap-8 " >
                {restaurants.map((rest)=>{ return <MainRestaurantCard key={rest.id}><RestaurantCard rest={rest} key={rest.id}/></MainRestaurantCard> })}
                </div>
            </section>
    
        </div>)
}

export const metadata:Metadata={
    title:"Restaurancy -Nextjs",
    description:"Curso de sobre ls fundamentos de Nextjs de Gonzalo Pozo",
    keywords:["restaurant","food","goncy","nextjs"],

}