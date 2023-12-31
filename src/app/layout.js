import './globals.css'
import { Source_Serif_4 } from 'next/font/google'

const ss4 = Source_Serif_4({ subsets: ['latin'], weight: ["400","700"] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ss4.className}>{children}</body>
    </html>
  )
}
