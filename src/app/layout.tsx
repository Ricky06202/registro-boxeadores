import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Container from '@mui/material/Container';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ComiBox',
  description: 'Sistema de registro de boxeadores',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  )
}
