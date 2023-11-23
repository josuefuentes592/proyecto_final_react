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




            <h1 className="mb-4 text-xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white">
                Lista-
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                    Productos
                </span>
            </h1>



            <Link className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" href='/producto/new'>Nuevo Producto</Link>


            {/* <div className="grid grid-cols-3 gap-2">
                {
                    productos.map(producto=>(
                        <ProductoCard key={producto._id} producto={producto}  className="bg-gray-700 p-10 mt-5 text-white rounded-xl hover:bg-gray-500" />
                    ))
                }
            </div>  */}


<br />
<br />


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nombre Producto
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Categoria
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Precio
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productos.map(producto=>(
                                <ProductoCard key={producto._id} producto={producto} />
                            ))
                        }
                    </tbody>
                </table>
            </div>



        </div>
    )

}