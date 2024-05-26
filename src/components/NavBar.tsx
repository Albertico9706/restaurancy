import { ButtonTheme } from '@/components/ButtonTheme'
import Link from 'next/link'


export default function NavBar(){
    return(
        <nav className="flex justify-between p-4 bg-orange-600/40 fixed top-0 left-0 right-0 z-40 bg-slate-600 border-b-2 border-orange-600 
         pe-16 ">
            <Link href="./" className='text-3xl text-orange-500  font-weight-700'>Restaurancy</Link>

            <ul className="flex place-items-center gap-4">
                {/*Insertar un icono para ver solo los restaurantes favoritos */}
                <li className="hover:bg-orange-500 rounded-xl p-1 text-orange-500 ">Fav</li>
                <ButtonTheme />
            </ul>

            

        </nav>
    )
}