import ProductoCard from "@/components/ProductoCard";
import Link from "next/link";

export const feachProductos=()=>{
   return fetch('http://localhost:3000/api/producto',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Productos(){
    const {productos}= await feachProductos();
    console.log(productos);
    return(
        <div>
            <h1>Productos</h1>
            <Link href='/producto/new'>Nuevo Producto</Link>
            <div className="grid grid-cols-3 gap-2">
                {
                    productos.map(producto=>(
                        <ProductoCard key={producto._id} producto={producto}  className="bg-gray-700 p-10 mt-5 text-white rounded-xl hover:bg-gray-500" />
                    ))
                }
            </div> 
        </div>
    )

}