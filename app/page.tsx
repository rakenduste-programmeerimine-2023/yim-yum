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
import AddRecipeLogIn from "@/components/pages/AddRecipeLogIn";
import ViewRecipe from "@/components/pages/ViewRecipe";

export default async function Index() {
  const cookieStore = cookies()
  return (
      <Browse/>
  )
}
