

import {rest_data} from './data_restaurants'
import ButtonPanel from './ButtonPanel'
import JsonPanel from "@/components/JsonPanel"

import { Metadata } from 'next'

export default  function Admin(){
   
    
            
    
    return (<div className="mt-24 mx-8 flex flex-col place-items-center gap-8">
            <ButtonPanel/>
            <div className='flex gap-x-6'>
                <div className=' flex flex-col flex-1'>
                    <h2>Datos del Archivo</h2>
                    <JsonPanel data_json={rest_data}/>
                </div>
                <div className=' flex flex-col flex-1'>
                    <h2>Datos de la Base de datos</h2>
                    {/*<DataDb/>*/}
                </div>
            </div>
            
        </div>
    )

    

}

export const metadata:Metadata={
    title:"Restaurancy -Nextjs Panel de Administracion",
    description:"Curso de sobre ls fundamentos de Nextjs de Gonzalo Pozo",

}