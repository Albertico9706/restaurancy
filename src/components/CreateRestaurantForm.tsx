"use client"

import CreateButton from "./buttons/CreateButton"

export default function CreateRestaurantForm(){
   /*  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.currentTarget.preventDefault()
        console.log(e)
    } */

   /*  const actionForm=async (formData:FormData)=>{
        "use server"
        const content=formData.entries()
        console.log(content)
    } */

   
    
    return(
    <form className="flex flex-col gap-8 p-8 border-2 border-orange-400 rounded-lg " method="POST" action={"http://localhost:3001/test"} /* action={actionForm} */>
        <legend className="text-xl font-semibold">Nuevo Restaurant</legend>
        <div className="grid gap-4 grid-cols-[1fr_3fr]">
            <label htmlFor="">Nombre</label><input name="name" id="name" type="text" />
            <label htmlFor="">Direccion</label><input name="address" id="address" type="text" />
            <label htmlFor="">Image</label><input name="image" id="image" type="text" />
            <label htmlFor="">Ratings</label><input name="ratings" id="ratings" type="text" />
            <label htmlFor="">Score</label><input name="score" id="score" type="text" />
            <label htmlFor="">Description</label><input name="description" id="description" type="text" />
            <CreateButton />
        </div>
    </form>)
}