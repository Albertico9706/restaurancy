export default function NavBar(){
    return(
        <nav className="flex justify-between p-4 bg-orange-600/40 fixed top-0 left-0 right-0 z-8
        rounded-b-lg pe-16 ">
            <a href="#">Restaurancy</a>

            <ul className="flex gap-2">
                <li>
                    <label htmlFor="ordselect">Ordenar por: </label>
                    <select aria-label="Ordenar por" name="ordselect">
                    <option value="rating">Rating</option>
                    <option value="#reservaciones">Cantidad de Reservaciones</option>
                    </select>
                </li>
                <li>Ver Favoritos</li>
            </ul>

        </nav>
    )
}