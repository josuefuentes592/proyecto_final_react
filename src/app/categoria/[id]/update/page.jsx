"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newCategoria,setNewCategoria]=useState({
        nombre:"",
        descripcion:"",
        fecha_creacion:""
    });

    const router = useRouter();
    //const params = useParams();

    const getCategoria = async ()=>{
        const res = await fetch(`/api/categoria/${params.id}`);
        const {categorias} = await res.json();
        console.log(categorias);
        setNewCategoria({
            nombre:categorias.nombre,
            descripcion:categorias.descripcion,
            fecha_creacion:categorias.fecha_creacion
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
        if(window.confirm(`Esta seguro de eliminar el categoria ${newCategoria.nombre}`)){
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

<div className=" items-center justify-center h-screen mt-8">
    <form class="max-w-sm mx-auto" onSubmit={handlerSubmit}>
      <h5 id="drawer-label" class="inline-flex items-center mb-6 text-sm font-semibold 
       text-gray-500 uppercase dark:text-gray-400">Actualizar Categoria</h5>
    <div class="mb-5">
      <label for="text" class="block mb-2 text-sm font-medium 
      text-gray-900 dark:text-white">Nombre de categoria</label>
      <input type="text" name="nombre" className="w-full px-3 py-2 border border-gray-300 
       rounded-md" placeholder="Telefonos" onChange={handlerChange} value={newCategoria.nombre}/>
    </div>

    <div class="mb-5">
         <label for="message" class="block mb-2 text-sm font-medium 
         text-gray-900 dark:text-white">Fecha de creacion</label>
        <input type="date" name="fecha_creacion" placeholder="Fecha de creacion"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg 
            rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newCategoria.fecha_creacion}/>
    </div>
  
    <div class="mb-5">
        <label for="message" class="block mb-2 text-sm font-medium 
         text-gray-900 dark:text-white">Tu Descripcion</label>
        <textarea name="descripcion" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
        border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
       placeholder="Deja un comentario..." onChange={handlerChange} value={newCategoria.descripcion} ></textarea>
    </div>
  
     <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
      focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
      dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Actualizar Categoria</button>
     </form>

     <div className="flex justify-center mt-8 ">
             <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-base h-10">
                   <li>
                       <a href="/categoria" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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