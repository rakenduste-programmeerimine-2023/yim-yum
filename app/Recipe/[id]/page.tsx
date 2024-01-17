import Box from "@mui/material/Box";
import {Alert, Button, Divider, Stack, Typography} from "@mui/material";
import React from "react";
import {notFound, redirect} from "next/navigation";
import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
import {KarlButton} from "@/components/NewComponents";

export default async function RecipePage({ params: { id } }: { params: { id: string } }) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data: recipe } = await supabase.from('recipe').select('name, cumulative_rating, imageurl, recipetext, creator_name').match({ id }).single()

    const AddRating = async(formData: FormData) => {
        "use server"
        const { data: { user }, error} = await supabase.auth.getUser();
        console.log(error)
        if(user != null){
        }
        else{
            return redirect("/Login")
        }
    }




    if (!recipe) {
        notFound()
    }
    return (
        <Stack spacing={2} className={"bg-white p-3 rounded-md w-2/3"}>
            <Stack spacing={2} className={"w-11/12"}>
                <Typography variant={"h5"} className={"font-bold"}>{recipe.name}</Typography>
                <Box component="img" src={recipe.imageurl} className={"max-h-80 max-w-2xl border"}/>
                <Typography variant={"p"}>
                    {recipe.recipetext}
                </Typography>
                <Divider/>
                <Typography>Rating: {recipe.cumulative_rating}/5</Typography>
                <form action={AddRating}>
                    <KarlButton variant="contained" type="submit" text="Rate"/>
                </form>
                <Divider/>
            </Stack>
        </Stack> )
}