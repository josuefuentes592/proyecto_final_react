"use client"
import { useEffect, useState } from "react";
import { useRouter,useParams } from "next/navigation";

function page() {
    const [producto,setProducto] = useState(
        {
            nombre:"",
            precio:""
        }
    );

    const router = useRouter();
    const params = useParams();

    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(producto);

        const res = await fetch('/api/producto',{
            method:'POST',
            body:JSON.stringify(producto)
        })

        const data = await res.json();
        console.log(data);
        router.push('/producto');
        router.refresh();
    }
    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setProducto({...producto,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        console.log(e.target.value)
        setProducto({...producto,[e.target.name]:e.target.value})
    }

  return (
    <div className=" items-center justify-center h-screen mt-8">
    <form class="max-w-sm mx-auto" onSubmit={handlerSubmit}>
      <h5 id="drawer-label" class="inline-flex items-center mb-6 text-sm font-semibold 
       text-gray-500 uppercase dark:text-gray-400">Nuevo Producto</h5>
    <div class="mb-5">
      <label for="text" class="block mb-2 text-sm font-medium 
      text-gray-900 dark:text-white">Nombre</label>
      <input type="text" name="nombre" className="w-full px-3 py-2 border border-gray-300 
       rounded-md" placeholder="Pc Gamer" onChange={handlerChange}/>
    </div>
  
    <div class="mb-5">
      <label for="text" class="block mb-2 text-sm font-medium 
      text-gray-900 dark:text-white">Precio</label>
      <input type="text" name="precio" className="w-full px-3 py-2 border border-gray-300 
      rounded-md" placeholder="100Bs" onChange={handlerChange}/>
    </div>

    {/* <div class="mb-5">
      <select id="countries" className="w-full px-3 py-2 border border-gray-300 rounded-md">
         <option>United States</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
       </select>
    </div> */}
  
     <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
      focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
      dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrar Producto</button>
     </form>

     <div className="flex justify-center mt-8 ">
             <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-base h-10">
                   <li>
                       <a href="/producto" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                       Anterior
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

export default page