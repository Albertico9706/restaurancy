import React, { useEffect, useState } from 'react';
import api from "@/api";

interface Comment {
 author: string;
 // Agrega aquí otras propiedades que esperas recibir
}

export default function Coments({params:{rest_id}}:{params:{rest_id:string}}) {
 const [coments, setComents] = useState<Comment | null>(null);

 useEffect(() => {
    const fetchComents = async () => {
      const result = await api.fetch_coment(rest_id);
      setComents(result);
    };

    fetchComents();
 }, [rest_id]); // Dependencia en rest_id para que se ejecute cada vez que cambie

 return (
    <div>
      {coments && <h1>{coments.author}</h1>}
    </div>
 );
}
