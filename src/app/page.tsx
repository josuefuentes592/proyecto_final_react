import Link from "next/link";

export default function Home() {
  return (
        

<div>

<table>
      <thead>
        <tr>
          <th>Columna 1</th>
          <th>Columna 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fila 1, Columna 1</td>
          <td>Fila 1, Columna 2</td>
          
        </tr>
        <tr>
          <td>Fila 2, Columna 1</td>
          <td>Fila 2, Columna 2</td>
          
        </tr>
        <tr>
          <td>Fila 3, Columna 1</td>
          <td>Fila 3, Columna 2</td>
          
        </tr>
        <tr>
          <td>Fila 4, Columna 1</td>
          <td>Fila 4, Columna 2</td>
          
        </tr>
      </tbody>
    </table>

<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>


</div>



      )
}
