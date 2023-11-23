import Detalle_ventaCard from "@/components/Detalle_ventaCard";
import Link from "next/link";

export const feachDetalle_ventas=()=>{
   return fetch('http://localhost:3000/api/detalle_venta',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Detalle_ventas(){
    const {detalle_ventas}= await feachDetalle_ventas();
    console.log(detalle_ventas);
    return(
        <div>
            <h1>Detalle_ventas</h1>
            <Link href='/detalle_venta/new'>Nueva Venta</Link>
            <div className="grid grid-cols-3 gap-2">
                {
                    detalle_ventas.map(detalle_venta=>(
                        <Detalle_ventaCard key={detalle_venta._id} detalle_venta={detalle_venta}  className="bg-gray-700 p-10 mt-5 text-white rounded-xl hover:bg-gray-500" />
                    ))
                }
            </div> 
        </div>
    )

}