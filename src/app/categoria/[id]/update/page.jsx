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
    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(newCategoria);

        const res = await fetch(`/api/categoria/${params.id}`,{
            method:'PUT',
            body:JSON.stringify(newCategoria)
        })

        const data = await res.json();
        console.log(data);
        router.push('/categoria');
        router.refresh();
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
    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setNewCategoria({...newCategoria,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setNewCategoria({...newCategoria,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        getCategoria()
    },[])

return(
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

        <form onSubmit={handlerSubmit}>
        <input type="text" name="nombre" placeholder="Ingrese nombre de categoria"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newCategoria.nombre}/>

        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Actualizar Categoria</button>
    </form>
    </div>
    
)
}
export default HomePage