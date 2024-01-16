import {KarlButton} from "@/components/NewComponents";
import React from "react";
import Box from "@mui/material/Box";
import {cookies} from "next/headers";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import Link from "next/link";
import AddRecipeLogIn from "@/components/pages/AddRecipeLogIn";
import {Stack, TextField, Typography} from "@mui/material";

const cookieStore = cookies();
const supabase = createServerComponentClient({ cookies: () => cookieStore });


async function AddRecipe(){
    return (
        <Stack spacing={2} className={"bg-white p-3 rounded-md w-2/3"}>
            <Stack spacing={2} className={"w-11/12"}>
                <Typography className={"font-bold"} variant="h5">Add a new recipe!</Typography>
                <TextField label="Recipe name" id="RecipeName" size="small" required color="warning"/>
                <TextField label="Add tags" id="RecipeTags" size="small" color="warning"/>
                <Box></Box>
                <TextField label="Recipe image URL" id="RecipeImageURL" size="small" color="warning"/>
                <TextField multiline required label="Recipe text" id="RecipeText" color="warning" minRows={5}/>
                <Box className={"space-x-5"}>
                    <KarlButton variant="contained" text="Publish recipe"/>
                    <KarlButton variant="outlined" text="Save as a draft"/>
                </Box>
            </Stack>
        </Stack>
    )
}

export default async function AddRecipePage(){
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const {
        data: { session },
    } = await supabase.auth.getSession();

    if(user != null){
        const { data: { username }, error } = await supabase
            .from('User')
            .select('name').eq('email', user.email)
            .limit(1)
            .single()
    }

    return session && user ? (
        <AddRecipe/>
    ) : (
        <AddRecipeLogIn/>
    )
}