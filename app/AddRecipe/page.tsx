import {KarlButton} from "@/components/NewComponents";
import React from "react";
import Box from "@mui/material/Box";
import {cookies} from "next/headers";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import Link from "next/link";
import AddRecipe from "@/components/pages/AddRecipe";
import AddRecipeLogIn from "@/components/pages/AddRecipeLogIn";



export default async function AddRecipePage(){
    const cookieStore = cookies();
    const supabase = createServerComponentClient({ cookies: () => cookieStore });

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const {
        data: { session },
    } = await supabase.auth.getSession();

    return session && user ? (
        <AddRecipe/>
    ) : (
        <AddRecipeLogIn/>
    )
}