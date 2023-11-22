import UsuarioCard from "@/components/UsuarioCard";
import Link from "next/link";

export const feachUsuarios=()=>{
   return fetch('http://localhost:3000/api/usuario',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Usuarios(){
    const {usuarios}= await feachUsuarios();
    console.log(usuarios);
    return(
        <div>
            <h1>Usuarios</h1>
            <Link href='/usuario/new'>Nuevo Usuario</Link>
            <div className="grid grid-cols-3 gap-2">
                {
                    usuarios.map(usuario=>(
                        <UsuarioCard key={usuario._id} usuario={usuario}  className="bg-gray-700 p-10 mt-5 text-white rounded-xl hover:bg-gray-500" />
                    ))
                }
            </div> 
        </div>
    )

}