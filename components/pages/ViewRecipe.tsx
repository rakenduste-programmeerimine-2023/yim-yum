import {Chip, Stack, TextField, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {KarlButton} from "@/components/NewComponents";
import React from "react";
import {GenerateRecipeData} from "@/components/placeholders";

let recipeData = GenerateRecipeData;

const RecipeTags = () => {
    return(
        <Stack direction={"row"} spacing={1}>
            {recipeData().tags.map((tag, index) => (
                <Chip key={index} color="warning" label={tag}/>
            ))}
        </Stack>
    )
}

export default async function ViewRecipe(){
    return (
        <Stack spacing={2} className={"bg-white p-3 rounded-md w-2/3"}>
            <Stack spacing={2} className={"w-11/12"}>
                <Typography variant={"h5"} className={"font-bold"}>{recipeData().name}</Typography>
                <Box component="img" src={recipeData().imageURL} className={"max-h-80 max-w-2xl"}/>
                <RecipeTags/>
                <Typography>
                    {recipeData().recipeText}
                </Typography>
            </Stack>
        </Stack>
    )
}