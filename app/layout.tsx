import {ClerkProvider} from '@clerk/nextjs'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import {ModalProvider} from "@/providers/modal-provider";
import {ToasterProvider} from "@/providers/toast-provider";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Admin dashboard',
    description: 'E-Commerce'
}

export default async function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body className={inter.className}>
            <ToasterProvider/>
            <ModalProvider/>
            {children}
            </body>
            </html>
        </ClerkProvider>
    )
}