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
    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(newUsuario);

        const res = await fetch(`/api/usuario/${params.id}`,{
            method:'PUT',
            body:JSON.stringify(newUsuario)
        })

        const data = await res.json();
        console.log(data);
        router.push('/usuario');
        router.refresh();
    }

    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar la usuario ${newUsuario.nombre}`)){
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
    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setNewUsuario({...newUsuario,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setNewUsuario({...newUsuario,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        getUsuario()
    },[])

return(
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

        <form onSubmit={handlerSubmit}>
        <input type="text" name="nombre" placeholder="Ingrese nombre del usuario"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newUsuario.nombre}/>

        <input type="text" name="apellido" placeholder="Ingrese apellido del usuario"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newUsuario.apellido}/>

        <input type="file" name="imagen" placeholder="seleccione una imagen"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg  w-full  p-4  my-1"
        onChange={handlerChange} />

        <input type="text" name="correo" placeholder="Ingrese su correo "
        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg  w-full  p-4  my-1"
        onChange={handlerChange} value={newUsuario.correo}/>

        <input type="text" name="contrasena" placeholder="Ingrese su Contraseña "
        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg  w-full  p-4  my-1"
        onChange={handlerChange} value={newUsuario.contrasena}/>

        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Actualizar Usuario</button>
    </form>
    </div>
    
)
}
export default HomePage