import { Header } from '@/modules/shared/components/Header'
import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
    </>
  )
}
