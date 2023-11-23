import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link"
function ProductoCard({producto}) {
  return (




    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {producto.nombre}
        </th>
        <td className="px-6 py-4">
            Silver
        </td>
        <td className="px-6 py-4">
            Sin Categoria
        </td>
        <td className="px-6 py-4">
          {producto.precio} Bs
        </td>
        <td className="px-6 py-4 text-center">
          
          <div className="flex justify-center items-center">

            <Link href={`/producto/${producto._id}/update`} className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <FontAwesomeIcon icon={faPenToSquare} />
            </Link>

            <Link href={`/producto/${producto._id}/delete`} className="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              <FontAwesomeIcon icon={faTrashCan} />
            </Link>

          </div>
        </td>

      </tr>





          // <div className="bg-gray-700 p-10 mt-5 text-white rounded-xl hover:bg-gray-500" >
          //     <h1>{producto.nombre}</h1>
          //     <div className="space-between">
          //       <Link href={`/producto/${producto._id}/delete`}>
          //         <FontAwesomeIcon icon={faTrashCan} />
          //       </Link>
          //       <Link href={`/producto/${producto._id}/update`}>
          //         <FontAwesomeIcon icon={faPenToSquare} />
          //       </Link>
          //     </div>
                            
          // </div>

  )
}

export default ProductoCard