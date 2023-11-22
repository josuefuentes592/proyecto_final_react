import ClienteCard from "@/components/ClienteCard";
import Link from "next/link";

export const feachClientes=()=>{
   return fetch('http://localhost:3000/api/cliente',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Clientes(){
    const {clientes}= await feachClientes();
    console.log(clientes);
    return(
        <div>
            <h1>Clientes</h1>
            <Link href='/cliente/new'>Nuevo Cliente</Link>
            <div className="grid grid-cols-3 gap-2">
                {
                    clientes.map(cliente=>(
                        <ClienteCard key={cliente._id} cliente={cliente}  className="bg-gray-700 p-10 mt-5 text-white rounded-xl hover:bg-gray-500" />
                    ))
                }
            </div> 
        </div>
    )

}