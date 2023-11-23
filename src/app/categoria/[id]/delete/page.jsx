"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newCategoria,setNewCategoria]=useState({
        nombre:""
    });

    const router = useRouter();
    //const params = useParams();

    const getCategoria = async ()=>{
        const res = await fetch(`/api/categoria/${params.id}`);
        const {categorias} = await res.json();
        console.log(categorias);
        setNewCategoria({
            nombre:categorias.nombre
        })
    }
    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar la categoria ${newCategoria.nombre}`)){
            try {
                const res=await fetch(`/api/categoria/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/categoria');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }



    useEffect(()=>{
        getCategoria()
    },[])

return(
    <div>
        <h1>{params.id}</h1>
            <h1>Eliminar: {newCategoria.nombre}</h1>
            <button type="button" className="bg-red-500 px-3 py-1 rounded-md" 
                onClick={handleDelete}>
                    Eliminar Categoria
            </button>
    </div>
)
}
export default HomePage