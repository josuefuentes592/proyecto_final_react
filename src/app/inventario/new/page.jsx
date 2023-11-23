"use client"
import { useEffect, useState } from "react";
import { useRouter,useParams } from "next/navigation";

function page() {
    const [inventario,setInventario] = useState(
        {
            nombre_articulo:"",
            stock:"",
            proveedor:"",
            stock:"",
            precio_compra:"",
            precio_venta:"",
            fecha_adquirido:""
        }
    );

    const router = useRouter();
    const params = useParams();

    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(inventario);

        const res = await fetch('/api/inventario',{
            method:'POST',
            body:JSON.stringify(inventario)
        })

        const data = await res.json();
        console.log(data);
        router.push('/inventario');
        router.refresh();
    }
    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setInventario({...inventario,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        console.log(e.target.value)
        setInventario({...inventario,[e.target.name]:e.target.value})
    }
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

        <form onSubmit={handlerSubmit}>
        <input type="text" name="nombre_articulo" placeholder="Ingrese nombre del articulo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>

        <input type="number" name="stock" placeholder="Stock"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>

        <input type="text" name="proveedor" placeholder="Ingrese el proveedor"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>

        <input type="number" name="precio_compra" placeholder="Precio de la compra"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>

        <input type="number" name="precio_venta" placeholder="Precio de venta"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>

        <h1>Fecha de adquisicion</h1>
        <input type="date" name="fecha_adquirido" placeholder="Fecha de compra"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg 
            rounded-lg w-full p-4 my-1"
        onChange={handlerChange}/>

        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Agregar Inventario</button>
    </form>
    </div>
    
  )
}

export default page