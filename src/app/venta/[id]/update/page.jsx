"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newVenta,setNewVenta]=useState({
        cantidad:"",
        fecha_venta:"",
        precio_total:""
    });

    const router = useRouter();
    //const params = useParams();

    const getVenta = async ()=>{
        const res = await fetch(`/api/venta/${params.id}`);
        const {ventas} = await res.json();
        console.log(ventas);
        setNewVenta({
            cantidad:ventas.cantidad,
            fecha_venta:ventas.fecha_venta,
            precio_total:ventas.precio_total
        })
    }
    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(newVenta);

        const res = await fetch(`/api/venta/${params.id}`,{
            method:'PUT',
            body:JSON.stringify(newVenta)
        })

        const data = await res.json();
        console.log(data);
        router.push('/venta');
        router.refresh();
    }

    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar el venta ${newVenta.nombre}`)){
            try {
                const res=await fetch(`/api/venta/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/venta');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }
    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setNewVenta({...newVenta,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setNewVenta({...newVenta,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        getVenta()
    },[])   

return(

<div className=" items-center justify-center h-screen mt-8">
    <form class="max-w-sm mx-auto" onSubmit={handlerSubmit}>
      <h5 id="drawer-label" class="inline-flex items-center mb-6 text-sm font-semibold 
       text-gray-500 uppercase dark:text-gray-400">Actualizar Venta</h5>
    <div class="mb-5">
      <select id="productos" className="w-full px-3 py-2 border border-gray-300 rounded-md">
         <option>Monitor</option>
        <option>Memoria RAM</option>
        <option>Mause</option>
        <option>Bateria portatil</option>
        <option>Bateria s</option>
       </select>
    </div>

    <div class="mb-5">
      <label for="text" class="block mb-2 text-sm font-medium 
      text-gray-900 dark:text-white">Cantidad de productos</label>
      <input type="text" name="cantidad" className="w-full px-3 py-2 border border-gray-300 
       rounded-md" placeholder="10" onChange={handlerChange} value={newVenta.cantidad}/>
    </div>

    <div class="mb-5">
         <label for="message" class="block mb-2 text-sm font-medium 
         text-gray-900 dark:text-white">Fecha de Venta</label>
        <input type="date" name="fecha_venta" placeholder="Fecha de venta"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg 
            rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newVenta.fecha_venta}/>
    </div>
  
    <div class="mb-5">
      <label for="text" class="block mb-2 text-sm font-medium 
      text-gray-900 dark:text-white">Precio total</label>
      <input type="text" name="precio_total" className="w-full px-3 py-2 border border-gray-300 
       rounded-md" placeholder="100Bs" onChange={handlerChange} value={newVenta.precio_total}/>
    </div>
  
     <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
      focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
      dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Actualizar Venta</button>
     </form>

     <div className="flex justify-center mt-8 ">
             <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-base h-10">
                   <li>
                       <a href="/venta" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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