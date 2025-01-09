
import React from "react";

export default function Layout({children}:{children:React.ReactNode}){
    return(
        <>
            {/**<Link href="./" className="text-blue-600 border-b border-blue-600 dark:text-orange-600 dark:border-orange-600 fixed top-[15%] left-[5%] z-50">Volver al Catalogo</Link> */}
            
                {children}
            
        </>
    )
}

