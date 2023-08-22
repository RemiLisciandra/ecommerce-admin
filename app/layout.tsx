import {ClerkProvider} from '@clerk/nextjs'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Tableau de bord',
    description: 'E-Commerce tableau de bord',
}

export default async function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body className={inter.className}>
            {children}
            </body>
            </html>
        </ClerkProvider>
    )
}