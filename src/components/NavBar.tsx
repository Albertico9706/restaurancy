import { ButtonTheme } from '@/components/ButtonTheme'


export default function NavBar(){
    return(
        <nav className="flex justify-between p-4 bg-orange-600/40 fixed top-0 left-0 right-0 z-40
        rounded-b-lg pe-16 ">
            <a href="#">Restaurancy</a>

            <ul className="flex gap-2">
                
                <li className="hover:bg-orange-500 rounded-xl p-1">Ver Favoritos</li>
            </ul>
            <ButtonTheme />

        </nav>
    )
}