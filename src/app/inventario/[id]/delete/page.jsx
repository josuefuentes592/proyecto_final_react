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
    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar la inventario ${newInventario.nombre_articulo}`)){
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



    useEffect(()=>{
        getInventario()
    },[])

return(
    <div>
        <h1>{params.id}</h1>
            <h1>Eliminar: {newInventario.nombre_articulo}</h1>
            <button type="button" className="bg-red-500 px-3 py-1 rounded-md" 
                onClick={handleDelete}>
                    Eliminar Producto
            </button>
    </div>
)
}
export default HomePage