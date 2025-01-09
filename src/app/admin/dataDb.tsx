import api from "@/api"
import JsonPanel from "@/components/JsonPanel"



export default async function DataDb(){   
    const bd_rest=await api.listbd()
return(<JsonPanel data_json={bd_rest}/>)
}