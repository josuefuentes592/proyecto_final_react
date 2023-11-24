import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link"
function InventarioCard({inventario}) {
  return (

    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {inventario.nombre_articulo}
        </th>
        <td className="px-6 py-4">
        {inventario.stock}
        </td>
        <td className="px-6 py-4">
        {inventario.proveedor}
        </td>
        <td className="px-6 py-4">
          {inventario.precio_compra} Bs
        </td>
        <td className="px-6 py-4">
          {inventario.precio_venta} Bs
        </td>
        <td className="px-6 py-4 text-center">
          <div className="flex justify-center items-center">

            <Link href={`/inventario/${inventario._id}/update`} className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <FontAwesomeIcon icon={faPenToSquare} />
            </Link>

            <Link href={`/inventario/${inventario._id}/delete`} className="px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              <FontAwesomeIcon icon={faTrashCan} />
            </Link>

          </div>
        </td>
      </tr>

  )
}

export default InventarioCard