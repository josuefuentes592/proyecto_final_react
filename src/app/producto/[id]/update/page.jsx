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
    const handlerSubmit=async(e)=>{
        e.preventDefault();
        console.log(newProducto);

        const res = await fetch(`/api/producto/${params.id}`,{
            method:'PUT',
            body:JSON.stringify(newProducto)
        })

        const data = await res.json();
        console.log(data);
        router.push('/producto');
        router.refresh();
    }

    const handleDelete=async()=>{
        //console.log();
        if(window.confirm(`Esta seguro de eliminar el producto ${newProducto.nombre}`)){
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
    const handlerChangeToggle=(e)=>{
        console.log(e.target.checked)
        setNewProducto({...newProducto,[e.target.name]:e.target.checked})
    }
    const handlerChange=(e)=>{
        //console.log(e.target.value)
        setNewProducto({...newProducto,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        getProducto()
    },[])

return(
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">

        <form onSubmit={handlerSubmit}>
        <input type="text" name="nombre" placeholder="Ingrese nombre producto"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg
             rounded-lg w-full p-4 my-1"
        onChange={handlerChange} value={newProducto.nombre}/>
        
        <input type="text" name="precio" placeholder=" precio"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg  w-full  p-4  my-1"
        onChange={handlerChange} value={newProducto.precio}/>

        <button type="submit"
        className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >Actualizar Producto</button>
    </form>
    </div>
    
)
}
export default HomePage