import Box from "@mui/material/Box";
import {Alert, Button, Divider, Stack, Typography} from "@mui/material";
import React from "react";
import {notFound, redirect} from "next/navigation";
import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
import {KarlButton} from "@/components/NewComponents";

export default async function RecipePage({ params: { id } }: { params: { id: string } }) {
    "use server"
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data: recipe } = await supabase.from('recipe').select('id, name, cumulative_rating, imageurl, recipetext, creator_name').match({ id }).single()
    const {data: {user}, error} = await supabase.auth.getUser()
    const {data: { session },} = await supabase.auth.getSession();


    const AddRating = async (formData: FormData) => {
        "use server"
        const cookieStore = cookies();
        const supabase = createClient(cookieStore);
        const {data: {user}, error} = await supabase.auth.getUser()
        const id = formData.get('recipeID')
        const {data, count} = await supabase.from('recipe_ratings').select('*', {head: false, count: 'exact'}).eq('rating_user_email', user?.email).eq('recipe_id', id).single()

        const rating = formData.get('rating')
        console.log("id is ", id)
        if(user){
            console.log("User present")
            if(count != 1){
                const{data, error} = await supabase.from('recipe_ratings').insert({rating_user_email: user.email, recipe_id: id, rating: rating})
                if(error){
                    console.log(error)
                }
            }
            else{
                const{data, error} = await supabase.from('recipe_ratings').update({rating: rating}).eq('rating_user_email', user?.email).eq('recipe_id', id)
            }
        }
        else{
            console.log("User not present")
        }
        return redirect('/')
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
                <form className={"space-x-2"} action={AddRating}>
                    <label>
                        1 <input type="radio" name="rating" value="1"/>
                    </label>
                    <label>
                        2 <input type="radio" name="rating" value="2"/>
                    </label>
                    <label>
                        3 <input type="radio" name="rating" value="3"/>
                    </label>
                    <label>
                        4 <input type="radio" name="rating" value="4"/>
                    </label>
                    <label>
                        5 <input type="radio" name="rating" value="5"/>
                    </label>
                    <input type="hidden" name="recipeID" value={recipe.id} />
                    <br/>
                    <KarlButton variant="contained" type="submit" text="Rate"/>
                </form>
                <Divider/>
            </Stack>
        </Stack>)
}