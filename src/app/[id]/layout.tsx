import Link from "next/link";

export default function Layout({children}:{children:React.ReactNode}){
    return(
        <>
            <Link href="./" className="text-blue-600 border-b border-blue-600 dark:text-orange-600 dark:border-orange-600 absolute top-[5%] left-[5%]">Volver al Catalogo</Link>
            <div className="">
                {children}
            </div>
        </>
    )
}

