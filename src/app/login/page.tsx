"use client";

import React, { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/contexts/authContext";
import Cookies from "js-cookie";
import Link from "next/link";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  const { login } = useAuthContext();

  const handleForm = async (event: FormEvent) => {
    event.preventDefault();

    const response = await fetch(
      "https://librarify.latteandfront.es/api/login_check",
      {
        method: "POST",
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      }
    );

    if (!response.ok) {
      return console.log("Error");
    }

    const tokens = await response.json();
    login(tokens.data);

    router.push("/admin");
  };
  return (
    <div className=" items-center justify-center h-screen mt-8">
      
<form onSubmit={handleForm} className="max-w-sm mx-auto">
  <div className="mb-5">
    <label id="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu correo</label>
    <input  onChange={(e) => setPassword(e.target.value)} type="correo" name="correo" id="correo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="josue@gmail.com" required/>
  </div>
  <div className="mb-5">
    <label id="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu contraseña</label>
    <input onChange={(e) => setPassword(e.target.value)} type="password" name="contrasena" id="contrasena" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1234" required/>
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
    </div>
    <label id="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Recuerdame</label>
  </div>

  <Link className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" href='/'>Ingresar</Link>
</form>

    </div>
    
  );
}

export default Page;
