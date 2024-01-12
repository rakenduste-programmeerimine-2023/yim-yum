import { GeistSans } from 'geist/font'
import './globals.css'
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import {Stack} from "@mui/material";
import Browse from "@/components/pages/Browse";
import React from "react";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Next.js and Supabase Starter Kit',
  description: 'The fastest way to build apps with Next.js and Supabase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className={"w-full"}>
        <Navigation/>

        <Header/>
        <div>
          <Stack direction={"row"} justifyContent={"center"}>
            {children}
          </Stack>
        </div>
      </div>
  )
}
