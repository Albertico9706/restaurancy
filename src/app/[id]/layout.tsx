import Link from "next/link";

export default function Layout({children}:{children:React.ReactNode}){
    return(
        <>
            <Link href="./" className="text-blue-600 border-b border-blue-600 absolute top-8">Volver al Catalogo</Link>
            {children}
        </>
    )
}

