import Box from "@mui/material/Box";
import {Card, CardContent, CardMedia, Divider, List, Stack, TextField, Typography} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import {GenerateRecipes} from "@/components/placeholders";
import SearchBox from "@/components/SearchBox";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";

const cookieStore = cookies();
const supabase = createServerComponentClient({cookies: () => cookieStore});

export async function CreateRecipeObjects(){
    let recipesFromDB: {
        name: any;
        imageurl: any; }[] | null = [];
    let recipeCount: number | null;
    let recipes = []


    const {data, error, count} = await supabase.from('recipe').select('*', { count: 'exact' }).eq('visible', 'TRUE')
    recipesFromDB = data;
    recipeCount = count;
    console.log("Recipe count: " + count)
    console.log('Data: ', data)
    if(error){
        console.log(error)
    }

    for (let i = 0; i < recipeCount; i++) {
        console.log("Running for loop")
        if (recipesFromDB) {
            const recipe = {
                name: recipesFromDB[i].name,
                thumbnail: recipesFromDB[i].imageurl
            };
            recipes.push(recipe);
        }
    }

    return recipes;
}

const RecipeGrid = async () => {
    const publicRecipes = await CreateRecipeObjects();
    return (
        <Grid container spacing={2} maxWidth="600px" columns={4} className={"bg-white rounded-md"}>
            {publicRecipes.map((recipe, index) => (
                <Grid xs={1} key={index}>
                    <Typography>{recipe.name}</Typography>
                </Grid>
            ))}
        </Grid>
    )
}


export default async function Browse(){

    return (
        <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
            <SearchBox/>
            <RecipeGrid/>
        </Stack>
    )
}