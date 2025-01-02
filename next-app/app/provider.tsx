"use client"

// whenever you're using next auth, recoil, or theme provider; all of these need to run on client 
// for provider learn context api in react
// and use the provider component to  wrap childern in layout.tsx(inside body)
import { SessionProvider } from 'next-auth/react'
import React from 'react'

export const Providers = ({ children}: {
    children: React.ReactNode
}) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}
