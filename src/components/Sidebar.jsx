import Link from "next/link"

function Sidebar() {
  return (
    

<aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li>
            <a href="/" className="flex items-center p-3 text-lg text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 15h-8v-2h8v2zm0-4h-8v-2h8v2zm0-4h-8V7h8v2z"/>
              </svg>
               <span className="ms-3">Inicio</span>
            </a>
         </li>
         <li>
            <a href="/usuario" className="flex items-center p-3 text-lg text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Usuarios</span>
            </a>
         </li>
         <li>
            <a href="/producto" className="flex items-center p-3 text-lg text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Productos</span>
            </a>
         </li>
         <li>
            <a href="/cliente" className="flex items-center p-3 text-lg text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1.5-5.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5H10z"/>
            </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Cliente</span>
            </a>
         </li>
         <li>
            <a href="/categoria" className="flex items-center p-3 text-lg text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"/>
            </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Categoria</span>
            </a>
         </li>
         <li>
            <a href="/venta" className="flex items-center p-3 text-lg text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.028 6.672l-.74-2.963A2.001 2.001 0 0 0 13.353 2H6.647a2 2 0 0 0-1.935 1.708l-.74 2.963A3.999 3.999 0 0 0 4 10v4a4 4 0 0 0 4 4h1v2a1 1 0 0 0 2 0v-2h4v2a1 1 0 0 0 2 0v-2h1a4 4 0 0 0 4-4v-4a3.999 3.999 0 0 0-1.972-3.328zM16.68 5.075l.64 2.56A2.012 2.012 0 0 0 18 10v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 0 1.293-3.707l.64-2.56a3.978 3.978 0 0 0 3.113 1.292h3.494a3.978 3.978 0 0 0 3.113-1.292z"/>
            </svg>

               <span className="flex-1 ms-3 whitespace-nowrap">Venta</span>
            </a>
         </li>
         <li>
            <a href="/inventario" className="flex items-center p-3 text-lg text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M20 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-1 16H5V6h14v12z"/>
            </svg>

               <span className="flex-1 ms-3 whitespace-nowrap">Inventario</span>
            </a>
         </li>
         <li>
            <a href="/login" className="flex items-center p-3 text-lg text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Cerrar session</span>
            </a>
         </li>
      </ul>
   </div>
</aside>


            
  )
}

export default Sidebar