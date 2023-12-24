import Link from "next/link";
import { useParams } from "next/navigation";
import { ReactNode } from "react";
import { imageConfigDefault } from "../../node_modules/next/dist/shared/lib/image-config";

export default function NavLinks({children, link}:{children:string, link:NavLink}){
    
return (
    
    <Link  href={link.href}>
       {link.ico && <img src="link.ico"></img>} {children}
    </Link>
    )

}

export type NavLink ={
    ico?: string
    href: string
}

/* export function createNavLink(href:string, ico:string=undefined):NavLink{
    return {href,ico}
} */
