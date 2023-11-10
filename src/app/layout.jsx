
import './globals.css'
import { Inter } from 'next/font/google'
import Cabecalho from '@/components/Cabecalho/Cabecalho'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Entrega 4',
  description: '1TDSPM - Entrega 4',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="dark:bg-slate-400">

        <Cabecalho/>
        {children}
        
        </body>
    </html>
  )
}
