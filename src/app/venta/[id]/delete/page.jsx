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
    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar la venta ${newVenta.nombre}`)){
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



    useEffect(()=>{
        getVenta()
    },[])

return(
<div>
        <div class="items-center justify-center h-screen mt-8">
            <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 
            rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span href="/venta" class="sr-only">Cerrar</span>
                {/* <a href="/venta" >Cerrar</a> */}
            </button>

            <div class="p-4 md:p-5 text-center">
                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">¿Estás seguro de que deseas eliminar este venta <span className="font-bold">{newVenta.nombre}</span> ?</h3>
                <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 
                dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2" onClick={handleDelete} >
                Eliminar Venta
                </button>

                <a href="/venta" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 
                rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 
                dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
               <span className="flex-1 ms-3 whitespace-nowrap">No, cancelar</span>
               </a>

                {/* buena Practica */}
               {/* <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100
                focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium
                 px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 
                 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button> */}


            </div>
        </div>
    

</div>

)
}
export default HomePage