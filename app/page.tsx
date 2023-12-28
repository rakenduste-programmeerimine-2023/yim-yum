import { cookies } from 'next/headers'
import React from "react";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Box from '@mui/material/Box';
import Browse from "@/components/pages/Browse";
import {Stack} from "@mui/material";


export default async function Index() {
  const cookieStore = cookies()
  return (
      <div className={"w-full"}>
          <Navigation/>

          <Header/>
          <div>
              <Stack direction={"row"} justifyContent={"center"}>
                  <Browse/> {/*Later this will change depending on which page we are on*/}
              </Stack>
          </div>
      </div>
  )
}
