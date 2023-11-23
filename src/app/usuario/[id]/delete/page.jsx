"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newUsuario,setNewUsuario]=useState({
        nombre:"",
        apellido:"",
        imagen:"",
        correo:"",
        contrasena:""

    });

    const router = useRouter();
    //const params = useParams();

    const getUsuario = async ()=>{
        const res = await fetch(`/api/usuario/${params.id}`);
        const {usuarios} = await res.json();
        console.log(usuarios);
        setNewUsuario({
            nombre:usuarios.nombre,
            apellido:usuarios.apellido,
            imagen:usuarios.imagen,
            correo:usuarios.correo,
            contrasena:usuarios.contrasena
        })
    }
    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar el usuario ${newUsuario.nombre}`)){
            try {
                const res=await fetch(`/api/usuario/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/usuario');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }



    useEffect(()=>{
        getUsuario()
    },[])

return(
    <div>
        <h1>{params.id}</h1>
            <h1>Eliminar: {newUsuario.nombre}</h1>
            <button type="button" className="bg-red-500 px-3 py-1 rounded-md" 
                onClick={handleDelete}>
                    Eliminar Usuario
            </button>
    </div>
)
}
export default HomePage