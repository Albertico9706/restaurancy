import { ButtonTheme } from '@/components/ButtonTheme'


export default function NavBar(){
    return(
        <nav className="flex justify-between p-4 bg-orange-600/40 fixed top-0 left-0 right-0 z-40 bg-slate-600 border-b-2 border-orange-600 
         pe-16 ">
            <a href="#" className='text-3xl text-orange-500  font-weight-700'>Restaurancy</a>

            <ul className="flex gap-2">
                
                <li className="hover:bg-orange-500 rounded-xl p-1">Ver Favoritos</li>
            </ul>
            <ButtonTheme />

        </nav>
    )
}