import { Inter } from 'next/font/google'
import './globals.css'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QuizFlY',
  description: 'Plataforma de preparacion para el examen de ingreso a la Uni',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className='container  mx-auto px-5 py-3'>
          <Sidebar />
          <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            {children}
            </div>
          </div>
          {/* {children} */}
        </main>
      </body>
    </html>
  )
}
