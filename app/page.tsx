import { cookies } from 'next/headers'
import React from "react";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Browse from "@/components/pages/Browse";
import {Stack} from "@mui/material";
import AddRecipe from "@/components/pages/AddRecipe";
import AddRecipeLogIn from "@/components/pages/AddRecipeLogIn";
import ViewRecipe from "@/components/pages/ViewRecipe";
import {createClient} from "@/utils/supabase/server";

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();
  return (
      <Browse/>
  )
}
