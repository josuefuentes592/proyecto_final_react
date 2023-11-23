import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link"
function Detalle_ventaCard({detalle_venta}) {
  return (
          <div className="bg-gray-700 p-10 mt-5 text-white rounded-xl hover:bg-gray-500" >
              <h1>{detalle_venta.cantidad}</h1>
              <div className="space-between">
                <Link href={`/detalle_venta/${detalle_venta._id}/delete`}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </Link>
                <Link href={`/detalle_venta/${detalle_venta._id}/update`}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </Link>
              </div>
                            
          </div>

  )
}

export default Detalle_ventaCard