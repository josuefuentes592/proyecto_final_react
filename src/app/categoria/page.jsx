import CategoriaCard from "@/components/CategoriaCard";
import Link from "next/link";

export const feachCategorias=()=>{
   return fetch('http://localhost:3000/api/categoria',{ cache: 'no-store'} )
   //return fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json());
}

export default async function Categorias(){
    const {categorias}= await feachCategorias();
    console.log(categorias);
    return(
        <div>
            <h1>Categorias</h1>
            <Link href='/categoria/new'>Nueva Categoria</Link>
            <div className="grid grid-cols-3 gap-2">
                {
                    categorias.map(categoria=>(
                        <CategoriaCard key={categoria._id} categoria={categoria}  className="bg-gray-700 p-10 mt-5 text-white rounded-xl hover:bg-gray-500" />
                    ))
                }
            </div> 
        </div>
    )

}