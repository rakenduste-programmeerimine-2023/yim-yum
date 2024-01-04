import { cookies } from 'next/headers'
import React from "react";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Browse from "@/components/pages/Browse";
import {Stack} from "@mui/material";
import Login from "@/components/pages/Login";
import Register from "@/components/pages/Register";
import ForgotPassword from "@/components/pages/ForgotPassword";
import AddRecipe from "@/components/pages/AddRecipe";

export default async function Index() {
  const cookieStore = cookies()
  return (
      <div className={"w-full"}>
          <Navigation/>

          <Header/>
          <div>
              <Stack direction={"row"} justifyContent={"center"}>
                  {/*<Browse/> /*Later this will change depending on which page we are on
                  <Login/>
                  <Register/>
                  <ForgotPassword/> */ }
                  <AddRecipe/>
              </Stack>
          </div>
      </div>
  )
}
