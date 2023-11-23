"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HomePage ({params}){
    const [newProducto,setNewProducto]=useState({
        nombre:"",
        precio:""
    });

    const router = useRouter();
    //const params = useParams();

    const getProducto = async ()=>{
        const res = await fetch(`/api/producto/${params.id}`);
        const {productos} = await res.json();
        console.log(productos);
        setNewProducto({
            nombre:productos.nombre,
            precio:productos.precio
        })
    }
    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar la producto ${newProducto.nombre}`)){
            try {
                const res=await fetch(`/api/producto/${params.id}`,{
                    method:"DELETE"
                })
                router.push('/producto');
                router.refresh(); 
            } catch (error) {
                console.log(error)
            }
        }
    }



    useEffect(()=>{
        getProducto()
    },[])

return(
    <div>
        <h1>{params.id}</h1>
            <h1>Eliminar: {newProducto.nombre}</h1>
            <button type="button" className="bg-red-500 px-3 py-1 rounded-md" 
                onClick={handleDelete}>
                    Eliminar Producto
            </button>
    </div>
)
}
export default HomePage