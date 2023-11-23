"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newInventario,setNewInventario]=useState({
        nombre_articulo:"",
        stock:"",
        proveedor:"",
        stock:"",
        precio_compra:"",
        precio_venta:"",
        fecha_adquirido:""
    });

    const router = useRouter();
    //const params = useParams();

    const getInventario = async ()=>{
        const res = await fetch(`/api/inventario/${params.id}`);
        const {inventarios} = await res.json();
        console.log(inventarios);
        setNewInventario({
            nombre_articulo:inventarios.nombre_articulo,
            stock:inventarios.stock,
            proveedor:inventarios.proveedor,
            stock:inventarios.stock,
            precio_compra:inventarios.precio_compra,
            precio_venta:inventarios.precio_venta,
            fecha_adquirido:inventarios.fecha_adquirido
        })
    }
    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(newInventario);

        const res = await fetch(`/api/inventario/${params.id}`,{
            method:'PUT',
            body:JSON.stringify(newInventario)
        })

        const data = await res.json();
        console.log(data);
        router.push('/inventario');
        router.refresh();
    }

    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar el inventario ${newInventario.nombre}`)){
            try {
                const res=await fetch(`/api/inventario/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/inventario');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }
    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setNewInventario({...newInventario,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setNewInventario({...newInventario,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        getInventario()
    },[])

return(
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

        <form onSubmit={handlerSubmit}>
        <input type="text" name="nombre_articulo" placeholder="Ingrese nombre del articulo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newInventario.nombre_articulo}/>

        <input type="number" name="stock" placeholder="Stock"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newInventario.stock}/>

        <input type="text" name="proveedor" placeholder="Ingrese el proveedor"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newInventario.proveedor}/>

        <input type="number" name="precio_compra" placeholder="Precio de la compra"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newInventario.precio_compra}/>

        <input type="number" name="precio_venta" placeholder="Precio de venta"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newInventario.precio_venta}/>

        <h1>Fecha de adquisicion</h1>
        <input type="date" name="fecha_adquirido" placeholder="Fecha de compra"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg 
            rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newInventario.fecha_adquirido}/>

        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Actualizar  Inventario</button>
    </form>
    </div>

    
    
)
}
export default HomePage