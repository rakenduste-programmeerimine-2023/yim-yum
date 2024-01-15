import {Button, Stack, TextField, Typography} from "@mui/material";
import {KarlButton} from "@/components/NewComponents";
import React from "react";
import Box from "@mui/material/Box";



export default async function AddRecipe(){
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