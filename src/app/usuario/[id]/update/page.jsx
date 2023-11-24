"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newUsuario,setNewUsuario]=useState({
        nombre:"",
        apellido:"",
        imagen:"",
        correo:"",
        contrasena:"",
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

<div className=" items-center justify-center h-screen mt-8">
    <form class="max-w-sm mx-auto" onSubmit={handlerSubmit}>
      <h5 id="drawer-label" class="inline-flex items-center mb-6 text-sm font-semibold 
       text-gray-500 uppercase dark:text-gray-400">Nuevo Usuario</h5>
    <div class="mb-5">
      <label for="text" class="block mb-2 text-sm font-medium 
      text-gray-900 dark:text-white">Nombre</label>
      <input type="text" name="nombre" className="w-full px-3 py-2 border border-gray-300 
       rounded-md" placeholder="Bladimir" onChange={handlerChange} value={newUsuario.nombre}/>
    </div>
  
    <div class="mb-5">
      <label for="text" class="block mb-2 text-sm font-medium 
      text-gray-900 dark:text-white">Apellido</label>
      <input type="text" name="apellido" className="w-full px-3 py-2 border border-gray-300 
      rounded-md" placeholder="Putin" onChange={handlerChange} value={newUsuario.apellido}/>
    </div>

    <div class="mb-5">
      <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subir archivo</label>
      <input type="file" name="imagen" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer 
      bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 
      dark:placeholder-gray-400" placeholder="seleccione una imagen" onChange={handlerChange} />
    </div>

    <div class="mb-5">
      <label for="text" class="block mb-2 text-sm font-medium 
      text-gray-900 dark:text-white">Correo</label>
      <input type="text" name="correo" className="w-full px-3 py-2 border border-gray-300 
      rounded-md" placeholder="putin@gmail.com" onChange={handlerChange} value={newUsuario.correo}/>
    </div>

    <div class="mb-5">
      <label for="text" class="block mb-2 text-sm font-medium 
      text-gray-900 dark:text-white">Contraseña</label>
      <input type="text" name="contrasena" className="w-full px-3 py-2 border border-gray-300 
      rounded-md" placeholder="123" onChange={handlerChange} value={newUsuario.contrasena} />
    </div>
  
     <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
      focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
      dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrar Usuario</button>
     </form>

     <div className="flex justify-center mt-8 ">
             <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-base h-10">
                   <li>
                       <a href="/usuario" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                       Atras
                       </a>
                  </li>
                   <li>
                       <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Siguiente </a>
                  </li>
               </ul>
              </nav>
             </div>


    </div>
    
)
}
export default HomePage