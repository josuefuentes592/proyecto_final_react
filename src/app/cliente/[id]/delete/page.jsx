"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newCliente,setNewCliente]=useState({
        nombre:"",
        apellido:"",
        ci:""
    });

    const router = useRouter();
    //const params = useParams();

    const getCliente = async ()=>{
        const res = await fetch(`/api/cliente/${params.id}`);
        const {clientes} = await res.json();
        console.log(clientes);
        setNewCliente({
            nombre:clientes.nombre,
            apellido:clientes.apellido,
            ci:clientes.ci
        })
    }
    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar el cliente ${newCliente.nombre}`)){
            try {
                const res=await fetch(`/api/cliente/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/cliente');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }



    useEffect(()=>{
        getCliente()
    },[])

return(
    <div>
        <h1>{params.id}</h1>
            <h1>Eliminar: {newCliente.nombre}</h1>
            <button type="button" className="bg-red-500 px-3 py-1 rounded-md" 
                onClick={handleDelete}>
                    Eliminar Cliente
            </button>
    </div>
)
}
export default HomePage