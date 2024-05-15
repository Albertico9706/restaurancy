import type { Metadata } from 'next'
import './globals.css' 
import NavBar from '@/components/NavBar'
import Script from 'next/script'
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
     

    <Script id="1" strategy='afterInteractive'  >
      { `
      if(typeof window !== "undefined"){
        try{
          window.localStorage.getItem("class")==="dark"? document.documentElement.classList.add("dark"): null
        }catch(e){
        console.warn(e.message)
        /*console.warn(window.localStorage.getItem("class"))*/}
      }
       `
      }
    </Script >

    <body className=" px-[5%]  min-h-screen  bg-slate-200 dark:bg-slate-900">
      <NavBar/>
      {children}
    </body>
    
    </html>
  )
}
