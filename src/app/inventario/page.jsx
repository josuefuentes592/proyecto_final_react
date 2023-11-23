import InventarioCard from "@/components/InventarioCard";
import Link from "next/link";

export const feachInventarios=()=>{
   return fetch('http://localhost:3000/api/inventario',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Inventarios(){
    const {inventarios}= await feachInventarios();
    console.log(inventarios);
    return(
        <div>
            <h1>Inventario</h1>
            <Link href='/inventario/new'>Agregar Inventario</Link>
            <div className="grid grid-cols-3 gap-2">
                {
                    inventarios.map(inventario=>(
                        <InventarioCard key={inventario._id} inventario={inventario}  className="bg-gray-700 p-10 mt-5 text-white rounded-xl hover:bg-gray-500" />
                    ))
                }
            </div> 
        </div>
    )

}