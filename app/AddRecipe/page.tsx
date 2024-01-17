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
import {GetUsername} from "@/components/Navigation";

const cookieStore = cookies();
const supabase = createServerComponentClient({ cookies: () => cookieStore });

export default async function AddRecipePage(){
    const {
        data: { user },
    } = await supabase.auth.getUser();

    const {
        data: { session },
    } = await supabase.auth.getSession();

    let userID: any;

    console.log(user?.email)

    if(user != null){
        const { data, error } = await supabase
            .from('User')
            .select('id').eq('email', user.email)
            .limit(1)
            .single()
        userID = data.id;
        console.log(userID)
    }

    const AddRecipeToDB = async (formData: FormData) => {
        "use server"
        const recipeName = formData.get('RecipeName') as string
        const tags = formData.get('RecipeTags') as string
        const imageURL = formData.get('RecipeImageURL') as string
        const recipeText = formData.get('RecipeText') as string
        const userName = (await GetUsername()).username.name

        const{data, error} = await supabase.from('recipe').insert(
            {name: recipeName, imageurl: imageURL, recipetext: recipeText, creator_name: userName})

        if(error){
            return console.log(error);
        }

        return redirect('/')
    }

    return session && user ? (
        <Stack spacing={2} className={"bg-white p-3 rounded-md w-2/3"}>
            <Stack spacing={2} className={"w-11/12"}>
                <Typography className={"font-bold"} variant="h5">Add a new recipe!</Typography>
                <form className={"space-y-4"} action={AddRecipeToDB}>
                    <TextField className={"w-full"} placeholder="Recipe name" name="RecipeName" size="small" required color="warning"/>
                    <TextField className={"w-full"} placeholder="Add tags" name="RecipeTags" size="small" color="warning"/>
                    <TextField className={"w-full"} placeholder="Recipe image URL" name="RecipeImageURL" size="small" color="warning"/>
                    <TextField className={"w-full"} required placeholder="Recipe text" name="RecipeText" size="small" color="warning" minRows={5}/>
                    <Box className={"space-x-5"}>
                        <KarlButton variant="contained" type="submit" text="Publish recipe"/>
                        <KarlButton variant="outlined" text="Save as a draft"/>
                    </Box>
                </form>
            </Stack>
        </Stack>
    ) : (
        <AddRecipeLogIn/>
    )
}